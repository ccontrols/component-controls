import { loader } from 'webpack';
import { getOptions } from 'loader-utils';

module.exports = function(content: string) {
  const context = (this as unknown) as loader.LoaderContext;
  const options = getOptions(context) || {};
  const { bundleFileName } = options;
  content = `
  import { loadStore } from './dist/types';
  export let store = loadStore(require('${bundleFileName}'));
  if (module.hot) {
    module.hot.accept('${bundleFileName}', () => {
      import('${bundleFileName}').then(updated => {
        store = loadStore(updated);
      });
    });
  }  
  `;
  return content;
};
