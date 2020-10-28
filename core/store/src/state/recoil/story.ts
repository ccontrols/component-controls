import { atom, selector, useRecoilValue } from 'recoil';
import {
  Story,
  getStoryPath,
  CURRENT_STORY,
  docStoryToId,
  getComponentName,
  Component,
} from '@component-controls/core';
import { storeState, useStore, useActiveTab } from './store';

export const storyIdState = atom<string | undefined>({
  key: 'story_id',
  default: undefined,
});

export const currentStoryState = selector<Story | undefined>({
  key: 'current_story',
  get: ({ get }) => {
    const id = get(storyIdState);
    if (!id) {
      return undefined;
    }
    const store = get(storeState);
    return store.stories[id];
  },
  set: ({ get }, newValue) => {
    if (newValue) {
      const id = get(storyIdState);
      if (id) {
        const store = get(storeState);
        store.updateStory(newValue as Story);
      }
    }
  },
});

/**
 * Returns the currently selected story
 */
export const useCurrentStory = (): Story | undefined =>
  useRecoilValue(currentStoryState);

/**
 * Retrieves a Story object from a story id
 */
export const useStoryById = (storyId: string): Story | undefined => {
  const store = useStore();
  return store.stories[storyId];
};

/**
 * given a story name, will go through the store to find a story that matches it
 */

export const useGetStoryIdFromName = (): ((
  name: string,
) => string | undefined) => {
  const store = useStore();
  return (name: string) => {
    for (const docId in store.docs) {
      const doc = store.docs[docId];
      const storyId = docStoryToId(docId, name);
      if (doc.stories && doc.stories.indexOf(storyId) > -1) {
        return storyId;
      }
    }
    return undefined;
  };
};

export interface StoryInputProps {
  id?: string;
  name?: string;
}

/**
 * Returns a story id from an input id or story name. The id can be '.', which means the current story.
 */
export const useStoryId = ({
  id = CURRENT_STORY,
  name,
}: StoryInputProps): string | undefined => {
  const currentStoryId = useRecoilValue(storyIdState);
  const storyIdFromName = useGetStoryIdFromName();
  return name
    ? storyIdFromName(name)
    : id === CURRENT_STORY
    ? currentStoryId
    : id;
};

/**
 * Returns a story from an input id or story name. The id can be '.', which means the current story.
 */
export const useStory = (props: StoryInputProps): Story | undefined => {
  const storyId = useStoryId(props);
  const store = useStore();
  return storyId ? store.stories[storyId] : undefined;
};

/**
 * Returns a story's component from an input id or story name. The id can be '.', which means the current story.
 */

export const useStoryComponent = (
  props: StoryInputProps,
): Component | undefined => {
  const storyId = useStoryId(props);
  const store = useStore();
  const story: Story | undefined = storyId ? store.stories[storyId] : undefined;
  const storyComponent: any = story?.component;

  const componentName = getComponentName(storyComponent);
  const doc = story && story.doc ? store.docs[story.doc] : undefined;
  const component =
    componentName && doc && doc.componentsLookup[componentName]
      ? store.components[doc.componentsLookup[componentName]]
      : undefined;
  return component;
};

/**
 * Returns a link to a story from a story id
 */
export const useStoryPath = (storyId: string): string => {
  const store = useStore();
  const activeTab = useActiveTab();
  const story = store.stories[storyId];
  if (!story) {
    return '';
  }
  const doc = store.docs[story?.doc || ''];
  return getStoryPath(story.id, doc, store, activeTab);
};

export const useGetStoryPath = (): ((
  storyId: string,
  activeTab?: string,
) => string) => {
  const store = useStore();
  return (storyId: string, activeTab?: string): string => {
    const story = store.stories[storyId];
    const doc = story && story.doc ? store.docs[story.doc] : undefined;
    return getStoryPath(storyId, doc, store, activeTab);
  };
};
