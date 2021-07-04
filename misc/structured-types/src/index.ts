import { getTypescriptConfig } from '@component-controls/typescript-config';
import { anaylizeFiles } from './ts-walk';
import { PropTypes } from './types';
import { tsDefaults, DocsOptions } from './ts-utils';
export * from './types';
export * from './ts-utils';

export const parseFiles = (
  filePaths: string[],
  options: DocsOptions = {},
): PropTypes => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  options.tsOptions = {
    ...tsDefaults,
    ...getTypescriptConfig(filePaths[0], options.tsOptions),
  };
  const results = anaylizeFiles(filePaths, options);
  return results;
};
