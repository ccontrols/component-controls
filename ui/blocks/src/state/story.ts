import { atom, selector, useRecoilValue } from 'recoil';
import { Story, StoriesStore, getStoryPath } from '@component-controls/core';
import { storeAtom, useStore, useActiveTab, useConfig } from './store';

export const storyIdAtom = atom<string | undefined>({
  key: 'story_id',
  default: undefined,
});

export const currentStorySelector = selector<Story | undefined>({
  key: 'current_story',
  get: ({ get }) => {
    const id = get(storyIdAtom);
    if (!id) {
      return undefined;
    }
    const store = get(storeAtom);
    return store.stories[id];
  },
  set: ({ get, set }, newValue) => {
    if (newValue) {
      const id = get(storyIdAtom);
      if (id) {
        const store = get(storeAtom);
        const newStore: StoriesStore = {
          ...store,
          stories: { ...store.stories, [id]: newValue as Story },
        };
        set(storeAtom, newStore);
      }
    }
  },
});

export const useCurrentStory = (): Story | undefined =>
  useRecoilValue(currentStorySelector);

export const useStory = (storyId: string) => {
  const store = useStore();
  return store.stories[storyId];
};

/**
 * returns the url path to a story.
 */
export const useStoryPath = (storyId: string): string => {
  const store = useStore();
  const activeTab = useActiveTab();
  const config = useConfig();
  const story = store.stories[storyId];
  if (!story) {
    return '';
  }
  const doc = store.docs[story?.doc || ''];
  return getStoryPath(story.id, doc, config?.pages, activeTab);
};

export const useGetStoryPath = () => {
  const store = useStore();
  const currentActiveTab = useActiveTab();
  const config = useConfig();
  return (storyId: string, activeTab?: string): string => {
    const story = store.stories[storyId];
    const doc = story && story.doc ? store.docs[story.doc] : undefined;
    return getStoryPath(
      storyId,
      doc,
      config?.pages,
      activeTab || currentActiveTab,
    );
  };
};
