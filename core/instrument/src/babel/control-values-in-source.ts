import {
  Story,
  StoryArguments,
  StoryArgument,
} from '@component-controls/specification';
import { adjustSourceLocation } from './utils';

const findParameter = (
  parameters: StoryArguments,
  paramName: string,
): StoryArgument | undefined => {
  let result: StoryArgument | undefined;
  for (let i = 0; i < parameters.length; i += 1) {
    const p = parameters[i];
    if (Array.isArray(p.value)) {
      result = findParameter(p.value, paramName);
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
export const extractParametersUsage = (
  story: Story,
  parameters: StoryArguments,
) => {
  return {
    Identifier: (path: any) => {
      const node = path.node;

      const param = findParameter(parameters, node.name);

      if (param) {
        if (param.usage === undefined) {
          param.usage = [];
        }
        param.usage.push(adjustSourceLocation(story, node.loc));
      }
    },
  };
};
