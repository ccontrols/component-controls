/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Flex, Text } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';
import {
  ColorMode,
  SidebarContext,
  Header as AppHeader,
} from '@component-controls/app-components';

interface HeaderProps {
  title?: string;
}
export const Header: FC<HeaderProps> = () => {
  const { SidebarToggle, collapsed, responsive } = useContext(SidebarContext);

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
          <GatsbyLink to="/">
            <Text sx={{ px: 2 }}>Home</Text>
          </GatsbyLink>
          <GatsbyLink to="/docs/">
            <Text sx={{ px: 2 }}>Docs</Text>
          </GatsbyLink>
        </Flex>
      </Flex>
      {!responsive && <ColorMode />}
    </AppHeader>
  );
};
