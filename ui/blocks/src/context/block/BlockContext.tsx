import React from 'react';
import { deepMerge, StoriesStore } from '@component-controls/core';
import {
  documentIdAtom,
  storeAtom,
  storyIdAtom,
  activeTabAtom,
  optionsAtom,
  useStore,
} from '@component-controls/store';
import { RecoilRoot } from 'recoil';
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
  store: StoriesStore;
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
    const story = store.stories[storyId];
    docId = story?.doc;
  } else if (!storyId && docId) {
    const doc = store.docs[docId];
    storyId =
      doc && doc.stories && doc.stories.length ? doc.stories[0] : undefined;
  }
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(documentIdAtom, docId);
        set(storeAtom, store);
        set(storyIdAtom, storyId);
        set(activeTabAtom, activeTab);
        set(optionsAtom, options || {});
      }}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
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
