/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import {
  ThemeProvider,
  ThemeProviderProps,
} from '@component-controls/components';
import {
  SidebarContextProvider,
  LinkContextProvider,
  LinkContextProviderProps,
} from '@component-controls/app-components';
import { BlockContextProvider } from '@component-controls/blocks';
import { LoadingStore } from '@component-controls/loader';
import { loadStoryStore, Store } from '@component-controls/store';
import { App } from '../App';

export type AppContextProps = {
  docId?: string;
  store?: LoadingStore;
  linkClass: LinkContextProviderProps['linkClass'];
} & ThemeProviderProps;

export const AppContext: FC<AppContextProps> = ({
  docId,
  children,
  store,
  linkClass,
  components,
  ...themeProps
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
    <ThemeProvider components={components} {...themeProps}>
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
