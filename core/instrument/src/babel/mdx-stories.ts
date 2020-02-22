import {
  StoriesGroup,
  Story,
  StoryArguments,
  CodeLocation,
} from '@component-controls/specification';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';

export const extractMDXStories = (stories: StoriesGroup) => {
  return {
    JSXElement: (path: any) => {
      const node = path.node.openingElement;
      if (['Meta', 'Story'].indexOf(node.name.name) > -1) {
        const parameters: StoryArguments = node.attributes
          .map((attribute: any) => {
            const loc: CodeLocation = {
              start: {
                column: attribute.loc?.start.column,
                line: attribute.loc?.start.line,
              },
              end: {
                column: attribute.loc?.end.column,
                line: attribute.loc?.end.line,
              },
            };
            if (attribute.value.type === 'StringLiteral') {
              return {
                value: attribute.value?.value,
                name: attribute.name?.name,
                loc,
              };
            } else if (attribute.value.type === 'JSXExpressionContainer') {
            }
            return null;
          })
          .filter((p: any) => p);

        switch (node.name.name) {
          case 'Story': {
            const story: Story = {
              location: {
                start: {
                  column: path.node.loc.start.column,
                  line: path.node.loc.start.line,
                },
                end: {
                  column: path.node.loc.end.column,
                  line: path.node.loc.end.line,
                },
              },
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
