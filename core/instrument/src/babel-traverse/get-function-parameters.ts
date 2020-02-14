import { Story, CodeSource, StoryParameters } from '../types';

interface KeyType {
  name: string;
}
interface ASTPropNode {
  name?: string;
  loc: CodeSource;
  properties?: any;
  key?: KeyType;
}
export const extractFunctionParameters = (story: Story) => ({
  ArrowFunctionExpression: (path: any) => {
    const node = path.node;
    if (!story.parameters) {
      story.parameters = [];
    }
    const pushParams = (
      node: ASTPropNode,
      parameters: StoryParameters,
      key?: KeyType,
    ) => {
      const loc = {
        start: {
          column: node.loc.start.column,
          line: node.loc.start.line,
        },
        end: {
          column: node.loc.end.column,
          line: node.loc.end.line,
        },
      };
      if (node.name) {
        parameters.push({
          value: node.name,
          name: key ? key.name : node.name,
          loc,
        });
      } else if (node.properties) {
        const nestedParameters: StoryParameters = [];
        parameters.push({
          value: nestedParameters,
          name: key ? key.name : node.name,
          loc,
        });
        node.properties.forEach(
          ({ value, key }: { value: ASTPropNode; key?: KeyType }) => {
            pushParams(value, nestedParameters, key);
          },
        );
      }
    };
    if (node.params) {
      node.params.forEach(
        (p: { name: string; loc: CodeSource; properties?: any }) => {
          if (story.parameters) {
            pushParams(p, story.parameters);
          }
        },
      );
    }
  },
});
