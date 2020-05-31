/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import {
  ColorMode,
  SidebarContext,
  Header as AppHeader,
} from '@component-controls/app-components';

interface HeaderProps {
  title?: string;
}
export const Header: FC<HeaderProps> = ({ children }) => {
  const { SidebarToggle, collapsed } = useContext(SidebarContext);

  return (
    <AppHeader position="sticky">
      <Flex
        sx={{
          py: 3,
          flexDirection: 'row',
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
          {collapsed && <SidebarToggle />}
          {children}
        </Flex>

        <Flex
          sx={{
            boxSizing: `border-box`,
            variant: `dividers.bottom`,
            justifyContent: `space-between`,
            color: `secondary`,
            a: { color: `secondary`, ':hover': { color: `accent` } },
            flexFlow: `wrap`,
          }}
        ></Flex>
        <ColorMode />
      </Flex>
    </AppHeader>
  );
};
