import { HMRStore } from './Store/HMRStore';
import { StoryStore } from './types';

export let store: StoryStore = new HMRStore(
  require('@component-controls/webpack-compile/bundle'),
);
if (module.hot) {
  module.hot.accept('@component-controls/webpack-compile/bundle', () => {
    //@ts-ignore
    import('@component-controls/webpack-compile/bundle').then(updated => {
      store = (store as HMRStore).hmr(updated);
    });
  });
}
