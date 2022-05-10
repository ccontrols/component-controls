import fs from 'fs';
import {
  ArgUsageLocation,
  Document,
  Story,
  StoryArgument,
} from '@component-controls/core';
import { ImportType } from '@component-controls/follow-imports';
import { getASTSource } from '@component-controls/core/node-utils';
import {
  parseFiles,
  isClassLikeProp,
  PropType,
  StringProp,
  hasValue,
  hasProperties,
  isFunctionProp,
  isArrayProp,
} from '@structured-types/api';
import {
  LoadingDocStore,
  ParseStorieReturnType,
  InstrumentOptions,
} from '../types';
import { adjustSourceLocation } from '../misc/source-location';
import { getModuleImports } from '../misc/extract-imports';
import { extractComponent } from './extract-component';
import { componentKey } from '../misc/hashStore';

export const extractCSFStories = async (
  _options: InstrumentOptions,
  { filePath, source }: { source?: string; filePath: string },
): Promise<ParseStorieReturnType> => {
  const components: { [key: string]: string | undefined } = {};
  const store: LoadingDocStore = {
    stories: {},
    doc: undefined,
    components: {},
    packages: {},
  };
  const imports: ImportType[] = [];
  const parsed = parseFiles(
    [filePath],
    {
      collectSourceInfo: 'body',
      collectInnerLocations: true,
      collectParametersUsage: true,
      collectGenerics: false,
      moduleCallback: getModuleImports(imports),
    },
    {
      hostCallback: host => {
        host.readFile = (fileName: string) => {
          if (fileName === filePath && source) {
            return source;
          }
          return fs.readFileSync(fileName, 'utf-8');
        };
      },
    },
  );
  const propValue = async (p: PropType): Promise<any> => {
    if (hasValue(p) && typeof p.value !== 'undefined') {
      return p.value;
    }
    if (isArrayProp(p)) {
      if (!p.value?.length) {
        return undefined;
      }
      const result: any[] = [];
      for (const prop of p.value) {
        const value = await propValue(prop);
        result.push(value);
      }
      return result;
    }

    if (isClassLikeProp(p) && p.properties) {
      const result: Record<string, any> = {};
      for (const prop of p.properties) {
        if (prop.name) {
          const value = await propToField(prop);
          if (typeof value !== 'undefined') {
            Object.assign(result, value);
          }
        }
      }
      return result;
    }
    const value = p.alias || (p as StringProp).value;

    return value;
  };
  const propToField = async (
    p: PropType,
  ): Promise<Record<string, any> | undefined> => {
    const name = p.name;
    if (name) {
      const value = await propValue(p);
      if (typeof value !== 'undefined') {
        if (name === 'component' || name === 'subcomponents') {
          const componentName =
            typeof value === 'object' ? Object.values(value)[0] : value;
          const imported = imports.find(i => i.name === componentName);
          const component = await extractComponent(
            store,
            {
              name: componentName,
              filePath: value?.loc?.filePath,
              from: imported?.from,
              importedName: imported?.importedName,
              loc: value?.loc?.loc,
            },
            filePath,
            _options,
          );

          if (component) {
            const key = componentKey(
              component.filePath ?? filePath,
              componentName,
            );
            store.components[key] = component;
            components[componentName] = key;
          }
        }
        return { [name]: value };
      }
    }
    return undefined;
  };

  const assignPropStory = async (
    prop: PropType,
    story: Story,
  ): Promise<void> => {
    const value = await propToField(prop);
    if (typeof value !== 'undefined') {
      if (prop.name === 'storyName') {
        const name = Object.values(value)[0];
        story.name = name;
      } else {
        Object.assign(story, value);
      }
    }
  };
  const doc = parsed.default;
  if (!doc || !isClassLikeProp(doc)) {
    throw new Error(`esm files should have one default export`);
  }
  if (doc.properties) {
    store.doc = {} as Document;
    for (const prop of doc.properties) {
      const value = await propToField(prop);
      Object.assign(store.doc, value);
    }
    store.doc.componentsLookup = components as Document['componentsLookup'];
  }
  const names = Object.keys(parsed).filter(name => name !== 'default');
  for (const name of names) {
    const propStory = parsed[name];
    const story: Story = {
      name: propStory.name || name,
    };
    story.id = story.name;
    if (propStory.loc?.loc) {
      story.loc = propStory.loc.loc;
      const storySource =
        propStory.loc.filePath === filePath || !propStory.loc.filePath
          ? source
          : fs.readFileSync(propStory.loc.filePath, 'utf-8');
      story.source = getASTSource(storySource, propStory.loc.loc);
    }
    if (isFunctionProp(propStory) && propStory.parameters) {
      const parseArg = (prop: PropType) => {
        const arg: StoryArgument = {
          value: prop.alias || prop.name || '',
        };
        if (prop.loc) {
          arg.loc = adjustSourceLocation(story, prop.loc.loc);
        }
        if (prop.name) {
          arg.name = prop.name;
        }
        if (isClassLikeProp(prop) && prop.properties) {
          arg.value = prop.properties.map(p => parseArg(p));
        } else {
          if (prop.usage) {
            arg.usage = prop.usage.map(
              u =>
                ({
                  loc: adjustSourceLocation(story, u),
                } as ArgUsageLocation),
            );
          }
        }
        return arg;
      };
      story.arguments = propStory.parameters.map(param => parseArg(param));
    }
    if (hasProperties(propStory) && propStory.properties) {
      for (const prop of propStory.properties) {
        if (prop.name === 'story' && hasProperties(prop) && prop.properties) {
          for (const prop1 of prop.properties) {
            await assignPropStory(prop1, story);
          }
        } else {
          await assignPropStory(prop, story);
        }
      }
    }

    store.stories[name] = story;
  }
  return store;
};
