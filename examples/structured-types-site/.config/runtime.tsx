/** @jsx jsx */
import { jsx, Box, Text, Theme } from 'theme-ui';
import { RuntimeConfiguration } from '@component-controls/core';
import { Link } from '@component-controls/components';
import { OctofaceIcon } from '@primer/octicons-react';

const config: RuntimeConfiguration = {
  title: 'structured-types',
  description: `api to extract structured type information from typescript types and jsdoc comments.`,
  copyright: null,
  author: null,
  theme: {
    fonts: {
      heading:
        '"Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;',
    },
    tabs: {
      '.react-tabs__tab--selected': {
        borderBottom: (t: Theme): string => `1px solid ${t?.colors?.primary}`,
        color: 'primary',
      },
    },
  },
  toolbar: {
    right: [
      {
        node: (
          <Link href="https://github.com/ccontrols/component-controls/misc/structured-types">
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
  footer: {
    left: [
      {
        node: (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text sx={{ mr: 1 }}>built with</Text>
            <Link href="https://component-controls.com">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                component-controls
              </Box>
            </Link>
          </Box>
        ),
      },
    ],
  },
};

export default config;
