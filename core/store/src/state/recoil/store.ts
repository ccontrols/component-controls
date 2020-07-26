import { atom, useRecoilValue, selector } from 'recoil';
import { StoriesStore, PackageInfo } from '@component-controls/core';

export const storeState = atom<StoriesStore>({
  key: 'store',
  default: {
    docs: {},
    stories: {},
    packages: {},
    components: {},
  },
});

export const useStore = (): StoriesStore => useRecoilValue(storeState);

export const configState = selector<StoriesStore['config']>({
  key: 'config',
  get: ({ get }) => {
    const store = get(storeState);
    return store.config;
  },
});

export const useConfig = () => useRecoilValue(configState);

export const activeTabState = atom<string | undefined>({
  key: 'active_tab',
  default: undefined,
});

export const useActiveTab = () => useRecoilValue(activeTabState);

export const usePackage = (packageId?: string): PackageInfo | undefined => {
  const store = useStore();
  return packageId ? store.packages[packageId] : undefined;
};

export const optionsState = atom<any>({
  key: 'global_options',
  default: {},
});

export const useExternalOptions = () => useRecoilValue(optionsState);
