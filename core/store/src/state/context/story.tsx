import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  Story,
  getStoryPath,
  CURRENT_STORY,
  docStoryToId,
  getComponentName,
  Component,
} from '@component-controls/core';
import { useStore, StoreContext, useActiveTab, useConfig } from './store';

interface StoryContextProps {
  story?: Story;
  updateStory: (newStory: Story) => void;
}

export const StoryContext = createContext<StoryContextProps>({
  updateStory: () => {},
});

export const StoryContextProvider: FC<{ storyId: string | undefined }> = ({
  storyId,
  children,
}) => {
  const { store } = useContext(StoreContext);
  const [story, setStory] = useState<Story | undefined>(
    storyId ? store.stories[storyId] : undefined,
  );
  useEffect(() => {
    setStory(storyId ? store.stories[storyId] : undefined);
  }, [storyId, store]);
  useEffect(() => {
    const onObserver = (updatedStory?: Story) => {
      if (updatedStory?.id === story?.id) {
        setStory(updatedStory);
      }
    };
    store.addObserver(onObserver);
    return () => store.removeObserver(onObserver);
  }, [store, story?.id]);
  return (
    <StoryContext.Provider
      value={{
        story,
        updateStory: newValue => {
          if (storyId) {
            store.updateStory(newValue);
            setStory(newValue);
          }
        },
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

/**
 * Returns the currently selected story
 */
export const useCurrentStory = (): Story | undefined => {
  const { story } = useContext(StoryContext);
  return story;
};

/**
 * Retrieves a Story object from a story id
 */
export const useStoryById = (storyId: string) => {
  const store = useStore();
  return store.stories[storyId];
};

/**
 * given a story name, will go through the store to find a story that matches it
 */
export const useGetStoryIdFromName = () => (
  name: string,
): string | undefined => {
  const store = useStore();
  for (const docId in store.docs) {
    const doc = store.docs[docId];
    const storyId = docStoryToId(docId, name);
    if (doc.stories && doc.stories.indexOf(storyId) > -1) {
      return storyId;
    }
  }
  return undefined;
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
  const story = useCurrentStory();
  const { id: currentStoryId } = story || {};
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
  const [story, setStory] = useState(
    storyId ? store.stories[storyId] : undefined,
  );
  useEffect(() => {
    const onObserver = (updatedStory?: Story) => {
      if (updatedStory?.id === storyId) {
        setStory(updatedStory);
      }
    };
    setStory(storyId ? store.stories[storyId] : undefined);
    store.addObserver(onObserver);
    return () => store.removeObserver(onObserver);
  }, [store, storyId]);

  return story;
};

export const useGetStory = () => (props: StoryInputProps) => useStory(props);

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
 * Returns a link to a story from a story id.
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
  return getStoryPath(story.id, doc, config.pages, activeTab);
};

export const useGetStoryPath = () => {
  const store = useStore();
  const config = useConfig();
  return (storyId: string, activeTab?: string): string => {
    const story = store.stories[storyId];
    const doc = story && story.doc ? store.docs[story.doc] : undefined;
    return getStoryPath(storyId, doc, config.pages, activeTab);
  };
};
