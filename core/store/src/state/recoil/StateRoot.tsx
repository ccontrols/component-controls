import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Store } from '@component-controls/core';
import { storeState, activeTabState, optionsState } from './store';
import { documentIdState } from './document';
import { storyIdState } from './story';

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
    <RecoilRoot
      initializeState={({ set }) => {
        set(documentIdState, docId);
        set(storeState, store);
        set(storyIdState, storyId);
        set(activeTabState, activeTab);
        set(optionsState, options || {});
      }}
    >
      {children}
    </RecoilRoot>
  );
};
