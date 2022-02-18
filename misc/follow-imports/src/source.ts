import { SourceLocation } from './consts';

export const getASTSource = (
  source?: string,
  loc?: SourceLocation,
): string | undefined => {
  if (loc && source) {
    const { start, end } = loc || {};
    if (start && end) {
      const lines = source.split('\n');

      if (start.line === end.line) {
        return lines[start.line - 1].substring(start.col, end.col);
      } else {
        const startLine = lines[start.line - 1];
        const endLine = lines[end.line - 1];
        if (startLine !== undefined && endLine !== undefined) {
          return [
            startLine.substring(start.col),
            ...lines.slice(start.line, end.line - 1),
            endLine.substring(0, end.col),
          ].join('\n');
        }
      }
    }
  }
  return undefined;
};
