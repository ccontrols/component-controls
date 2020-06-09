/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Flex, Text } from 'theme-ui';
import { PageType } from '@component-controls/specification';

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
  const { pages = {} } = config || {};
  return (
    <AppHeader position="sticky">
      <Flex
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          color: `secondary`,
          a: {
            color: `secondary`,
            ':hover': { color: `accent` },
            fontWeight: '700',
          },
        }}
      >
        {collapsed && <SidebarToggle />}
        <Flex
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            py: 3,
          }}
        >
          <Link href="/">
            <Text sx={{ px: 2 }}>Home</Text>
          </Link>
          {Object.keys(pages).map(type => {
            const pageType = type as PageType;
            if (Object.keys(storeProvider.getPageList(pageType)).length > 0) {
              const page = pages[pageType];
              return (
                <Link key={`link_${page.basePath}`} href={`/${page.basePath}`}>
                  <Text sx={{ px: 2 }}>{page.label}</Text>
                </Link>
              );
            }
            return null;
          })}
        </Flex>
      </Flex>
      {!responsive && <ColorMode />}
    </AppHeader>
  );
};
