/** @jsx jsx */
import { FC } from 'react';
import { jsx, Flex } from 'theme-ui';
import { Global } from '@emotion/core';
import { ThemeProvider } from '@component-controls/components';
import { Page } from '@component-controls/app';
import { SidebarContextProvider } from '@component-controls/app-components';
import { BlockContextProvider } from '@component-controls/blocks';
import { Store } from '@component-controls/store';
import { SEO } from './SEO';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { PagesConfig } from './types';

interface LayoutProps {
  title?: string;
  storyStore: Store;
  storyId?: string;
  docPath: string;
  pages: PagesConfig;
}

export const Layout: FC<LayoutProps> = ({
  pages: pagesFn,
  title,
  storyStore,
  storyId,
  docPath,
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
      <SEO title={title} />
      <SidebarContextProvider>
        <Header title={title}></Header>
        <Flex sx={{ flexDirection: 'row' }}>
          <BlockContextProvider storyId={story} store={storyStore}>
            <Sidebar docPath={docPath} />
            <Page pagesFn={pagesFn} />
          </BlockContextProvider>
        </Flex>
      </SidebarContextProvider>
    </ThemeProvider>
  );
};
