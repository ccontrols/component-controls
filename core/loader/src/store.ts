import { StoriesStore } from '@component-controls/specification';

export const store: StoriesStore[] = [];

export const addStoriesKind = async (added: StoriesStore) => {
  store.push(added);
};
