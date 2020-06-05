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
import { Footer } from './Footer';

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
      <SEO title={title} />
      <SidebarContextProvider>
        <Flex
          sx={{
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <Header title={title}></Header>
          <Flex sx={{ flexDirection: 'row', flex: 1 }}>
            <BlockContextProvider
              storyId={story}
              docId={docTitle}
              store={storyStore}
            >
              <Sidebar docPath={docTitle} />
              <Page pagesFn={pagesFn} />
            </BlockContextProvider>
          </Flex>
          <Footer />
        </Flex>
      </SidebarContextProvider>
    </ThemeProvider>
  );
};
