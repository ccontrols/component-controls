import { selector, selectorFamily, useRecoilValue } from 'recoil';
import {
  ComponentControls,
  ComponentControl,
  RecoilControlSelector,
} from '@component-controls/core';

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

export const currentControlsPropState: RecoilControlSelector = selectorFamily<
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
