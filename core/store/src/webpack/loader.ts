import { loader } from 'webpack';
import { getOptions } from 'loader-utils';

module.exports = function(content: string) {
  const context = (this as unknown) as loader.LoaderContext;
  const options = getOptions(context) || {};
  const { bundleFileName } = options;
  content = `
  import { HMRStore } from './dist/HMRStore';
  export let store = new HMRStore(
    require('${bundleFileName}'),
  );
  if (module.hot) {
    module.hot.accept('${bundleFileName}', () => {
      import('${bundleFileName}').then(updated => {
        store = store.hmr(updated);
      });
    });
  }  
  `;
  return content;
};
