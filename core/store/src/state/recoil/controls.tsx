import React, { FC } from 'react';
import {
  selector,
  selectorFamily,
  useRecoilValue,
  useRecoilState,
  RecoilRoot,
} from 'recoil';
import {
  ComponentControls,
  ComponentControl,
  mergeControlValues,
} from '@component-controls/core';

import { currentStoryState } from './story';
import { storeState } from './store';

export const currentControlsState = selector<ComponentControls | undefined>({
  key: 'current_controls',
  get: ({ get }) => {
    const story = get(currentStoryState);
    return story?.controls;
  },
  set: ({ get, set }, newValue) => {
    const story = get(currentStoryState);
    const updated = { ...story, controls: newValue };
    set(currentStoryState, updated);
  },
});

const storyControlsState = selectorFamily<
  ComponentControls | undefined,
  string
>({
  key: 'story_prop',
  get: storyId => ({ get }) => {
    const store = get(storeState);
    return store.stories[storyId]?.controls;
  },
});

/**
 * Returns the controls associated with a story
 */
export const useStoryControls = (
  storyId: string,
): ComponentControls | undefined => useRecoilValue(storyControlsState(storyId));

/**
 * Retruns a controls and a setter function from the current controls context, given a control name
 */
export const useControl = <T extends ComponentControl>(
  name?: string,
): [T, (value: any) => void] => {
  const [controls, setControls] = useRecoilState(currentControlsState);
  const control = controls ? (name ? controls[name] : controls) : undefined;
  const setValue = (newValue: any) => {
    setControls(mergeControlValues(controls || {}, name, newValue));
  };
  return [control as T, setValue];
};

/**
 * editors state update interface
 */
export type ControlUpdateFn = (name: string, newValue: any) => void;

export interface ControlsStateProviderProps {
  onChange: ControlUpdateFn;
  controls?: ComponentControls;
}
export const ControlsStateProvider: FC<ControlsStateProviderProps> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
