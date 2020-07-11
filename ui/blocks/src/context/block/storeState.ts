import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { StoryStore } from '@component-controls/store';

export const storeAtom = atom<StoryStore | null>({
  key: 'storyStore', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const useStore = (): StoryStore => {
  const store = useRecoilValue(storeAtom);
  if (store === null) {
    throw new Error('You can not access store before assigning it');
  }
  return store;
};

export const setStore = (store: StoryStore) =>
  useSetRecoilState(storeAtom)(store);
