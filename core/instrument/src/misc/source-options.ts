import fs from 'fs';
import { ComponentFileOption } from '../types';

export const readSourceFile = (
  option: ComponentFileOption | undefined,
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

export const getPackageInfo = (
  option: ComponentFileOption | undefined,
  name: string,
  fileName: string,
): string | undefined => {
  if (typeof option !== 'undefined') {
    if (typeof option === 'function') {
      return option(name, fileName);
    }
    return option ? fileName : undefined;
  }
  return undefined;
};
