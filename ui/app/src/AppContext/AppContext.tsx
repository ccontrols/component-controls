/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { PageType, defPageType } from '@component-controls/core';
import { ThemeProvider } from '@component-controls/components';
import {
  SidebarContextProvider,
  LinkContextProvider,
  LinkContextProviderProps,
} from '@component-controls/components';
import { BlockContextProvider } from '@component-controls/blocks';
import { LoadingStore } from '@component-controls/loader';
import { loadStoryStore, Store } from '@component-controls/store';
import { App } from '../App';
import { mdxComponents } from './mdxComponents';

export interface AppContextProps {
  type?: PageType;
  docId?: string;
  store?: LoadingStore;
  linkClass: LinkContextProviderProps['linkClass'];
}

export const AppContext: FC<AppContextProps> = ({
  type = defPageType,
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
  const { pages } = storyStore.config || {};
  const page = pages?.[type];
  const documentId = docId
    ? docId
    : docId === undefined && page?.sidebars
    ? storyStore.getFirstDocument(type)
    : undefined;
  return (
    <ThemeProvider theme={storyStore.config?.theme} components={mdxComponents}>
      <BlockContextProvider docId={documentId} store={storyStore}>
        <SidebarContextProvider>
          <LinkContextProvider linkClass={linkClass}>
            <App title={docId}>{children}</App>
          </LinkContextProvider>
        </SidebarContextProvider>
      </BlockContextProvider>
    </ThemeProvider>
  );
};
