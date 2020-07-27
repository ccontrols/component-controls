import { Store, defaultStore } from '@component-controls/core';
import { BroadcastStore } from './serialization/BroadcastStore';

/**
 * store variable, automatically filled with stories.
 */
export const store: Store = new BroadcastStore(defaultStore);
(store as BroadcastStore).readData();
