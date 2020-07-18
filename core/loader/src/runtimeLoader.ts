import { deepMergeArrays, defaultBuildConfig } from '@component-controls/core';

import { loadConfiguration, extractStories } from '@component-controls/config';
import { stringifyRequest } from 'loader-utils';
import { loader } from 'webpack';
import { replaceSource, StoryPath } from './replaceSource';
import { store, reserveStories } from './store';

module.exports = function(content: string) {
  const context = (this as unknown) as loader.LoaderContext;
  const params = JSON.parse(context.query.slice(1));
  const config = loadConfiguration(context.rootContext, params.config);
  store.buildConfig = config?.config
    ? deepMergeArrays(defaultBuildConfig, config.config)
    : defaultBuildConfig;

  const stories: StoryPath[] = (config ? extractStories(config) || [] : []).map(
    fileName => ({
      absPath: fileName,
      relPath: stringifyRequest(context, fileName),
    }),
  );
  reserveStories(stories.map(story => story.absPath));
  content = replaceSource(
    stories,
    config?.optionsFilePath,
    store.buildConfig,
    `__COMPILATION_HASH__${params.compilationHash}`,
  );
  //add dependencies for HMR
  // stories.forEach(story =>
  //   context.addDependency(path.normalize(story.absPath)),
  // );
  return content;
};
