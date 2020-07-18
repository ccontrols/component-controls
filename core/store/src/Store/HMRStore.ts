import { LoadingStore } from '@component-controls/loader';
import { Store } from './Store';
import { loadStoryStore } from '../serialization/load-store';
import { StoryStore } from '../types';

export class HMRStore extends Store {
  constructor(store?: LoadingStore) {
    super(store ? loadStoryStore(store) : undefined);
  }

  hmr = (store?: LoadingStore): StoryStore => {
    console.log(store);
    return new HMRStore(store);
  };
}
