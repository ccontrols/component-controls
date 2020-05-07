import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { StoryStore, StoreObserver } from '@component-controls/store';

import {
  Story,
  StoriesStore,
  StoryComponent,
  StoryComponents,
  StoriesKind,
  getComponentName,
  PackageInfo,
} from '@component-controls/specification';

export interface BlockDataContextProps {
  /**
   * returns a story and its associated objects (kind, component), given a story id
   */
  getStoryData: (
    storyId?: string,
  ) => {
    story?: Story;
    kind?: StoriesKind;
    component?: StoryComponent;
    storyPackage?: PackageInfo;
    componentPackage?: PackageInfo;
  };

  /**
   * given an object of components, resolves to name => StoryComponent
   */
  getComponents: (
    components: { [key: string]: any },
    kind: StoriesKind,
  ) => StoryComponents;
  /**
   *
   * find a story id from a story 'name'
   * will navigate through the store kinds and look for a matching story id
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

  const getStoryData = (id: string = storyId) => {
    if (store) {
      const story: Story | undefined =
        store.stories && id ? store.stories[id] : undefined;
      const kind = story && story.kind ? store.kinds[story.kind] : undefined;
      const storyComponent: any =
        story && kind ? story.component || kind.component : undefined;

      const componentName = getComponentName(storyComponent);
      const component =
        componentName && kind && kind.components[componentName]
          ? store.components[kind.components[componentName]]
          : undefined;
      const storyPackage =
        kind && kind.package ? store.packages[kind.package] : undefined;
      const componentPackage =
        component && component.package
          ? store.packages[component.package]
          : undefined;
      return { story, kind, component, storyPackage, componentPackage };
    }
    return {};
  };

  const getComponents = (
    components: { [key: string]: any },
    kind: StoriesKind,
  ) =>
    store && kind && components
      ? Object.keys(components).reduce((acc, key) => {
          const name = getComponentName(components[key]);
          const component =
            name &&
            kind?.components[name] &&
            store?.components[kind.components[name]];
          if (component) {
            return { ...acc, [key]: component };
          } else {
            return acc;
          }
        }, {})
      : {};

  const storyIdFromName = (name: string): string | undefined => {
    if (store) {
      for (const title in store.kinds) {
        const kind = store.kinds[title];
        const storyId = toId(title, storyNameFromExport(name));
        if (kind.stories && kind.stories.indexOf(storyId) > -1) {
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
