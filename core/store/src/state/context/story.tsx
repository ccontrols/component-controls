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
  mergeControlValues,
} from '@component-controls/core';
import { useStore, StoreContext, useActiveTab } from './store';

interface StoryContextProps {
  story?: Story;
  updateStory: (newStory: Story) => void;
}

export const StoryContext = createContext<StoryContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateStory: () => {},
});

export const StoryContextProvider: FC<{
  storyId?: string;
  values?: any;
}> = ({ storyId, values, children }) => {
  const { store } = useContext(StoreContext);
  const [, setStory] = useState<Story | undefined>(
    storyId ? store.stories[storyId] : undefined,
  );
  useEffect(() => {
    const onObserver = (updatedStory?: Story) => {
      if (updatedStory?.id === storyId) {
        setStory(updatedStory);
      }
    };
    store.addObserver(onObserver);
    return () => store.removeObserver(onObserver);
  }, [store, storyId]);
  useEffect(() => {
    if (values && storyId) {
      const story = store.stories[storyId];
      const storyControls = story.controls || {};
      const newValue = {
        ...story,
        controls: mergeControlValues(storyControls, undefined, values),
      };
      store.updateStory(newValue);
      setStory(newValue);
    }
  }, [values, storyId, store]);
  return (
    <StoryContext.Provider
      value={{
        story: storyId ? store.stories[storyId] : undefined,
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
export const useStoryById = (storyId: string): Story | undefined => {
  const store = useStore();
  return store.stories[storyId];
};

/**
 * given a story name, will go through the store to find a story that matches it
 */
export const useStoryIdFromName = (name?: string): string | undefined => {
  const store = useStore();
  if (name) {
    for (const docId in store.docs) {
      const doc = store.docs[docId];
      const storyId = docStoryToId(docId, name);
      if (doc.stories && doc.stories.indexOf(storyId) > -1) {
        return storyId;
      }
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
  return (
    useStoryIdFromName(name) || (id === CURRENT_STORY ? currentStoryId : id)
  );
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
