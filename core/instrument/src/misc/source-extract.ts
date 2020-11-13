import { CodeLocation, StoryArguments, Story } from '@component-controls/core';

const adjustCodeLocation = (
  loc: CodeLocation,
  line: number,
  chars: number,
): CodeLocation => {
  return {
    start: {
      line: loc.start.line,
      column:
        line === loc.start.line
          ? Math.max(0, loc.start.column - chars)
          : loc.start.column,
    },
    end: {
      line: loc.end.line,
      column:
        line === loc.end.line
          ? Math.max(0, loc.end.column - chars)
          : loc.end.column,
    },
  };
};

// adjust source location, when timmiong white spaces
export const adjustArgumentsLocation = (
  args: StoryArguments,
  line: number,
  chars: number,
): StoryArguments =>
  args.map(arg => {
    const ret = {
      ...arg,
      loc: arg.loc ? adjustCodeLocation(arg.loc, line, chars) : undefined,
      value: Array.isArray(arg.value)
        ? adjustArgumentsLocation(arg.value, line, chars)
        : arg.value,
    };
    if (arg.usage) {
      ret.usage = arg.usage.map(usage => ({
        ...usage,
        loc: adjustCodeLocation(usage.loc, line, chars),
      }));
    }
    return ret;
  });

export const removeMDXAttributes = (source: string): string =>
  source.replace(/mdxType="[^"]*"\s?/, '');
export const extractSource = (
  source?: string,
  story?: Story,
): string | undefined => {
  if (!source) {
    return undefined;
  }
  const code = removeMDXAttributes(source);
  const lines = code.split('\n');
  //remove as many spaces as there are in the line with the smallest amount of white spaces (but still some)
  const whiteSpacesList = lines
    .map(line => {
      if (line.substring(0, 1) === ' ' && line.trim() !== '') {
        return line.search(/\S/);
      }
      return 999999;
    })
    .sort((a: number, b: number) => a - b);
  const whiteSpaces = whiteSpacesList.length > 1 && whiteSpacesList[1];
  return whiteSpaces
    ? lines
        .map((line, lineIndex) => {
          const spaces = line.search(/\S/);
          const adjustSpaces = Math.min(spaces, whiteSpaces);
          if (adjustSpaces > 0) {
            //adjust location of arguments usage
            if (story?.arguments) {
              story.arguments = adjustArgumentsLocation(
                story.arguments,
                lineIndex,
                adjustSpaces,
              );
            }
            return line.substr(adjustSpaces);
          }
          return line;
        })
        .join('\n')
        .trim()
    : code;
};
