import {
  ArgUsageLocation,
  Document,
  Story,
  StoryArgument,
} from '@component-controls/core';
import { File } from '@babel/types';
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
  const propValue = (p: PropType): any => {
    if (hasValue(p) && typeof p.value !== 'undefined') {
      return p.value;
    }
    if (isArrayProp(p)) {
      const result: any[] | undefined = p.value?.reduce(
        (acc: any[] | undefined, prop) => {
          const value = propValue(prop);
          if (typeof value !== 'undefined') {
            if (!acc) {
              return [value];
            } else {
              return [...acc, value];
            }
          }
          return acc;
        },
        undefined,
      );
      if (typeof result === 'undefined') {
        return undefined;
      }
      return result;
    }

    if (isClassLikeProp(p)) {
      const result: Record<string, any> | undefined = p.properties?.reduce(
        (acc: ReturnType<typeof propToField>, prop) => {
          if (prop.name) {
            const value = propToField(prop);
            if (typeof value !== 'undefined') {
              if (!acc) {
                return value;
              } else {
                return {
                  ...acc,
                  ...value,
                };
              }
            }
          }
          return acc;
        },
        undefined,
      );
      if (typeof result === 'undefined') {
        return undefined;
      }
      return result;
    }
    const value = p.alias || p.type || (p as StringProp).value;

    return value;
  };
  const propToField = (p: PropType): Record<string, any> | undefined => {
    const name = p.name;
    if (name) {
      const value = propValue(p);
      if (typeof value !== 'undefined') {
        if ((name === 'component' || name === 'subcomponents') && value) {
          components[value] = value;
        }
        return { [name]: value };
      }
    }
    return undefined;
  };

  const assignPropStory = (prop: PropType, story: Story): void => {
    const value = propToField(prop);
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
  if (!isClassLikeProp(doc)) {
    throw new Error(`esm files should have one default export`);
  }
  if (doc.properties) {
    store.doc = doc.properties.reduce(
      (acc: ReturnType<typeof propToField>, prop) => {
        const value = propToField(prop);
        if (typeof value !== 'undefined') {
          if (!acc) {
            return value;
          } else {
            return {
              ...acc,
              ...value,
            };
          }
        }
        return acc;
      },
      undefined,
    ) as Document;
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
          if (prop.name === 'story' && hasProperties(prop)) {
            prop.properties?.forEach(prop1 => {
              assignPropStory(prop1, story);
            });
          } else {
            assignPropStory(prop, story);
          }
        });
      }

      store.stories[name] = story;
    });
  return store;
};
