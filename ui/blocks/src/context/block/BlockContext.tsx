import React from 'react';
import { RecoilRoot } from 'recoil';
import { StoryStore } from '@component-controls/store';
import { BlockDataContextProvider } from './BlockDataContext';
import { BlockControlsContextProvider } from './BlockControlsContext';
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
}) => {
  let storyId = propsStoryId;
  const docId = storyId || propsDocId ? propsDocId : store.firstDoc;
  if (!storyId && docId) {
    const doc = store.getStoryDoc(docId);
    storyId =
      doc && doc.stories && doc.stories.length ? doc.stories[0] : undefined;
  }

  return (
    <ErrorBoundary>
      <RecoilRoot>
        <BlockContext.Provider
          value={{
            storyId,
            docId,
            storeProvider: store,
            options,
          }}
        >
          <BlockDataContextProvider
            store={store}
            storyId={storyId}
            docId={docId}
          >
            <BlockControlsContextProvider store={store}>
              {children}
            </BlockControlsContextProvider>
          </BlockDataContextProvider>
        </BlockContext.Provider>
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export const useBlockContext: () => BlockContextProps = () =>
  React.useContext(BlockContext);
