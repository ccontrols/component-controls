import { BroadcastStore } from './Store/BroadcastStore';

import { saveStore } from './serialization/StoreStorage';

export * from './Store/Store';

/**
 * store variable, automatically filled with stories.
 */
export const store = new BroadcastStore(
  require('@component-controls/loader/story-store-data.js'),
);
store.notifyObservers();
saveStore(store);
