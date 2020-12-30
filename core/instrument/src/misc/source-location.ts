import { Story, CodeLocation } from '@component-controls/core';

export const adjustSourceLocation = (
  story: Story,
  loc: CodeLocation,
): CodeLocation => {
  if (!story.loc) {
    return loc;
  }
  return {
    start: {
      line: loc.start.line - story.loc.start.line,
      column:
        loc.start.line === story.loc.start.line
          ? loc.start.column - story.loc.start.column
          : loc.start.column,
    },
    end: {
      line: loc.end.line - story.loc.start.line,
      column:
        loc.end.line === story.loc.start.line
          ? loc.end.column - story.loc.start.column
          : loc.end.column,
    },
  };
};

export const sourceLocation = (
  loc: CodeLocation | null,
): CodeLocation | undefined => {
  return loc
    ? {
        start: { ...loc.start },
        end: { ...loc.end },
      }
    : undefined;
};
