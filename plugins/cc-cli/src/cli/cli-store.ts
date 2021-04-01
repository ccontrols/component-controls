import { CliOptions } from './types';
import { saveTemplate } from './save-template';
import { createStoreTemplate } from '../store-template';

export const cliStore = (options: CliOptions): void => {
  const {
    renderer,
    format,
    overwrite,
    config,
    test = 'stories.test.js',
    bundle,
    name,
    output = 'tests',
  } = options;
  return saveTemplate(
    {
      renderer,
      format,
      overwrite,
      config,
      test,
      bundle,
      name,
      output,
    },
    createStoreTemplate,
  );
};
