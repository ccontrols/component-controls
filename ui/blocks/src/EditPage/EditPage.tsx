/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { Box, Text } from 'theme-ui';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import { ExternalLink } from '@component-controls/components';
import { useStoryContext } from '../context';

/**
 * Display a Edit this page link at the top of the page.
 * In order for this to work, you need to set up the `repository` field in `package.json`.
 */
export const EditPage: FC = () => {
  const { kindPackage } = useStoryContext({ id: '.' });
  return kindPackage &&
    kindPackage.repository &&
    kindPackage.repository.browse ? (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        p: 2,
      }}
    >
      <ExternalLink
        href={kindPackage.repository.browse}
        aria-label="edit this page"
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Octicon icon={MarkGithub} />
          <Text
            sx={{
              pl: 2,
            }}
          >
            Edit this page
          </Text>
        </Box>
      </ExternalLink>
    </Box>
  ) : null;
};
