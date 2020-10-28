import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Store, getDefaultStore, PackageInfo } from '@component-controls/core';

interface StoreContextProps {
  store: Store;
}

export const StoreContext = createContext<StoreContextProps>({
  store: getDefaultStore(),
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

interface ConfigContextProps {
  config: Store['config'];
  setConfig: (config: Store['config']) => void;
}

export const ConfigContext = createContext<ConfigContextProps>({
  config: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setConfig: () => {},
});

export const ConfigContextProvider: FC = ({ children }) => {
  const store = useStore();
  const [config, setConfig] = useState(store.config);
  useEffect(() => {
    setConfig(store.config);
  }, [store, setConfig]);

  return (
    <ConfigContext.Provider
      value={{
        config,
        setConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
/**
 * Returns a configuration object and the setter method
 */

export const useConfigState = (): [
  Store['config'],
  (config: Store['config']) => void,
] => {
  const { config, setConfig } = useContext(ConfigContext);
  return [config, setConfig];
};

/**
 * Returns the configuration object part of the store
 */

export const useConfig = (): Store['config'] => {
  const [config] = useConfigState();
  return config;
};

/**
 * Returns the current theme configuration and a setter method
 */

export const useThemeState = (): [
  Store['config']['theme'],
  (config: Store['config']['theme']) => void,
] => {
  const { config, setConfig } = useContext(ConfigContext);
  return [
    config.theme,
    theme => {
      setConfig({ ...config, theme: theme || config.theme });
    },
  ];
};

/**
 * returns current theme object
 */
export const useTheme = (): Store['config']['theme'] => {
  const [theme] = useThemeState();
  return theme;
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
