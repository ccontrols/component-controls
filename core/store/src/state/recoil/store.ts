import { atom, useRecoilValue, selector } from 'recoil';
import { Store, defaultStore, PackageInfo } from '@component-controls/core';

export const storeState = atom<Store>({
  key: 'store',
  default: defaultStore,
});

export const useStore = (): Store => useRecoilValue(storeState);

export const configState = selector<Store['config']>({
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
