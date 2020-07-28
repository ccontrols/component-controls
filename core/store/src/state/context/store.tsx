import React, { FC, createContext, useContext } from 'react';
import { Store, defaultStore, PackageInfo } from '@component-controls/core';

interface StoreContextProps {
  store: Store;
}

export const StoreContext = createContext<StoreContextProps>({
  store: defaultStore,
});

export const StoreContextProvider: FC<{ store: Store }> = ({
  store,
  children,
}) => {
  return (
    <StoreContext.Provider
      value={{
        store,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

/**
 * Returns the global store object
 */
export const useStore = (): Store => {
  const { store } = useContext(StoreContext);
  return store;
};

/**
 * Returns the configuration object part of the store
 */

export const useConfig = (): Store['config'] => {
  const store = useStore();
  return store.config;
};

type ActiveTabType = string | undefined;
const ActiveTabContext = createContext<ActiveTabType>(undefined);

export const ActiveTabContextProvider: FC<{
  activeTab: ActiveTabType;
}> = ({ activeTab, children }) => {
  return (
    <ActiveTabContext.Provider value={activeTab}>
      {children}
    </ActiveTabContext.Provider>
  );
};

/**
 * Returns the current active tab for documenta that have multiple tabs/pages
 */
export const useActiveTab = (): ActiveTabType => useContext(ActiveTabContext);

/**
 * packageId Returns a package object from a package package id. The package id can come from a Document or a Component object.
 */
export const usePackage = (packageId?: string): PackageInfo | undefined => {
  const store = useStore();
  return packageId ? store.packages[packageId] : undefined;
};

const OptionsContext = createContext<any>({});

export const OptionsContextProvider: FC<{ options: any }> = ({
  options = {},
  children,
}) => {
  return (
    <OptionsContext.Provider value={options}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useExternalOptions = (): any => useContext(OptionsContext);
