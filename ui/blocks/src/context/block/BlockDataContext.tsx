import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { StoryStore, StoreObserver } from '@component-controls/store';

import {
  Story,
  StoriesStore,
  StoryComponent,
  StoryComponents,
  StoriesDoc,
  getComponentName,
  PackageInfo,
} from '@component-controls/specification';
import { CURRENT_STORY } from '../../utils';

export interface BlockDataContextProps {
  /**
   * returns a story and its associated objects (doc, component), given a story id
   */
  getStoryData: (
    storyId?: string,
  ) => {
    story?: Story;
    doc?: StoriesDoc;
    component?: StoryComponent;
    docPackage?: PackageInfo;
    componentPackage?: PackageInfo;
  };

  /**
   * given an object of components, resolves to name => StoryComponent
   */
  getComponents: (
    components: { [key: string]: any } | undefined,
    doc: StoriesDoc | undefined,
  ) => StoryComponents;
  /**
   *
   * find a story id from a story 'name'
   * will navigate through the store docs and look for a matching story id
   */
  storyIdFromName: (name: string) => string | undefined;

  /**
   * add an observer for onChange events
   */
  addObserver: (observer: StoreObserver) => void;
  /**
   * add an observer for onChange events
   */
  removeObserver: (observer: StoreObserver) => void;

  /**
   * current story id
   */
  storyId: string;
}
//@ts-ignore
export const BlockDataContext = React.createContext<BlockDataContextProps>({});

export interface BlockDataContextInoutProps {
  store: StoryStore;
  storyId: string;
}

export const BlockDataContextProvider: React.FC<BlockDataContextInoutProps> = ({
  children,
  storyId,
  store: storeProvider,
}) => {
  const store: StoriesStore | undefined = storeProvider.getStore();

  const getStoryData = (id?: string) => {
    if (store) {
      const actualId = !id || id === CURRENT_STORY ? storyId : id;
      const story: Story | undefined = store.stories
        ? store.stories[actualId]
        : undefined;
      const doc = story && story.doc ? store.docs[story.doc] : undefined;
      const storyComponent: any =
        story && doc ? story.component || doc.component : undefined;

      const componentName = getComponentName(storyComponent);
      const component =
        componentName && doc && doc.components[componentName]
          ? store.components[doc.components[componentName]]
          : undefined;
      const docPackage =
        doc && doc.package ? store.packages[doc.package] : undefined;
      const componentPackage =
        component && component.package
          ? store.packages[component.package]
          : undefined;
      return { story, doc, component, docPackage, componentPackage };
    }
    return {};
  };

  const getComponents = (
    components: { [key: string]: any } | undefined,
    doc: StoriesDoc | undefined,
  ): StoryComponents =>
    store && doc && components
      ? Object.keys(components).reduce((acc, key) => {
          const name = getComponentName(components[key]);
          const component =
            name &&
            doc?.components[name] &&
            store?.components[doc.components[name]];
          if (component) {
            return { ...acc, [key]: component };
          } else {
            return acc;
          }
        }, {})
      : {};

  const storyIdFromName = (name: string): string | undefined => {
    if (store) {
      for (const title in store.docs) {
        const doc = store.docs[title];
        const storyId = toId(title, storyNameFromExport(name));
        if (doc.stories && doc.stories.indexOf(storyId) > -1) {
          return storyId;
        }
      }
    }
    return undefined;
  };
  return (
    <BlockDataContext.Provider
      value={{
        storyId,
        getStoryData,
        storyIdFromName,
        getComponents,
        addObserver: storeProvider.addObserver,
        removeObserver: storeProvider.removeObserver,
      }}
    >
      {children}
    </BlockDataContext.Provider>
  );
};
