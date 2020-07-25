import { StoriesStore } from '@component-controls/core';
import { loadStore } from '@component-controls/store';

const bundle = require('./component-controls');
export const store: StoriesStore = loadStore(bundle);
