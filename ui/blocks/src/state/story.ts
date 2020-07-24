import { atom, selector, useRecoilValue } from 'recoil';
import { Story, StoriesStore } from '@component-controls/core';
import { storeAtom } from './store';

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
