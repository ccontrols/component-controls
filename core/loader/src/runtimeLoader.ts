import { deepMergeArrays, defaultBuildConfig } from '@component-controls/core';

import { loadConfiguration, extractStories } from '@component-controls/config';
import { stringifyRequest } from 'loader-utils';
import { replaceSource, StoryPath } from './replaceSource';
import { store, reserveStories } from './store';

module.exports = function(content: string) {
  //@ts-ignore
  const params = JSON.parse(this.query.slice(1));
  //@ts-ignore
  const config = loadConfiguration(this.rootContext, params.config);
  store.buildConfig = config?.config
    ? deepMergeArrays(defaultBuildConfig, config.config)
    : defaultBuildConfig;

  const stories: StoryPath[] = (config ? extractStories(config) || [] : []).map(
    fileName => ({
      absPath: fileName,
      //@ts-ignore
      relPath: stringifyRequest(this, fileName),
    }),
  );
  reserveStories(stories.map(story => story.absPath));
  content = replaceSource(
    stories,
    config?.optionsFilePath,
    store.buildConfig,
    `__COMPILATION_HASH__${params.compilationHash}`,
  );
  return content;
};
