/** @jsx jsx */
import { FC } from 'react';
import { Text, Flex, Link, jsx } from 'theme-ui';
import { useConfig } from '@component-controls/store';

/**
 * application footer component
 */
export const Footer: FC = () => {
  const config = useConfig();
  const {
    author,
    siteUrl,
    siteTitle,
    siteCopyright = `Copyright \u00A9 ${new Date().getFullYear()}`,
  } = config || {};
  if (siteCopyright || author) {
    return (
      <Flex as="footer" variant="appfooter.container">
        <Text variant="appfooter.copyright">
          {`${siteCopyright}${author ? `by ${author}` : ''}`}
        </Text>
        <Flex variant="appfooter.inner">
          <Link aria-label="visit project home page" href={siteUrl}>
            {siteTitle}
          </Link>
        </Flex>
      </Flex>
    );
  }
  return null;
};
