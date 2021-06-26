import { getTypescriptConfig } from '@component-controls/typescript-config';
import { anaylizeFiles } from './ts-walk';
import { tsDefaults, DocsOptions, PropTypes } from './types';
export * from './types';

export const parseFiles = (
  filePaths: string[],
  options: DocsOptions = {},
  names?: string[],
): PropTypes => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  options.tsOptions = {
    ...tsDefaults,
    ...getTypescriptConfig(filePaths[0], options.tsOptions),
  };
  const results = anaylizeFiles(filePaths, options, names);
  return results;
};
