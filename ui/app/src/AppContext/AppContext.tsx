/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import queryString from 'query-string';
import { Store, docStoryToId } from '@component-controls/core';
import {
  SidebarContextProvider,
  LinkContextProvider,
  LinkContextProviderProps,
} from '@component-controls/components';
import { BlockContextProvider } from '@component-controls/blocks';
import { App } from '../App';
import { mdxComponents } from './mdxComponents';

export interface AppContextProps {
  docId?: string;
  storyId?: string;
  store: Store;
  linkClass: LinkContextProviderProps['linkClass'];
  activeTab?: string;
}

export const AppContext: FC<AppContextProps> = ({
  docId,
  storyId,
  children,
  store,
  linkClass,
  activeTab,
}) => {
  const query =
    typeof window !== 'undefined'
      ? queryString.parse(window.location.search)
      : undefined;
  const dynStoryId =
    query &&
    docId &&
    storyId &&
    !store.stories[storyId] &&
    typeof query.story === 'string'
      ? docStoryToId(docId, query.story)
      : storyId;
  return (
    <BlockContextProvider
      storyId={dynStoryId}
      docId={docId}
      store={store}
      activeTab={activeTab}
      components={mdxComponents}
    >
      <SidebarContextProvider>
        <LinkContextProvider linkClass={linkClass}>
          <App title={docId}>{children}</App>
        </LinkContextProvider>
      </SidebarContextProvider>
    </BlockContextProvider>
  );
};
