/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, Container } from 'theme-ui';
import { Global } from '@emotion/core';
import { ThemeProvider } from '@component-controls/components';
import { PageContainer, store } from '@component-controls/blocks';
import { Store } from '@component-controls/store';
import { SEO } from './SEO';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const storyStore = React.useMemo(
    () => new Store({ store, updateLocalStorage: false }),
    [],
  );

  return (
    <ThemeProvider>
      <Global
        styles={() => ({
          '*': {
            boxSizing: `inherit`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <SEO title={title} />
      <div
        sx={{
          display: `grid`,
          gridTemplateColumns: [`200px 1fr`, `200px 1fr`, `250px 1fr`],
          minHeight: `100vh`,
        }}
      >
        <Sidebar />
        <Container>
          <Header title={title} />
          <PageContainer store={storyStore} storyId="id-of-story">
            {children}
          </PageContainer>
        </Container>
      </div>
    </ThemeProvider>
  );
};
