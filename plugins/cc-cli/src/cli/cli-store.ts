import { CliOptions } from './types';
import { saveTemplate } from './save-template';
import { createStoreTemplate } from '../store-template';

/**
 * cli function to create a test file with dynamic tests for the entre store
 * @param options file and rendering options
 */
export const cliStore = async (options: CliOptions): Promise<void> => {
  const {
    renderer,
    format = 'cjs',
    overwrite,
    config,
    test: userTest,
    bundle,
    name = 'component-controls generated',
    output = 'tests',
    include,
    exclude,
    ally,
  } = options;
  const test =
    userTest || `component-controls.test.${format === 'ts' ? 'ts' : 'js'}`;
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
      include,
      exclude,
      ally,
    },
    createStoreTemplate,
  );
};
