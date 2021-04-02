import { CliOptions } from './types';
import { saveTemplate } from './save-template';
import { createStoreTemplate } from '../store-template';

export const cliStore = async (options: CliOptions): Promise<void> => {
  const {
    renderer,
    format = 'cjs',
    overwrite,
    config,
    test = 'stories.test.js',
    bundle,
    name = 'component-controls generated',
    output = 'tests',
  } = options;
  return await saveTemplate(
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
