import { selector, selectorFamily, useRecoilValue } from 'recoil';
import {
  ComponentControls,
  ComponentControl,
  RecoilControlSelector,
} from '@component-controls/core';

import { currentStorySelector } from './story';
import { storeAtom } from './store';

const currentStoryControls = selector<ComponentControls | undefined>({
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
    const controls = get(currentStoryControls);
    return controls ? controls[name] : undefined;
  },
  set: name => ({ get, set }, newValue) => {
    const controls = get(currentStoryControls);
    const updated: ComponentControls = { ...controls, [name]: newValue as any };
    set(currentStoryControls, updated);
  },
});

const storyControls = selectorFamily<ComponentControls | undefined, string>({
  key: 'story_prop',
  get: storyId => ({ get }) => {
    const store = get(storeAtom);
    return store.stories[storyId]?.controls;
  },
});

export const useStoryControls = (
  storyId: string,
): ComponentControls | undefined => useRecoilValue(storyControls(storyId));
