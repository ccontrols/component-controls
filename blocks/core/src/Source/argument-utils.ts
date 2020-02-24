import jsStringEscape from 'js-string-escape';
import {
  StoryArguments,
  ArgUsageLocation,
  ControlTypes,
} from '@component-controls/specification';
import {
  LoadedComponentControl,
  LoadedComponentControls,
} from '@component-controls/core';

interface UsageProp {
  name: string;
  loc: ArgUsageLocation;
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

const stringifyValue = (type: string, value: any): string => {
  switch (type) {
    case ControlTypes.TEXT:
      return `"${jsStringEscape(value)}"`;
    case ControlTypes.OPTIONS:
      return `[${stringifyValue(ControlTypes.TEXT, value)}]`;
    default:
      return value;
  }
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
      if (a.loc.loc.start.line === b.loc.loc.start.line) {
        return b.loc.loc.start.column - a.loc.loc.start.column;
      }
      return b.loc.loc.start.line - a.loc.loc.start.line;
    })
    .forEach(l => {
      const { start, end } = l.loc.loc;
      const val: LoadedComponentControl = controls[l.name];
      if (val && val.value !== val.defaultValue) {
        const value: any = val.value;
        let strValue: string = stringifyValue(val.type, value);
        if (l.loc.name) {
          if (l.loc.name.name === l.name) {
            strValue = `${l.loc.name.name}: ${strValue}`;
          }
        }
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
