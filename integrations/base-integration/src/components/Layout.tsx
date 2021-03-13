import React, { FC } from 'react';
import {
  AppContext,
  AppContextProps,
  DocumentHomePage,
  DocPage,
} from '@component-controls/app';
import { RoutePath } from '@component-controls/routes';
import { store } from '../store';

export type LayoutProps = Omit<RoutePath, 'path'> & {
  Link: AppContextProps['linkClass'];
  Helmet: AppContextProps['Helmet'];
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
  children,
}) => (
  <AppContext
    Helmet={Helmet}
    docId={docId}
    storyId={storyId}
    type={type}
    store={store}
    linkClass={Link}
    activeTab={activeTab}
  >
    {children ||
      (docIndex ? (
        <DocumentHomePage type={type} />
      ) : (
        <DocPage type={type} category={category} />
      ))}
  </AppContext>
);
