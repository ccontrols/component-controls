import {
  saveStore,
  notifyStoreReload,
} from './serialization/store-local-storage';
import { loadStore } from './serialization/load-store';

/**
 * store variable, automatically filled with stories.
 */
export const store = loadStore(
  require('@component-controls/loader/story-store-data.js'),
);
saveStore(store);
notifyStoreReload();
