import { StoriesStore } from '@component-controls/specification';

export const store: {
  /**
   * unique has for a store
   */
  stores: StoriesStore[];
} = {
  stores: [],
};

export const addStoriesKind = async (added: StoriesStore) => {
  store.stores.push(added);
};
