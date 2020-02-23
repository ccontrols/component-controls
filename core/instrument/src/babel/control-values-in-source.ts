import {
  Story,
  StoryArguments,
  StoryArgument,
} from '@component-controls/specification';
import { adjustSourceLocation } from './utils';

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
) => {
  const param = findArguments(args, node.name);

  if (param) {
    if (param.usage === undefined) {
      param.usage = [];
    }
    param.usage.push(adjustSourceLocation(story, node.loc));
  }
};
export const extractArgumentsUsage = (story: Story, args: StoryArguments) => {
  return {
    Identifier: (path: any) => {
      addArgumentUsage(story, args, path.node);
    },
  };
};
