import { TraverseOptions } from '@babel/traverse';
import {
  Story,
  StoryArguments,
  StoryArgument,
  ArgUsageLocation,
} from '@component-controls/core';
import { adjustSourceLocation } from '../misc/source-location';

const findArguments = (
  args: StoryArguments,
  paramName: string,
): StoryArgument | undefined => {
  let result: StoryArgument | undefined;
  for (let i = 0; i < args.length; i += 1) {
    const p = args[i];
    if (Array.isArray(p.value)) {
      result = findArguments(p.value, paramName);
      if (result) {
        break;
      }
    } else {
      if (p.value === paramName) {
        result = p;
        break;
      }
    }
  }
  return result;
};
export const addArgumentUsage = (
  story: Story,
  args: StoryArguments,
  node: any,
  shorthand: boolean,
): ArgUsageLocation | undefined => {
  const param = findArguments(args, node.name);

  if (param) {
    if (param.usage === undefined) {
      param.usage = [];
    }
    const loc = adjustSourceLocation(story, node.loc);
    const existing = param.usage.find(
      p =>
        p.loc.start.line === loc.start.line &&
        p.loc.start.column === loc.start.column &&
        p.loc.end.line === loc.end.line &&
        p.loc.end.column === loc.end.column,
    );
    const usage: ArgUsageLocation = { loc, shorthand };
    if (!existing) {
      param.usage.push(usage);
      return usage;
    }
  }
  return undefined;
};
export const extractArgumentsUsage = (
  story: Story,
  args: StoryArguments,
): TraverseOptions => {
  return {
    TemplateLiteral: (path: any) => {
      path.node.expressions.forEach((expression: any) => {
        if (expression.type === 'Identifier') {
          addArgumentUsage(story, args, expression, expression.shorthand);
        }
      });
    },
    JSXSpreadAttribute: (path: any) => {
      if (path.node.argument.type === 'Identifier') {
        addArgumentUsage(story, args, path.node.argument, path.node.shorthand);
      }
    },
    Identifier: (path: any) => {
      addArgumentUsage(story, args, path.node, path.node.shorthand);
    },
    Property: (path: any) => {
      const node = path.node;
      if (node.value.type === 'Identifier' && node.key.type === 'Identifier') {
        const usage = addArgumentUsage(story, args, node.value, node.shorthand);
        if (usage) {
          usage.name = {
            loc: adjustSourceLocation(story, node.key.loc),
            name: node.key.name,
          };
          path.skip();
        }
      }
    },
  };
};
