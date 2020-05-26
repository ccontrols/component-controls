/** @jsx jsx */
import { FC } from 'react';
import { jsx, useColorMode, Heading } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import { ColorMode } from './ColorMode';

interface HeaderProps {
  title?: string;
}
export const Header: FC<HeaderProps> = ({ title }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <header sx={{ px: 3, py: 1 }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Heading>{title}</Heading>
        <ColorMode isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ':hover': { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        links
      </div>
    </header>
  );
};
