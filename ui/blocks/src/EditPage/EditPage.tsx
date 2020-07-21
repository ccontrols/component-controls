/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { Box, Text } from 'theme-ui';
import { MarkGithubIcon } from '@primer/octicons-react';
import { ExternalLink } from '@component-controls/components';
import { useDocument } from '../context';

/**
 * Display a Edit this page link to the page source repository.
 * In order for this to work, you need to set up the `repository` field in `package.json`.
 */
export const EditPage: FC = () => {
  const { package: docPackage } = useDocument() || {};
  return docPackage && docPackage.repository && docPackage.repository.browse ? (
    <Box variant="editpage.container">
      <ExternalLink
        href={docPackage.repository.browse}
        aria-label="edit this page"
      >
        <Box variant="editpage.inner">
          <MarkGithubIcon />
          <Text variant="editpage.text">Edit this page</Text>
        </Box>
      </ExternalLink>
    </Box>
  ) : null;
};
