/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { ThemeProvider } from '@component-controls/components';
import {
  SidebarContextProvider,
  LinkContextProvider,
  LinkContextProviderProps,
} from '@component-controls/app-components';
import { BlockContextProvider } from '@component-controls/blocks';
import { LoadingStore } from '@component-controls/loader';
import { loadStoryStore, Store } from '@component-controls/store';
import { App } from '../App';

export interface AppContextProps {
  docId?: string;
  store?: LoadingStore;
  linkClass: LinkContextProviderProps['linkClass'];
}

export const AppContext: FC<AppContextProps> = ({
  docId,
  children,
  store,
  linkClass,
}) => {
  const storyStore = useMemo(
    () =>
      new Store({
        store: loadStoryStore(store),
        updateLocalStorage: false,
      }),
    [store],
  );

  return (
    <ThemeProvider theme={storyStore.config?.theme}>
      <BlockContextProvider docId={docId} store={storyStore}>
        <SidebarContextProvider>
          <LinkContextProvider linkClass={linkClass}>
            <App title={docId}>{children}</App>
          </LinkContextProvider>
        </SidebarContextProvider>
      </BlockContextProvider>
    </ThemeProvider>
  );
};
