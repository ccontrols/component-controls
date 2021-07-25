import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Store } from '@component-controls/core';
import { storeState, activeTabState, optionsState } from './store';
import { documentIdState } from './document';
import { storyIdState } from './story';
import { currentControlsState } from './controls';

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
   * global options passed from container
   * those are global parameters as well as decorators
   */
  options?: Record<string, unknown>;
}

export const StateRoot: FC<StateRootProps> = ({
  children,
  storyId,
  docId,
  store,
  options = {},
  activeTab,
  values,
}) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(documentIdState, docId);
        set(storeState, store);
        set(storyIdState, storyId);
        set(activeTabState, activeTab);
        set(optionsState, options || {});
        set(currentControlsState, values);
      }}
    >
      {children}
    </RecoilRoot>
  );
};
