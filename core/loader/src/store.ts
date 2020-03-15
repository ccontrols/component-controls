import { StoriesStore } from '@component-controls/specification';

const stores: StoriesStore[] = [];

export const addStoriesKind = async (added: StoriesStore) => {
  stores.push(added);
};
export default stores;
