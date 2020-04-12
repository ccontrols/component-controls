import React from 'react';
import { store as storyStore, StoryStore } from '@component-controls/store';
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
  storyId: string;
  /**
   * store interface
   */
  storeProvider: StoryStore;
}
//@ts-ignore
export const BlockContext = React.createContext<BlockContextProps>({});

export const BlockContextProvider: React.FC<BlockContextInputProps> = ({
  children,
  storyId,
  mockStore,
}) => {
  const storeProvider = mockStore || storyStore;
  return (
    <BlockDataContextProvider store={storeProvider}>
      <BlockControlsContextProvider store={storeProvider}>
        <BlockContext.Provider
          value={{
            storyId,
            storeProvider,
          }}
        >
          {children}
        </BlockContext.Provider>
      </BlockControlsContextProvider>
    </BlockDataContextProvider>
  );
};

export const useBlockContext: () => BlockContextProps = () =>
  React.useContext(BlockContext);
