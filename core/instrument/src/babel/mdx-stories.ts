import {
  StoriesGroup,
  Story,
  StoryArguments,
  CodeLocation,
} from '@component-controls/specification';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';
import { extractProperties } from './extract-properties';
import { sourceLocation } from './utils';

export const extractMDXStories = (stories: StoriesGroup) => {
  return {
    JSXElement: (path: any) => {
      const node = path.node.openingElement;
      if (['Meta', 'Story'].indexOf(node.name.name) > -1) {
        const parameters: StoryArguments = node.attributes
          .map((attribute: any) => {
            const loc: CodeLocation = sourceLocation(attribute.loc);
            if (attribute.value.type === 'StringLiteral') {
              return {
                value: attribute.value?.value,
                name: attribute.name?.name,
                loc,
              };
            } else if (attribute.value.type === 'JSXExpressionContainer') {
              return {
                name: attribute.name?.name,
                value: extractProperties(attribute.value.expression),
                loc,
              };
            }
            return null;
          })
          .filter((p: any) => p);

        switch (node.name.name) {
          case 'Story': {
            const story: Story = {
              loc: sourceLocation(path.node.loc),
            };
            const name = parameters.find(p => p.name === 'name');

            if (name && typeof name.value === 'string') {
              traverse(
                path.node,
                extractFunctionParameters(story),
                path.scope,
                path,
              );
              story.name = name.value;
              story.parameters = parameters;
              stories.stories[name.value] = story;
            }
            break;
          }
          case 'Meta': {
            const title = parameters.find(p => p.name === 'title');
            stories.title =
              title && typeof title.value === 'string'
                ? title.value
                : undefined;
            stories.parameters = parameters;
            break;
          }
          default:
            break;
        }
        // console.log(node.name.name, parameters);
      }
    },
  };
};
