import React, { FC, Fragment } from 'react';
import {
  selector,
  selectorFamily,
  useRecoilValue,
  useRecoilState,
  RecoilState,
  RecoilRoot,
} from 'recoil';
import { ComponentControls, ComponentControl } from '@component-controls/core';

import { currentStoryState } from './story';
import { storeState } from './store';

const currentControlsState = selector<ComponentControls | undefined>({
  key: 'story_prop',
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

export const currentControlsPropState: ControlState = selectorFamily<
  ComponentControl | undefined,
  string
>({
  key: 'controls_prop',
  get: name => ({ get }) => {
    const controls = get(currentControlsState);
    return controls ? controls[name] : undefined;
  },
  set: name => ({ get, set }, newValue) => {
    const controls = get(currentControlsState);
    const updated: ComponentControls = { ...controls, [name]: newValue as any };
    set(currentControlsState, updated);
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
  recoilSelector: ControlState,
): [T, (value: any) => void] => {
  const [control, setControl] = useRecoilState(recoilSelector(name));
  const setValue = (value: any) => {
    if (control) {
      setControl({ ...control, value });
    }
  };
  return [control as T, setValue];
};

/**
 * editors state update interface
 */
export type ControlState = (
  propName: string,
) => RecoilState<ComponentControl | undefined>;

export const ControlsState: FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export const useControlSelector = (
  controls: ComponentControls,
  onChange: (name: string, value: any) => void,
): ControlState => {
  const selector = selectorFamily<ComponentControl | undefined, string>({
    key: 'controls_selector',
    get: name => () => {
      return controls[name];
    },
    set: name => (_, newValue) => {
      onChange(name, newValue);
    },
  });
  return selector;
};

export interface ControlsContextProviderProps {
  name: string;
  controls?: ComponentControls;
}
export const ControlsContextProvider: FC<ControlsContextProviderProps> = ({
  children,
}) => <Fragment>{children}</Fragment>;
