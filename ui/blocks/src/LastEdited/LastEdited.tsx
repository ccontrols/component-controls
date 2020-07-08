/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { Box, Text } from 'theme-ui';
import { dateToLocalString } from '@component-controls/core';
import { useStoryContext } from '../context';

/**
 * Display the date last modified for the current document.
 */
export const LastEdited: FC = () => {
  const { doc } = useStoryContext({ id: '.' });
  return doc?.dateModified ? (
    <Box variant="lastedited.container">
      <Box variant="lastedited.inner">
        <Text variant="lastedited.text">
          {`updated: ${dateToLocalString(doc.dateModified)}`}
        </Text>
      </Box>
    </Box>
  ) : null;
};
