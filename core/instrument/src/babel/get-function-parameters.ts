import traverse from '@babel/traverse';
import {
  Story,
  CodeLocation,
  StoryArguments,
} from '@component-controls/specification';
import { adjustSourceLocation } from './utils';
import { extractParametersUsage } from './control-values-in-source';

interface KeyType {
  name: string;
}
interface ASTPropNode {
  name?: string;
  loc: CodeLocation;
  properties?: any;
  key?: KeyType;
}
export const extractFunctionParameters = (story: Story) => ({
  ArrowFunctionExpression: (path: any) => {
    const node = path.node;
    if (!story.arguments) {
      story.arguments = [];
    }
    story.location = {
      start: {
        column: node.loc.start.column,
        line: node.loc.start.line,
      },
      end: {
        column: node.loc.end.column,
        line: node.loc.end.line,
      },
    };

    const pushParams = (
      node: ASTPropNode,
      parameters: StoryArguments,
      key?: KeyType,
    ) => {
      const loc = adjustSourceLocation(story, node.loc);
      if (node.name) {
        parameters.push({
          value: node.name,
          name: key ? key.name : node.name,
          loc,
        });
      } else if (node.properties) {
        const nestedParameters: StoryArguments = [];
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
        (p: { name: string; loc: CodeLocation; properties?: any }) => {
          if (story.arguments) {
            pushParams(p, story.arguments);
          }
        },
      );
    }
    if (story.arguments.length) {
      const params = story.arguments[0];
      traverse(
        node.body,
        extractParametersUsage(story, [params]),
        path.scope,
        path,
      );
    }
    path.skip();
  },
});
