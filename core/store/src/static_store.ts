import { Store, getDefaultStore } from '@component-controls/core';
import { BroadcastStore } from './serialization/BroadcastStore';

/**
 * store variable, automatically filled with stories.
 */
export const store: Store = new BroadcastStore(getDefaultStore());
(store as BroadcastStore).readData();
