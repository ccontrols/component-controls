import React, { FC, createContext, useContext } from 'react';
import {
  ComponentControls,
  ComponentControl,
  mergeControlValues,
} from '@component-controls/core';

import { StoryContext, useStoryById } from './story';

export type ControlUpdateFn = (name: string | undefined, newValue: any) => void;

export interface ControlsContextProps {
  controls?: ComponentControls;
  updateValue: ControlUpdateFn;
}
const ControlsContext = createContext<ControlsContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateValue: () => {},
});

export const ControlsContextStoryProvider: FC = ({ children }) => {
  const { story, updateStory } = useContext(StoryContext);
  return (
    <ControlsContext.Provider
      value={{
        controls: story ? story.controls : undefined,
        updateValue: (name: string | undefined, newValue: any) => {
          if (story) {
            const storyControls = story.controls || {};
            updateStory({
              ...story,
              controls: mergeControlValues(storyControls, name, newValue),
            });
          }
        },
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

/**
 * Returns the controls associated with a story
 */
export const useStoryControls = (
  storyId: string,
): ComponentControls | undefined => {
  const story = useStoryById(storyId);
  return story ? story.controls : undefined;
};

export interface ControlsStateProviderProps {
  onChange: ControlUpdateFn;
  controls?: ComponentControls;
}
export const ControlsStateProvider: FC<ControlsStateProviderProps> = ({
  controls,
  onChange,
  children,
}) => {
  return (
    <ControlsContext.Provider
      value={{
        controls,
        updateValue: onChange,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

/**
 * Retruns a controls and a setter function from the current controls context, given a control name
 *
 */
export const useControl = <T extends ComponentControl>(
  name?: string,
): [T, (value: any) => void] => {
  const { controls, updateValue } = useContext(ControlsContext);
  const control = controls ? (name ? controls[name] : controls) : undefined;
  const setValue = (value: any) => {
    updateValue(name, value);
  };
  return [control as T, setValue];
};
