/** @jsx jsx */
import { FC, useContext } from 'react';
import { Text, Flex, Link, jsx } from 'theme-ui';
import { BlockContext } from '@component-controls/blocks';

export const Footer: FC = () => {
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { author, siteUrl, siteDescription } = config?.options || {};

  return (
    <Flex
      as="footer"
      variant="footer"
      sx={{ flexDirection: 'column', alignItems: 'center' }}
    >
      <Text>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </Text>
      <Flex
        sx={{
          alignItems: `center`,
          p: 1,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link aria-label={siteDescription} href={siteUrl}>
          {author}
        </Link>
      </Flex>
    </Flex>
  );
};
