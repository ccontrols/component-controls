import { selector, selectorFamily } from 'recoil';
import {
  ComponentControls,
  ComponentControl,
  RecoilControlSelector,
} from '@component-controls/core';

import { currentStorySelector } from './story';

export const storyControls = selector<ComponentControls | undefined>({
  key: 'story_prop',
  get: ({ get }) => {
    const story = get(currentStorySelector);
    return story?.controls;
  },
  set: ({ get, set }, newValue) => {
    const story = get(currentStorySelector);
    const updated = { ...story, controls: newValue };
    set(currentStorySelector, updated);
  },
});

export const currentControlsPropSelector: RecoilControlSelector = selectorFamily<
  ComponentControl | undefined,
  string
>({
  key: 'controls_prop',
  get: name => ({ get }) => {
    const controls = get(storyControls);
    return controls ? controls[name] : undefined;
  },
  set: name => ({ get, set }, newValue) => {
    const controls = get(storyControls);
    const updated: ComponentControls = { ...controls, [name]: newValue as any };
    set(storyControls, updated);
  },
});
