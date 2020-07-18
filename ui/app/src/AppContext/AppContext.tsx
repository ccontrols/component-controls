/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { DocType, defDocType } from '@component-controls/core';
import { ThemeProvider } from '@component-controls/components';
import {
  SidebarContextProvider,
  LinkContextProvider,
  LinkContextProviderProps,
} from '@component-controls/components';
import { BlockContextProvider } from '@component-controls/blocks';
import { StoryStore } from '@component-controls/store';
import { App } from '../App';
import { mdxComponents } from './mdxComponents';

export interface AppContextProps {
  type?: DocType;
  docId?: string;
  storyId?: string;
  store: StoryStore;
  linkClass: LinkContextProviderProps['linkClass'];
}

export const AppContext: FC<AppContextProps> = ({
  type = defDocType,
  docId,
  storyId,
  children,
  store,
  linkClass,
}) => {
  const { pages } = store.config || {};
  const page = pages?.[type];
  const documentId = docId
    ? docId
    : !docId && page?.layout?.navSidebar
    ? store.getFirstDocument(type)
    : undefined;
  return (
    <ThemeProvider theme={store.config?.theme} components={mdxComponents}>
      <BlockContextProvider storyId={storyId} docId={documentId} store={store}>
        <SidebarContextProvider>
          <LinkContextProvider linkClass={linkClass}>
            <App title={docId}>{children}</App>
          </LinkContextProvider>
        </SidebarContextProvider>
      </BlockContextProvider>
    </ThemeProvider>
  );
};
