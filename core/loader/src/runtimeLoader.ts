import {
  configRequireContext,
  extractDocuments,
} from '@component-controls/config';
import { loader } from 'webpack';
import { replaceSource } from './replaceSource';
import { store, reserveStories, config } from './store';

module.exports = function(content: string) {
  const context = (this as unknown) as loader.LoaderContext;
  const params = JSON.parse(context.query.slice(1));
  const contexts = config ? configRequireContext(config) || [] : [];
  const stories: string[] = config ? extractDocuments(config) || [] : [];
  reserveStories(stories);
  content = replaceSource(
    contexts,
    config?.optionsFilePath,
    store.buildConfig,
    `__COMPILATION_HASH__${params.compilationHash}`,
  );
  return content;
};
