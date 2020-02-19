const injectedStories = '__STORIES_HASH__INJECTED_STORIES__';

const storyStore = () => {
  if (injectedStories) {
    const store = JSON.parse(injectedStories);
    return store;
  }
  return undefined;
};

export default storyStore();
