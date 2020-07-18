import { useEffect, useState } from 'react';
import { LoadingStore } from '@component-controls/loader';
import { StoryStore } from './types';
import { Store } from './Store/Store';
import { loadStoryStore } from './serialization/load-store';

const loadStore = (store: LoadingStore): Store => {
  return new Store({
    store: loadStoryStore(store),
    updateLocalStorage: false,
  });
};
export const useStore = (): StoryStore => {
  const [store, setStore] = useState<StoryStore>(
    loadStore(require('@component-controls/webpack-compile/bundle')),
  );
  useEffect(() => {
    if (module.hot) {
      module.hot.accept('@component-controls/webpack-compile/bundle', () => {
        //@ts-ignore
        import('@component-controls/webpack-compile/bundle').then(updated => {
          const newStore = loadStore(updated.default);
          setStore(newStore);
        });
      });
    }
  }, []);
  return store;
};
