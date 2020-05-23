import { Store } from './Store/Store';
import { loadStoryStore } from './serialization/load-store';
import { saveStore } from './serialization/StoreStorage';

export * from './Store/Store';

/**
 * store variable, automatically filled with stories.
 */
export const store = new Store({
  updateLocalStorage: false,
});

const stores = loadStoryStore();
console.log('stores', stores);
if (stores) {
  store.setStore(stores);
  saveStore(stores);
}
