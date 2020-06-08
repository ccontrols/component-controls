/** @jsx jsx */
import { FC, useContext } from 'react';
import { Text, Flex, Link, jsx } from 'theme-ui';
import { BlockContext } from '@component-controls/blocks';

export const Footer: FC = () => {
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { author, siteUrl, siteTitle } = config?.options || {};

  return (
    <Flex
      as="footer"
      variant="footer"
      sx={{
        py: 3,
        px: '320px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text>
        Copyright &copy; {new Date().getFullYear()} by {author}
      </Text>
      <Flex
        sx={{
          alignItems: `center`,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link aria-label="visit project home page" href={siteUrl}>
          {siteTitle}
        </Link>
      </Flex>
    </Flex>
  );
};
