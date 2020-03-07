import {
  StoriesStore,
  Story,
  StoryAttributes,
} from '@component-controls/specification';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';
import { extractAttributes } from './extract-attributes';
import { sourceLocation } from './utils';

export const extractMDXStories = (stories: StoriesStore) => {
  return {
    JSXElement: (path: any) => {
      const node = path.node.openingElement;
      if (['Meta', 'Story'].indexOf(node.name.name) > -1) {
        const attributes: StoryAttributes = node.attributes.reduce(
          (acc: StoryAttributes, attribute: any) => {
            if (attribute.value.type === 'StringLiteral') {
              return { ...acc, [attribute.name?.name]: attribute.value?.value };
            } else if (attribute.value.type === 'JSXExpressionContainer') {
              const atrs = extractAttributes(attribute.value.expression);
              const attrsKeys = atrs ? Object.keys(atrs) : [];
              return {
                ...acc,
                [attribute.name?.name]:
                  attrsKeys.length === 1 && atrs ? atrs[attrsKeys[0]] : atrs,
              };
            }
            return acc;
          },
          {},
        );

        switch (node.name.name) {
          case 'Story': {
            const story: Story = {
              loc: sourceLocation(path.node.loc),
            };
            const name = attributes['name'];

            if (typeof name === 'string') {
              traverse(
                path.node,
                extractFunctionParameters(story),
                path.scope,
                path,
              );
              story.name = name;
              story.attributes = attributes;
              stories.stories[name] = story;
            }
            break;
          }
          case 'Meta': {
            const title = attributes['title'];
            const kindTitle = typeof title === 'string' ? title : undefined;
            if (kindTitle) {
              stories.kinds[kindTitle] = {
                title: kindTitle,
                attributes,
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
  };
};
