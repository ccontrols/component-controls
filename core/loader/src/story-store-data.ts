const injectedStories = '__STORIES_HASH__INJECTED_STORIES__';

const getInjectedStore = (): string | undefined =>
  injectedStories.startsWith('__') ? undefined : injectedStories;

export default getInjectedStore;
