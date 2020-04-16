import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { StoryStore } from '@component-controls/store';
import {
  Story,
  StoriesStore,
  StoryComponent,
  StoryComponents,
  StoriesKind,
  getComponentName,
} from '@component-controls/specification';

export interface BlockDataContextProps {
  /**
   * returns a story and its associated objects (kind, component), given a story id
   */
  getStoryData: (
    storyId?: string,
  ) => { story?: Story; kind?: StoriesKind; component?: StoryComponent };

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
    const story: Story | undefined =
      store && store.stories && id ? store.stories[id] : undefined;
    const kind =
      store && story && story.kind ? store.kinds[story.kind] : undefined;
    const storyComponent: any =
      story && kind ? story.component || kind.component : undefined;
    const componentName = getComponentName(storyComponent);

    const component =
      store && componentName && kind && kind.components[componentName]
        ? store.components[kind.components[componentName]]
        : undefined;
    return { story, kind, component };
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
        getStoryData,
        storyIdFromName,
        getComponents,
      }}
    >
      {children}
    </BlockDataContext.Provider>
  );
};
