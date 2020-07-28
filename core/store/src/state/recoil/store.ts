import { atom, useRecoilValue, selector } from 'recoil';
import { Store, defaultStore, PackageInfo } from '@component-controls/core';

export const storeState = atom<Store>({
  key: 'store',
  default: defaultStore,
});

/**
 * Returns the global store object
 */

export const useStore = (): Store => useRecoilValue(storeState);

export const configState = selector<Store['config']>({
  key: 'config',
  get: ({ get }) => {
    const store = get(storeState);
    return store.config;
  },
});

/**
 * Returns the configuration object part of the store
 */
export const useConfig = () => useRecoilValue(configState);

export const activeTabState = atom<string | undefined>({
  key: 'active_tab',
  default: undefined,
});

/**
 * Returns the current active tab for documenta that have multiple tabs/pages
 */
export const useActiveTab = () => useRecoilValue(activeTabState);

/**
 * packageId Returns a package object from a package package id. The package id can come from a Document or a Component object.
 */
export const usePackage = (packageId?: string): PackageInfo | undefined => {
  const store = useStore();
  return packageId ? store.packages[packageId] : undefined;
};

export const optionsState = atom<any>({
  key: 'global_options',
  default: {},
});

export const useExternalOptions = () => useRecoilValue(optionsState);
