import React from 'react';
import storyFn from '@component-controls/loader/story-store-data';
import {
  StoriesStore,
  SetControlValueFn,
  ClickControlFn,
  ComponentControlButton,
} from '@component-controls/specification';
import { mergeControlValues } from '@component-controls/core';

export interface BlockContextInputProps {
  currentId: string;
}
export const CURRENT_SELECTION = '.';
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
   * store mockup when running tests
   */
  store?: StoriesStore;
}

export const BlockContext = React.createContext<BlockContextProps>({});

export const BlockContextProvider: React.FC<BlockContextInputProps> = ({
  children,
  currentId,
}) => {
  const [store, setStore] = React.useState<StoriesStore>({
    components: {},
    stories: {},
    kinds: {},
  });
  React.useEffect(() => {
    setStore(storyFn());
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
      setStore({
        ...store,
        stories: {
          ...store.stories,
          [storyId]: { ...store.stories[storyId], controls: newValues },
        },
      });
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
