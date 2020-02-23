import { Story, CodeLocation } from '@component-controls/specification';

export const adjustSourceLocation = (
  story: Story,
  loc: CodeLocation,
): CodeLocation => {
  if (!story.location) {
    return loc;
  }
  return {
    start: {
      line: loc.start.line - story.location.start.line,
      column:
        loc.start.line === story.location.start.line
          ? loc.start.column - story.location.start.column
          : loc.start.column,
    },
    end: {
      line: loc.end.line - story.location.start.line,
      column:
        loc.end.line === story.location.start.line
          ? loc.end.column - story.location.start.column
          : loc.end.column,
    },
  };
};
