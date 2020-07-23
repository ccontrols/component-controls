import { atomFamily, useRecoilValue } from 'recoil';
import { ComponentControls } from '@component-controls/core';
import { useCurrentStory } from './story';

const controlsAtom = atomFamily<ComponentControls, string>({
  key: 'story_controls',
  default: {},
});

export const useCurrentControls = (): ComponentControls | undefined => {
  const story = useCurrentStory();
  return story?.id ? useRecoilValue(controlsAtom(story.id)) : undefined;
};
