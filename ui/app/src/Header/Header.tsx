/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Flex, Text } from 'theme-ui';
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
  const { docsPath, docsLabel, blogsPath, blogsLabel } = config?.options || {};

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
          {Object.keys(storeProvider.getDocs()).length > 0 && (
            <Link href={`/${docsPath}`}>
              <Text sx={{ px: 2 }}>{docsLabel}</Text>
            </Link>
          )}
          {Object.keys(storeProvider.getBlogs()).length > 0 && (
            <Link href={`/${blogsPath}`}>
              <Text sx={{ px: 2 }}>{blogsLabel}</Text>
            </Link>
          )}
        </Flex>
      </Flex>
      {!responsive && <ColorMode />}
    </AppHeader>
  );
};
