import React, { FC } from 'react';
import { Store } from '@component-controls/core';
import {
  StoreContextProvider,
  ConfigContextProvider,
  ActiveTabContextProvider,
  OptionsContextProvider,
} from './store';
import { DocumentContextProvider, DocsSortContextProvider } from './document';
import { StoryContextProvider } from './story';
import { ControlsContextStoryProvider } from './controls';

export interface StateRootProps {
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
  store: Store;
  /**
   * active page tab
   */
  activeTab?: string;

  /**
   * global options passed from container
   * those are global parameters as well as decorators
   */
  options?: object;
}

export const StateRoot: FC<StateRootProps> = ({
  children,
  storyId,
  docId,
  store,
  options = {},
  activeTab,
}) => {
  return (
    <StoreContextProvider store={store}>
      <ConfigContextProvider>
        <ActiveTabContextProvider activeTab={activeTab}>
          <OptionsContextProvider options={options}>
            <DocumentContextProvider docId={docId}>
              <DocsSortContextProvider>
                <StoryContextProvider storyId={storyId}>
                  <ControlsContextStoryProvider>
                    {children}
                  </ControlsContextStoryProvider>
                </StoryContextProvider>
              </DocsSortContextProvider>
            </DocumentContextProvider>
          </OptionsContextProvider>
        </ActiveTabContextProvider>
      </ConfigContextProvider>
    </StoreContextProvider>
  );
};
