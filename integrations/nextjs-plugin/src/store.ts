import { StoryStore, HMRStore } from '@component-controls/store';
const bundle = require('../component-controls');
export const store: StoryStore = new HMRStore(bundle);
