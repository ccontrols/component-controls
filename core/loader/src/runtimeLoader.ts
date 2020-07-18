import { deepMergeArrays, defaultBuildConfig } from '@component-controls/core';

import {
  loadConfiguration,
  configRequireContext,
} from '@component-controls/config';
import { loader } from 'webpack';
import { replaceSource } from './replaceSource';
import { store } from './store';

module.exports = function(content: string) {
  const context = (this as unknown) as loader.LoaderContext;
  const params = JSON.parse(context.query.slice(1));
  const config = loadConfiguration(context.rootContext, params.config);
  store.buildConfig = config?.config
    ? deepMergeArrays(defaultBuildConfig, config.config)
    : defaultBuildConfig;

  const contexts = config ? configRequireContext(config) || [] : [];
  content = replaceSource(
    contexts,
    config?.optionsFilePath,
    store.buildConfig,
    `__COMPILATION_HASH__${params.compilationHash}`,
  );
  return content;
};
