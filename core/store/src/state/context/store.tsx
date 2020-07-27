import React, {
  FC,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { Store, PackageInfo, Story } from '@component-controls/core';

interface StoreContextProps {
  store: Store;
  updateStory: (newValue: Story) => void;
}

export const StoreContext = createContext<StoreContextProps>({
  store: {
    docs: {},
    stories: {},
    packages: {},
    components: {},
  },
  updateStory: () => {},
});

export const StoreContextProvider: FC<{ store: Store }> = ({
  store: propsStore,
  children,
}) => {
  const [store, setStore] = useState<Store>(propsStore);
  useEffect(() => {
    setStore(propsStore);
  }, [propsStore]);
  return (
    <StoreContext.Provider
      value={{
        store,
        updateStory: newStory =>
          setStore({
            ...store,
            stories: { ...store.stories, [newStory.id as string]: newStory },
          }),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): Store => {
  const { store } = useContext(StoreContext);
  return store;
};

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

export const useActiveTab = (): ActiveTabType => useContext(ActiveTabContext);

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
