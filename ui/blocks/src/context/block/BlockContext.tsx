import React, { useEffect, useState } from 'react';

import storyFn from '@component-controls/loader/story-store-data';
import {
  StoriesStore,
  SetControlValueFn,
  ClickControlFn,
  ComponentControlButton,
} from '@component-controls/specification';
import { mergeControlValues } from '@component-controls/core';
import { postControlsMsg } from './channel';

export interface BlockContextInputProps {
  /**
   * current story id
   */
  currentId: string;
  /**
   * store mockup when running tests
   */
  mockStore?: StoriesStore;
  /**
   * optional cllabel to invoke when the story data are changed
   * for example when controls values are updated
   */
  onRefresh: () => void;
  /**
   * when set to true, the BlockCOntext will broadcast a message for changed controls values
   */
  postMessage?: boolean;
}

export interface BlockContextProps {
  /**
   * current story id
   */
  currentId?: string;
  /**
   * generic function to update the values of component controls.
   */
  setControlValue?: SetControlValueFn;

  /**
   * generic function to propagate a click event for component controls.
   */
  clickControl?: ClickControlFn;
  /**
   * store of stories global access
   */
  store?: StoriesStore;
}

export const BlockContext = React.createContext<BlockContextProps>({});

export const BlockContextProvider: React.FC<BlockContextInputProps> = ({
  children,
  currentId,
  mockStore,
  onRefresh,
  postMessage,
}) => {
  const [store, setStore] = useState<StoriesStore>(
    mockStore || {
      components: {},
      stories: {},
      kinds: {},
    },
  );
  useEffect(() => {
    if (mockStore === undefined) {
      const store = storyFn();
      if (postMessage) {
        Object.keys(store.stories).forEach(id => {
          postControlsMsg({ id, controls: store.stories[id].controls });
        });
        if (onRefresh) {
          onRefresh();
        }
      }
      setStore(store);
    }
  }, []);
  const setControlValue: SetControlValueFn = (
    storyId: string,
    propName: string | undefined,
    propValue: any,
  ) => {
    const controls =
      store && store.stories[storyId] && store.stories[storyId].controls;
    if (controls) {
      const newValues = mergeControlValues(controls, propName, propValue);
      if (postMessage) {
        postControlsMsg({ id: storyId, controls: newValues });
      }
      setStore({
        ...store,
        stories: {
          ...store.stories,
          [storyId]: { ...store.stories[storyId], controls: newValues },
        },
      });
      if (onRefresh) {
        onRefresh();
      }
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
        currentId,
        setControlValue,
        clickControl,
        store,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => React.useContext(BlockContext);
