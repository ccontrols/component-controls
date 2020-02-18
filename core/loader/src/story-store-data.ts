import { StoryStore } from './types';

const injectedStories = '__STORIES_HASH__INJECTED_STORIES__';

type StringifyFunction = () => StoryStore | undefined;

const storyStore: StringifyFunction = () => {
  if (injectedStories) {
    const store = JSON.parse(injectedStories);
    return store;
  }
  return undefined;
};

export default storyStore;
