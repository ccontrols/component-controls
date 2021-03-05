import { getOptions } from 'loader-utils';
import { normalizePath } from '@component-controls/core';
import {
  WebpackLoaderContext,
  LoaderOptions,
} from '@component-controls/core/node-utils';
function loader(this: WebpackLoaderContext, content: string): string {
  const options = getOptions(this) || {};
  const { bundleFileName } = options;
  const bundleNormalized = normalizePath(bundleFileName as string);
  content = `
  import { loadStore } from './dist/load-store';
  export let store = loadStore(require('${bundleNormalized}'));
  
  if (module.hot) {
    module.hot.accept('${bundleNormalized}', () => {
      import('${bundleNormalized}').then(updated => {
        store = loadStore(updated);
      });
    });
  }  
  `;
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
