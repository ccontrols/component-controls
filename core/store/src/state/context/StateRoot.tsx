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
   * initial control values. usually passed from the url
   */
  values?: any;

  /**
   * user options passed from container
   * those can be global parameters as well as decorators
   */
  userData?: Record<string, any>;
}

export const StateRoot: FC<StateRootProps> = ({
  children,
  storyId,
  docId,
  store,
  userData = {},
  values,
  activeTab,
}) => {
  return (
    <StoreContextProvider store={store}>
      <ConfigContextProvider>
        <ActiveTabContextProvider activeTab={activeTab}>
          <OptionsContextProvider userData={userData}>
            <DocumentContextProvider docId={docId}>
              <DocsSortContextProvider>
                <StoryContextProvider storyId={storyId} values={values}>
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
