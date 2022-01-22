import {
  ArgUsageLocation,
  Document,
  Story,
  StoryArgument,
} from '@component-controls/core';
import { File } from '@babel/types';
import {
  parseFiles,
  isObjectProp,
  PropType,
  StringProp,
  hasValue,
  hasProperties,
  isFunctionProp,
  isObjectLikeProp,
} from '@structured-types/api';
import {
  LoadingDocStore,
  ParseStorieReturnType,
  InstrumentOptions,
} from '../types';
import { adjustSourceLocation } from '../misc/source-location';
export const extractCSFStories = (
  _ast: File,
  _options: InstrumentOptions,
  { filePath }: { source: string; filePath: string },
): ParseStorieReturnType => {
  const components: { [key: string]: string | undefined } = {};
  const store: LoadingDocStore = {
    stories: {},
    doc: undefined,
    components: {},
    packages: {},
  };
  const parsed = parseFiles([filePath], {
    collectSourceInfo: 'body',
    collectInnerLocations: true,
    collectParametersUsage: true,
    plugins: [],
  });
  const propToDoc = (p: PropType, name?: string): any => {
    if (hasValue(p)) {
      return p.value;
    }
    if (isObjectLikeProp(p)) {
      const result: Record<string, any> | undefined = p.properties?.reduce(
        (acc, prop) => {
          if (prop.name) {
            return {
              ...acc,
              [prop.name]: propToDoc(
                prop,
                p.name === 'subcomponents' ? 'component' : undefined,
              ),
            };
          }
          return acc;
        },
        {},
      );
      return result;
    }
    const propName = p.alias || p.type || (p as StringProp).value;
    if (name === 'component' && propName) {
      components[propName] = propName;
    }
    return propName;
  };
  const doc = parsed.default;
  if (!isObjectProp(doc)) {
    throw new Error(`esm files should have one default export`);
  }
  if (doc.properties) {
    store.doc = doc.properties.reduce((acc, prop) => {
      if (prop.name) {
        return {
          ...acc,
          [prop.name]: propToDoc(prop, prop.name),
        };
      }
      return acc;
    }, {}) as Document;
    store.doc.componentsLookup = components as Document['componentsLookup'];
  }
  Object.keys(parsed)
    .filter(name => name !== 'default')
    .forEach(name => {
      const propStory = parsed[name];
      const story: Story = {
        name: propStory.name || name,
        loc: propStory.loc?.loc,
      };
      story.id = story.name;
      if (isFunctionProp(propStory) && propStory.parameters) {
        story.arguments = propStory.parameters.map(param => {
          const arg: StoryArgument = {
            loc: adjustSourceLocation(story, param.loc?.loc),
            value: param.name || '',
            name: param.name,
          };
          if (param.usage) {
            arg.usage = param.usage.map(
              u =>
                ({
                  loc: adjustSourceLocation(story, u),
                } as ArgUsageLocation),
            );
          }
          return arg;
        });
      }
      if (hasProperties(propStory)) {
        propStory.properties?.forEach(prop => {
          const name = prop.name;
          if (name) {
            if (name === 'story' && hasProperties(prop)) {
              prop.properties?.forEach(prop1 => {
                const propName = prop1.name;
                if (propName) {
                  (story as Record<string, any>)[propName] = propToDoc(
                    prop1,
                    propName,
                  );
                }
              });
            } else {
              (story as Record<string, any>)[name] = propToDoc(prop, name);
            }
          }
        });
      }
      store.stories[name] = story;
    });
  return store;
};
