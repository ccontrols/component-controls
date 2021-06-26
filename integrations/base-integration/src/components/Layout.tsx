import React, { FC } from 'react';
import {
  AppContext,
  AppContextProps,
  DocumentHomePage,
  DocPage,
} from '@component-controls/app';
import { RoutePath } from '@component-controls/routes';
import { Store } from '@component-controls/core';

export type LayoutProps = Omit<RoutePath, 'path'> & {
  store: Store;
  Link: AppContextProps['linkClass'];
  Helmet: AppContextProps['Helmet'];
  /**
   * user-supplied custom props
   */
  userData?: Record<string, any>;
};

export const Layout: FC<LayoutProps> = ({
  docId,
  storyId,
  activeTab,
  category,
  type,
  docIndex,
  Link,
  Helmet,
  store,
  children,
  userData,
}) => (
  <AppContext
    Helmet={Helmet}
    docId={docId}
    storyId={storyId}
    type={type}
    store={store}
    linkClass={Link}
    activeTab={activeTab}
    userData={userData}
  >
    {children ||
      (docIndex ? (
        <DocumentHomePage type={type} />
      ) : (
        <DocPage type={type} category={category} />
      ))}
  </AppContext>
);
