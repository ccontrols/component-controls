/** @jsx jsx */
import { FC, useContext } from 'react';
import { Text, Flex, Link, jsx } from 'theme-ui';
import { BlockContext } from '@component-controls/blocks';

/**
 * application footer component
 */
export const Footer: FC = () => {
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { author, siteUrl, siteTitle } = config || {};

  return (
    <Flex as="footer" variant="appfooter.container">
      <Text variant="appfooter.copyright">
        Copyright &copy; {new Date().getFullYear()} by {author}
      </Text>
      <Flex variant="appfooter.inner">
        <Link aria-label="visit project home page" href={siteUrl}>
          {siteTitle}
        </Link>
      </Flex>
    </Flex>
  );
};
