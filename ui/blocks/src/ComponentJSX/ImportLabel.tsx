/** @jsx jsx */

import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import { JSXNode } from '@component-controls/core';
import { LocalImport } from '../PackageLink';

export const ImportLabel: FC<{ node: JSXNode }> = ({ node }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <LocalImport
        name={node.name as string}
        componentHash={node.componentKey}
      />
      {node.from && (
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}
        >
          <Text sx={{ mx: 1, fontSize: 0, lineHeight: '1.2rem' }}>from</Text>
          <Text
            sx={{
              fontSize: 1,
              lineHeight: '1.2rem',
              whiteSpace: 'nowrap',
            }}
          >{`"${node.from}"`}</Text>
        </Box>
      )}
    </Box>
  );
};
