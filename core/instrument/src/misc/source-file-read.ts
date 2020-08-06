import fs from 'fs';
import { SourceFileOption } from '../types';

export const readSourceFile = (
  option: SourceFileOption | undefined,
  source: string | undefined,
  name: string,
  fileName: string,
): string | undefined => {
  if (typeof option !== 'undefined') {
    if (typeof option === 'function') {
      const resolvedName = option(name, fileName);
      if (fs.existsSync(resolvedName)) {
        return fs.readFileSync(resolvedName, 'utf8');
      }
      return undefined;
    }
    return option ? source : undefined;
  }
  return undefined;
};
