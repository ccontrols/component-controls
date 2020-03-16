import {
  StoriesStore,
  Story,
  StoryParameters,
} from '@component-controls/specification';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';
import { extractAttributes } from './extract-attributes';
import { sourceLocation } from './utils';

export const extractMDXStories = (ast: File): StoriesStore => {
  const store: StoriesStore = {
    stories: {},
    kinds: {},
    components: {},
  };
  traverse(ast, {
    JSXElement: (path: any) => {
      const node = path.node.openingElement;
      if (
        ['Meta', 'Story', 'Preview', 'Playground', 'ComponentSource'].indexOf(
          node.name.name,
        ) > -1
      ) {
        const attributes: StoryParameters = node.attributes.reduce(
          (acc: StoryParameters, attribute: any) => {
            if (attribute.value.type === 'StringLiteral') {
              return { ...acc, [attribute.name?.name]: attribute.value?.value };
            } else if (attribute.value.type === 'JSXExpressionContainer') {
              return {
                ...acc,
                [attribute.name?.name]: extractAttributes(
                  attribute.value.expression,
                ),
              };
            }
            return acc;
          },
          {},
        );

        switch (node.name.name) {
          case 'Story': {
            const { name } = attributes;
            if (typeof name === 'string') {
              const story: Story = {
                ...attributes,
                name,
                loc: sourceLocation(path.node.loc),
              };
              traverse(
                path.node,
                extractFunctionParameters(story),
                path.scope,
                path,
              );
              store.stories[name] = story;
            }
            break;
          }
          case 'Meta': {
            const { title } = attributes;
            if (title) {
              store.kinds[title] = {
                ...attributes,
                title,
                components: {},
              };
            }
            break;
          }
          default:
            break;
        }
        // console.log(node.name.name, attributes);
      }
    },
  });
  return store;
};
