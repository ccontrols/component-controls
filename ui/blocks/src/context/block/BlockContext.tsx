import React, { useEffect, useState } from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { store as storyStore } from '@component-controls/store';
import {
  Story,
  StoryComponent,
  StoriesKind,
  StoriesStore,
  SetControlValueFn,
  ClickControlFn,
  ComponentControlButton,
  getComponentName,
} from '@component-controls/specification';
import { mergeControlValues } from '@component-controls/core';

export interface BlockContextInputProps {
  /**
   * current story id
   */
  storyId: string;
  /**
   * store mockup when running tests
   */
  mockStore?: StoriesStore;
}

export interface Components {
  [label: string]: StoryComponent;
}

export interface BlockContextProps {
  /**
   * current story
   */
  story?: Story;
  /**
   * generic function to update the values of component controls.
   */
  setControlValue?: SetControlValueFn;

  /**
   * generic function to propagate a click event for component controls.
   */
  clickControl?: ClickControlFn;
  /**
   * returns a story, given a story id
   */
  getStory: (storyId?: string) => Story | undefined;

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
  ) => Components;
  /**
   *
   * find a story id from a story 'name'
   * will navigate through the store kinds and look for a matching story id
   */
  storyIdFromName: (name: string) => string | undefined;
}
//@ts-ignore
export const BlockContext = React.createContext<BlockContextProps>({});

export const BlockContextProvider: React.FC<BlockContextInputProps> = ({
  children,
  storyId,
  mockStore,
}) => {
  const store = mockStore || storyStore.getStore();
  const [story, setStory] = useState<{ story?: Story; id: string }>({
    story: store ? store.stories[storyId] : undefined,
    id: storyId,
  });

  const refreshData = () => {
    setStory({
      story: store ? { ...store.stories[storyId] } : undefined,
      id: storyId,
    });
  };
  useEffect(() => {
    const onChange = (id?: string) => {
      if (id === undefined || storyId === id) {
        refreshData();
      }
    };
    storyStore.addObserver(onChange);
    return () => {
      storyStore.removeObserver(onChange);
    };
  }, []);

  useEffect(() => {
    if (story.id !== storyId) {
      refreshData();
    }
  }, [storyId, store]);

  /**
   * returns a story and its file, given a story id
   */
  const getStoryData = (id?: string) => {
    const story: Story | undefined =
      store && store.stories && store.stories[id || storyId];

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
  const getStory = (id?: string) =>
    store && store.stories && store.stories[id || storyId];

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
  const setControlValue: SetControlValueFn = (
    storyId: string,
    propName: string | undefined,
    propValue: any,
  ) => {
    const controls =
      store && store.stories[storyId] && store.stories[storyId].controls;
    if (store && controls) {
      const newValues = mergeControlValues(controls, propName, propValue);
      storyStore.updateStoryProp(storyId, 'controls', newValues);
      refreshData();
    }
  };
  const clickControl: ClickControlFn = (storyId: string, propName: string) => {
    const controls =
      store && store.stories[storyId] && store.stories[storyId].controls;
    if (controls && controls[propName]) {
      const control: ComponentControlButton = controls[
        propName
      ] as ComponentControlButton;
      if (control && typeof control.onClick === 'function') {
        control.onClick(control);
      }
    }
  };
  return (
    <BlockContext.Provider
      value={{
        story: story.story,
        setControlValue,
        clickControl,
        getStory,
        getStoryData,
        storyIdFromName,
        getComponents,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext: () => BlockContextProps = () =>
  React.useContext(BlockContext);
