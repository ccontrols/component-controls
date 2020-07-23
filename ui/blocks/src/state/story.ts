import { atom, useRecoilValue } from 'recoil';
import { Story } from '@component-controls/core';

export const currentStoryAtom = atom<Story | undefined>({
  key: 'current_story',
  default: undefined,
});

export const useCurrentStory = (): Story | undefined =>
  useRecoilValue(currentStoryAtom);
