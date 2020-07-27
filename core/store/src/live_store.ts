import { loadStore } from './serialization/load-store';
import { BroadcastStore } from './serialization/BroadcastStore';
import { Store, defaultStore } from '@component-controls/core';

const bundle = require('@component-controls/loader/story-store-data.js');

/**
 * store variable, automatically filled with stories.
 */
export const store: Store = new BroadcastStore(
  bundle ? loadStore(bundle) : defaultStore,
);

if (bundle) {
  (store as BroadcastStore).saveStore();
}
