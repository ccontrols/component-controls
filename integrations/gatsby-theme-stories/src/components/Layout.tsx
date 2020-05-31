/** @jsx jsx */
import { FC } from 'react';
import { jsx, Container, Flex } from 'theme-ui';
import { Global } from '@emotion/core';
import {
  ThemeProvider,
  Tabs,
  Tab,
  TabList,
  TabPanel,
} from '@component-controls/components';
import { SidebarContextProvider } from '@component-controls/app-components';
import { PageContainer } from '@component-controls/blocks';
import { Store } from '@component-controls/store';
import { SEO } from './SEO';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { PagesConfig } from './types';

interface LayoutProps {
  title?: string;
  storyStore: Store;
  storyId: string;
  kindPath: string;
  pages: PagesConfig;
}

export const Layout: FC<LayoutProps> = ({
  pages: pagesFn,
  title,
  storyStore,
  storyId,
  kindPath,
}) => {
  const pages = pagesFn ? pagesFn('') : null;
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
          <Sidebar kindPath={kindPath} />
          <Container>
            <Tabs fontSize={16}>
              {pages && pages.length > 1 && (
                <TabList>
                  {pages.map(page => (
                    <Tab key={`tab_${page.key}`}>{page.title}</Tab>
                  ))}
                </TabList>
              )}

              <PageContainer
                store={storyStore}
                storyId={storyId}
                maxWidth={1200}
              >
                {pages &&
                  pages.map(page => (
                    <TabPanel key={`panel_${page.key}`}>
                      {page.render()}
                    </TabPanel>
                  ))}
              </PageContainer>
            </Tabs>
          </Container>
        </Flex>
      </SidebarContextProvider>
    </ThemeProvider>
  );
};
