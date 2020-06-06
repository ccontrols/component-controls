/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { Global } from '@emotion/core';
import { ThemeProvider } from '@component-controls/components';
import { App } from '@component-controls/app';
import {
  SidebarContextProvider,
  LinkContextProvider,
} from '@component-controls/app-components';
import { BlockContextProvider } from '@component-controls/blocks';
import { Store } from '@component-controls/store';
import { GatsbyLink } from './GatsbyLink';
import { PagesConfig } from './types';

interface LayoutProps {
  title?: string;
  storyStore: Store;
  storyId?: string;
  docTitle: string;
  pages: PagesConfig;
}

export const Layout: FC<LayoutProps> = ({
  pages: pagesFn,
  title,
  storyStore,
  storyId,
  docTitle,
}) => {
  const story = storyId || storyStore?.firstStory;
  return (
    <ThemeProvider>
      <Global
        styles={() => ({
          a: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <BlockContextProvider storyId={story} docId={docTitle} store={storyStore}>
        <SidebarContextProvider>
          <LinkContextProvider linkClass={GatsbyLink}>
            <App title={title} pagesFn={pagesFn} />
          </LinkContextProvider>
        </SidebarContextProvider>
      </BlockContextProvider>
    </ThemeProvider>
  );
};
