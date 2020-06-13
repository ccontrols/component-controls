/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import { PageType, PageConfiguration } from '@component-controls/specification';

import {
  Link,
  ColorMode,
  SidebarContext,
  Header as AppHeader,
} from '@component-controls/app-components';
import { BlockContext } from '@component-controls/blocks';

interface HeaderProps {
  title?: string;
}
export const Header: FC<HeaderProps> = () => {
  const { SidebarToggle, collapsed, responsive } = useContext(SidebarContext);
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { pages } = config || {};
  return (
    <AppHeader>
      <Box variant="appheader.container">
        {collapsed && <SidebarToggle />}
        <Box variant="appheader.inner">
          <Link href="/">
            <Text variant="appheader.linktext">Home</Text>
          </Link>
          {pages
            ? Object.keys(pages).map(type => {
                const pageType = type as PageType;
                if (
                  pages[pageType].hasHomePage &&
                  Object.keys(storeProvider.getPageList(pageType)).length > 0
                ) {
                  const page: PageConfiguration = pages[pageType];
                  return (
                    <Link
                      key={`link_${page.basePath}`}
                      href={`/${page.basePath}`}
                    >
                      <Text variant="appheader.linktext">{page.label}</Text>
                    </Link>
                  );
                }
                return null;
              })
            : null}
        </Box>
      </Box>
      {!responsive && <ColorMode />}
    </AppHeader>
  );
};
