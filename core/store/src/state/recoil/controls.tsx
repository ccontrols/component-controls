import React, { FC } from 'react';
import {
  selector,
  selectorFamily,
  useRecoilValue,
  useRecoilState,
  RecoilRoot,
} from 'recoil';
import { ComponentControls, ComponentControl } from '@component-controls/core';

import { currentStoryState } from './story';
import { storeState } from './store';

const currentControlsState = selector<ComponentControls | undefined>({
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

export const useStoryControls = (
  storyId: string,
): ComponentControls | undefined => useRecoilValue(storyControlsState(storyId));

export const useControl = <T extends ComponentControl>(
  name: string,
): [T, (value: any) => void] => {
  const [controls, setControls] = useRecoilState(currentControlsState);
  const control = controls ? controls[name] : undefined;
  const setValue = (value: any) => {
    setControls({ ...controls, [name]: value });
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
  controls,
  onChange,
  children,
}) => {
  console.log(controls, onChange);
  return <RecoilRoot>{children}</RecoilRoot>;
};
