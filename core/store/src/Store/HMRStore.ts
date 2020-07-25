import { LoadingStore } from '@component-controls/loader';
import { Store } from './Store';
import { loadStore } from '../serialization/load-store';
import { StoryStore } from '../types';

export class HMRStore extends Store {
  constructor(store?: LoadingStore) {
    super(store ? loadStore(store) : undefined);
  }

  hmr = (store?: LoadingStore): StoryStore => {
    return new HMRStore(store);
  };
}
