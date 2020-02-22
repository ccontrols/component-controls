import jsStringEscape from 'js-string-escape';
import {
  ControlTypes,
  StoryArguments,
  CodeLocation,
} from '@component-controls/specification';
import {
  LoadedComponentControl,
  LoadedComponentControls,
} from '@component-controls/core';

export const getArgumentNames = (args: StoryArguments): string[] => {
  return args.reduce((acc: string[], a) => {
    if (Array.isArray(a.value)) {
      return [...acc, ...getArgumentNames(a.value as StoryArguments)];
    }
    return [...acc, a.value];
  }, []);
};

interface UsageProp {
  name: string;
  loc: CodeLocation;
}
export const getArgumentsUsage = (args: StoryArguments): UsageProp[] => {
  return args.reduce((acc: any, a) => {
    if (Array.isArray(a.value)) {
      return [...acc, ...getArgumentsUsage(a.value as StoryArguments)];
    }
    const usage: any = a.usage?.map(u => ({
      name: a.value,
      loc: u,
    }));
    if (usage) {
      return [...acc, ...usage];
    }
    return acc;
  }, []);
};

const replaceString = (
  s: string,
  newStr: string,
  start: number,
  length: number,
): string => s.substr(0, start) + newStr + s.substr(start + length);

export const mergeControlValues = (
  source: string,
  args: StoryArguments,
  controls: LoadedComponentControls,
): string => {
  const locations = getArgumentsUsage(args);
  const lines = source.split('\n');

  //sort locations in reverse order, so to replace source backwards
  locations
    .sort((a, b) => {
      if (a.loc.start.line === b.loc.start.line) {
        return b.loc.start.column - a.loc.start.column;
      }
      return b.loc.start.line - a.loc.start.line;
    })
    .forEach(l => {
      const { start, end } = l.loc;
      const val: LoadedComponentControl = controls[l.name];
      if (val && val.value !== val.defaultValue) {
        const value: any = val.value;
        const strValue: string =
          val.type === ControlTypes.TEXT ? `"${jsStringEscape(value)}"` : value;
        if (start.line === end.line) {
          lines[start.line] = replaceString(
            lines[start.line],
            strValue,
            start.column,
            end.column - start.column,
          );
        } else {
          const startLine = lines[start.line];
          const endLine = lines[end.line];
          if (startLine !== undefined && endLine !== undefined) {
            lines[start.line - 1] = replaceString(
              lines[start.line - 1],
              strValue,
              start.column,
              lines[start.line - 1].length - start.column,
            );
            if (end.line - start.line > 1) {
              lines.splice(start.line, end.line - start.line - 1);
            }
            lines[end.line - 1] = lines[end.line - 1].slice(end.column);
          }
        }
      }
    });
  return lines.join('\n');
};
