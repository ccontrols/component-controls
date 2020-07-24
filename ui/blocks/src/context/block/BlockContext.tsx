import React from 'react';
import { deepMerge } from '@component-controls/core';
import {
  StoryStore,
  documentIdAtom,
  storeAtom,
  storyIdAtom,
  activeTabAtom,
  useStore,
} from '@component-controls/store';
import { RecoilRoot } from 'recoil';
import { BlockDataContextProvider } from './BlockDataContext';
import { ErrorBoundary } from './ErrorBoundary';

export interface BlockContextInputProps {
  /**
   * current story id
   */
  storyId?: string;
  /**
   * current documentation page, if no story is selected
   */
  docId?: string;

  /**
   * store object
   */
  store: StoryStore;
  /**
   * active page tab
   */
  activeTab?: string;

  /**
   * global options passed from container
   * those are global parameters as well as decorators
   */
  options?: any;
}

export interface BlockContextProps {
  /**
   * current story
   */
  storyId?: string;
  /**
   * current documentation page, if no story is selected
   */
  docId?: string;

  /**
   * store interface
   */
  storeProvider: StoryStore;

  /**
   * global options passed from container
   * those are global parameters as well as decorators
   */
  options?: any;
}

//@ts-ignore
export const BlockContext = React.createContext<BlockContextProps>({});

export const BlockContextProvider: React.FC<BlockContextInputProps> = ({
  children,
  storyId: propsStoryId,
  docId: propsDocId,
  store,
  options,
  activeTab,
}) => {
  let storyId = propsStoryId;
  let docId = propsDocId;
  if (storyId && !docId) {
    const story = store.getStory(storyId);
    docId = story?.doc;
  } else if (!storyId && docId) {
    const doc = store.getStoryDoc(docId);
    storyId =
      doc && doc.stories && doc.stories.length ? doc.stories[0] : undefined;
  }
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(documentIdAtom, docId);
        set(storeAtom, store.store);
        set(storyIdAtom, storyId);
        set(activeTabAtom, activeTab);
      }}
    >
      <ErrorBoundary>
        <BlockContext.Provider
          value={{
            storyId,
            docId,
            storeProvider: store,
            options: store.config ? deepMerge(options, store.config) : options,
          }}
        >
          <BlockDataContextProvider
            store={store}
            storyId={storyId}
            docId={propsDocId}
          >
            {children}
          </BlockDataContextProvider>
        </BlockContext.Provider>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export const useCustomProps = <T extends unknown>(
  name: string,
  props: T,
): T => {
  const store = useStore();
  const { config } = store;
  const userProps = config?.components?.[name];
  return userProps ? deepMerge(props, userProps) : props;
};
