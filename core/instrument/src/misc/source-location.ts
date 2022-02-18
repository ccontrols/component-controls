import { Story, CodeLocation } from '@component-controls/core';

export const adjustSourceLocation = (
  story: Story,
  loc?: CodeLocation,
): CodeLocation | undefined => {
  if (!story.loc || !loc) {
    return loc;
  }
  return {
    start: {
      line: loc.start.line - story.loc.start.line,
      col:
        loc.start.line === story.loc.start.line
          ? loc.start.col - story.loc.start.col
          : loc.start.col - 1,
    },
    end: {
      line: loc.end.line - story.loc.start.line,
      col:
        loc.end.line === story.loc.start.line
          ? loc.end.col - story.loc.start.col
          : loc.end.col - 1,
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
