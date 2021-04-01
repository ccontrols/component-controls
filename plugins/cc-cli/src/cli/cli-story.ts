import { StoryTemplateOptions } from '../types';
import { CliOptions } from './types';
import { saveTemplate } from './save-template';
import { createStoriesTemplate } from '../stories-template';

export const cliStory = (options: CliOptions): void => {
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
  const storyPath = '';
  return saveTemplate<StoryTemplateOptions>(
    {
      renderer,
      format,
      overwrite,
      config,
      test,
      bundle,
      name,
      output,
      storyPath,
    },
    createStoriesTemplate,
  );
};
