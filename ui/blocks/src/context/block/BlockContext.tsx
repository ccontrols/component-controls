import React from 'react';
import { StoryStore } from '@component-controls/store';
import { BlockDataContextProvider } from './BlockDataContext';
import { BlockControlsContextProvider } from './BlockControlsContext';

export interface BlockContextInputProps {
  /**
   * current story id
   */
  storyId: string;
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
  store,
  options,
}) => {
  return (
    <BlockContext.Provider
      value={{
        storyId,
        storeProvider: store,
        options,
      }}
    >
      <BlockDataContextProvider store={store} storyId={storyId}>
        <BlockControlsContextProvider store={store}>
          {children}
        </BlockControlsContextProvider>
      </BlockDataContextProvider>
    </BlockContext.Provider>
  );
};

export const useBlockContext: () => BlockContextProps = () =>
  React.useContext(BlockContext);
