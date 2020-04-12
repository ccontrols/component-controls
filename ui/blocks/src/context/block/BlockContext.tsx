import React, { useEffect, useState } from 'react';
import { store as storyStore, StoryStore } from '@component-controls/store';
import { Story } from '@component-controls/specification';
import { BlockDataContextProvider } from './BlockDataContext';
import { BlockControlsContextProvider } from './BlockControlsContext';

export interface BlockContextInputProps {
  /**
   * current story id
   */
  storyId: string;
  /**
   * store mockup when running tests
   */
  mockStore?: StoryStore;
}

export interface BlockContextProps {
  /**
   * current story
   */
  story?: Story;
}
//@ts-ignore
export const BlockContext = React.createContext<BlockContextProps>({});

export const BlockContextProvider: React.FC<BlockContextInputProps> = ({
  children,
  storyId,
  mockStore,
}) => {
  const storeProvider = mockStore || storyStore;
  const store = storeProvider.getStore();
  const [story, setStory] = useState<{ story?: Story; id: string }>({
    story: store ? store.stories[storyId] : undefined,
    id: storyId,
  });

  const refreshData = () => {
    setStory({
      story: store ? { ...store.stories[storyId] } : undefined,
      id: storyId,
    });
  };
  useEffect(() => {
    const onChange = (id?: string) => {
      if (id === undefined || storyId === id) {
        refreshData();
      }
    };
    storyStore.addObserver(onChange);
    return () => {
      storyStore.removeObserver(onChange);
    };
  }, []);

  useEffect(() => {
    if (story.id !== storyId) {
      refreshData();
    }
  }, [storyId, store]);

  return (
    <BlockContext.Provider
      value={{
        story: story.story,
      }}
    >
      <BlockDataContextProvider store={store}>
        <BlockControlsContextProvider store={storeProvider}>
          {children}
        </BlockControlsContextProvider>
      </BlockDataContextProvider>
    </BlockContext.Provider>
  );
};

export const useBlockContext: () => BlockContextProps = () =>
  React.useContext(BlockContext);
