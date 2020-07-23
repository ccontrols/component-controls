import { atom, useRecoilValue, useSetRecoilState, selector } from 'recoil';
import { StoriesStore } from '@component-controls/core';

export const storeAtom = atom<StoriesStore>({
  key: 'store',
  default: {
    docs: {},
    stories: {},
    packages: {},
    components: {},
  },
});

export const useStore = (): StoriesStore => useRecoilValue(storeAtom);

export const configSelector = selector<StoriesStore['config']>({
  key: 'config',
  get: ({ get }) => {
    const store = get(storeAtom);
    return store.config;
  },
});

export const useConfig = () => useRecoilValue(configSelector);

type StoreObserver = (storyId?: string, propName?: string) => void;

const observersAtom = atom<StoreObserver[]>({
  key: 'observers',
  default: [],
});

export const activeTabAtom = atom<string | undefined>({
  key: 'avtive_tab',
  default: undefined,
});

export const useActiveTab = () => useRecoilValue(activeTabAtom);

export const addObserver = (observer: StoreObserver) => {
  const observers = useRecoilValue(observersAtom);
  useSetRecoilState(observersAtom)([...observers, observer]);
};

export const removeObserver = (observer: StoreObserver) => {
  const observers = useRecoilValue(observersAtom);
  useSetRecoilState(observersAtom)(observers.filter(o => o !== observer));
};

export const notifyObservers = (storyId: string, propName: string) => {
  const observers = useRecoilValue(observersAtom);
  observers.forEach(observer => observer(storyId, propName));
};
