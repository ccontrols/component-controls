import traverse, { TraverseOptions } from '@babel/traverse';
import generate from '@babel/generator';
import { Story, CodeLocation, StoryArguments } from '@component-controls/core';
import { adjustSourceLocation } from '../misc/source-location';
import {
  extractArgumentsUsage,
  addArgumentUsage,
} from './extract-arguments-usage';
import { MDXExportType } from '../types';

interface KeyType {
  name: string;
}
interface ASTPropNode {
  name?: string;
  loc: CodeLocation;
  properties?: ASTPropNode[];
  key?: KeyType;
  value?: ASTPropNode;
  left?: ASTPropNode;
}

const extractPatameters = (
  path: any,
  story: Story,
  exports?: MDXExportType,
) => {
  const node = path.node;
  if (!story.arguments) {
    story.arguments = [];
  }
  if (exports) {
    const { code } = generate(node, {
      retainFunctionParens: true,
      retainLines: true,
    });
    exports.render = code.trim();
  }
  story.loc = {
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
    const pushProperties = (properties: ASTPropNode[]) => {
      const nestedParameters: StoryArguments = [];
      parameters.push({
        value: nestedParameters,
        name: key ? key.name : node.name,
        loc,
      });
      properties.forEach(({ value, key }) => {
        if (value) {
          pushParams(value, nestedParameters, key);
        }
      });
    };
    const loc = adjustSourceLocation(story, node.loc);
    if (node.name) {
      parameters.push({
        value: node.name,
        name: key ? key.name : node.name,
        loc,
      });
    } else if (node.left && node.left.properties) {
      pushProperties(node.left.properties);
    } else if (node.properties) {
      pushProperties(node.properties);
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
    if (node.body.type === 'Identifier') {
      addArgumentUsage(story, [params], node.body, node.shorthand);
    } else if (node.body.type === 'TemplateLiteral') {
      traverse(node, extractArgumentsUsage(story, [params]), path.scope, path);
    } else {
      traverse(
        node.body,
        extractArgumentsUsage(story, [params]),
        path.scope,
        path,
      );
    }
  }
};
export const extractFunctionParameters = (
  story: Story,
  exports?: MDXExportType,
): TraverseOptions => ({
  ArrowFunctionExpression: (path: any) => {
    extractPatameters(path, story, exports);
    path.skip();
  },
  FunctionDeclaration: (path: any) => {
    extractPatameters(path, story, exports);
    path.skip();
  },
  JSXElement: (path: any) => {
    if (exports && path.parent.children) {
      const children = path.parent.children
        .map((child: any) => {
          const { code } = generate(child, {
            retainFunctionParens: true,
            retainLines: true,
          });
          return code.trim();
        })
        .join('\n');
      exports.render = `() => (<>\n${children}\n</>)`;
    }
    path.skip();
  },
});
