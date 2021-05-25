import { SourceLocation } from '@babel/types';

export const sourceLocation = (
  loc: SourceLocation | null,
): SourceLocation | undefined => {
  return loc
    ? {
        start: { ...loc.start },
        end: { ...loc.end },
      }
    : undefined;
};
