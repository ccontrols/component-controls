import { BroadcastStore } from './Store/BroadcastStore';
import { loadStoryStore } from './serialization/load-store';
import { saveStore } from './serialization/StoreStorage';

export * from './Store/Store';

/**
 * store variable, automatically filled with stories.
 */
export const store = new BroadcastStore();

const stores = loadStoryStore(
  require('@component-controls/loader/story-store-data.js'),
);
if (stores) {
  store.setStore(stores);
  saveStore(stores);
}
