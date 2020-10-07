import { loader } from 'webpack';
import { getOptions } from 'loader-utils';
import { normalizePath }  from '@component-controls/core';

module.exports = function(content: string) {
  const context = (this as unknown) as loader.LoaderContext;
  const options = getOptions(context) || {};
  const { bundleFileName } = options;
  const bundleNormalized = normalizePath(bundleFileName);
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
};
