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
  storyId: string;
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
  storyId,
  mockStore,
  options,
}) => {
  const storeProvider = mockStore || storyStore;
  return (
    <BlockContext.Provider
      value={{
        storyId,
        storeProvider,
        options,
      }}
    >
      <BlockDataContextProvider store={storeProvider} storyId={storyId}>
        <BlockControlsContextProvider store={storeProvider}>
          {children}
        </BlockControlsContextProvider>
      </BlockDataContextProvider>
    </BlockContext.Provider>
  );
};

export const useBlockContext: () => BlockContextProps = () =>
  React.useContext(BlockContext);
