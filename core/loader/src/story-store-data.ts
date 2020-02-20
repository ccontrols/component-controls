const injectedStories = '__STORIES_HASH__INJECTED_STORIES__';

const storyStore = () => {
  if (injectedStories) {
    try {
      return JSON.parse(injectedStories);
    } catch (e) {
      return {};
    }
  }
  return undefined;
};

export default storyStore();
