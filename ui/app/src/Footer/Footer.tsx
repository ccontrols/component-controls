/** @jsx jsx */
import { FC } from 'react';
import { Text, Flex, Link, jsx } from 'theme-ui';
import { useConfig } from '@component-controls/blocks';

/**
 * application footer component
 */
export const Footer: FC = () => {
  const config = useConfig();
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
