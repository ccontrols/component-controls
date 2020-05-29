/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Heading } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import { ColorMode, SidebarContext } from '@component-controls/app-components';

interface HeaderProps {
  title?: string;
}
export const Header: FC<HeaderProps> = ({ title }) => {
  const { SidebarToggle } = useContext(SidebarContext);

  return (
    <header sx={{ px: 3 }}>
      <Flex
        sx={{
          py: 3,
          flexDirection: 'row',
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <SidebarToggle />
          <Heading sx={{ pl: 2 }}>{title}</Heading>
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
        >
          <a>links</a>
        </Flex>
        <ColorMode />
      </Flex>
    </header>
  );
};
