import {
  WebpackLoaderContext,
  LoaderOptions,
} from '@component-controls/core/node-utils';
import {
  configRequireContext,
  extractDocuments,
} from '@component-controls/config';
import { replaceSource } from './replaceSource';
import { store, reserveStories, config } from './store';

function loader(this: WebpackLoaderContext, content: string): string {
  const params = JSON.parse(this.query.slice(1));
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
}

export default loader;

/**
 * expose public types via declaration merging
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace loader {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Options extends LoaderOptions {}
}
