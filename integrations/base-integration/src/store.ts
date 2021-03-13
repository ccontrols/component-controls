import { Store } from '@component-controls/core';
import { loadStore } from '@component-controls/store';
const bundle = require('component-controls-bundle');

export const store: Store = loadStore(bundle, true);
