import { StoryStore } from './types';

const injectedStories = '__STORIES_HASH__INJECTED_STORIES__';

type StringifyFunction = () => StoryStore | undefined;

let store: StoryStore;

const storyStore: StringifyFunction = () => {
  if (store) {
    return store;
  }
  if (injectedStories) {
    store = JSON.parse(injectedStories);
    return store;
  }
  return undefined;
};

export default storyStore();
