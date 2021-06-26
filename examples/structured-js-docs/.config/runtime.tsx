/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { RuntimeConfiguration } from '@component-controls/core';
import { Link } from '@component-controls/components';
import { OctofaceIcon } from '@primer/octicons-react';

const config: RuntimeConfiguration = {
  title: `structured-js-types`,
  description: `api to extract structured type information from typescript types and jsdoc comments.`,
  author: '@component-controls',
  toolbar: {
    right: [
      {
        node: (
          <Link href="https://github.com/ccontrols/component-controls/misc/structured-js-types">
            <Box
              sx={{
                mr: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <OctofaceIcon />
              <Text sx={{ ml: '2px' }}>github</Text>
            </Box>
          </Link>
        ),
      },
    ],
  },
};

export default config;
