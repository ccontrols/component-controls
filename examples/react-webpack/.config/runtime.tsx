/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { RuntimeConfiguration } from '@component-controls/core';
import { Link } from '@component-controls/components';
import { OctofaceIcon } from '@primer/octicons-react';

const categories = [
  'ESM',
  'MDX',
  'Components',
  'Blocks',
  'Design Tokens',
  'Plugins',
  'Controls',
  'Editors',
  'Application',
];

const config: RuntimeConfiguration = {
  analytics: 'UA-172446254-1',
  title: `Component controls`,
  description: `A next-generation tool to create blazing-fast documentation sites`,
  language: `en`,
  author: `@component-controls`,
  theme: {
    colors: {
      // primary: 'pink',
    },
  },
  pages: {
    story: {
      label: 'API',
    },
    tutorial: {
      label: 'Tutorial',
      topMenu: true,
      navSidebar: true,
      contextSidebar: true,
    },
    showcase: {
      label: 'Showcase',
      topMenu: true,
    },
  },
  storySort: (a, b) => {
    const aDoc = a.split('/')[0];
    const aIndex = categories.findIndex(c => c === aDoc);
    const bDoc = b.split('/')[0];
    const bIndex = categories.findIndex(c => c === bDoc);
    return aIndex - bIndex;
  },
  toolbar: {
    right: [
      {
        node: (
          <Link href="https://twitter.com/atanasster">
            <Box
              sx={{
                mr: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <svg
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                sx={{ pt: '1px' }}
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
              </svg>
              <Text sx={{ ml: '2px' }}>twitter</Text>
            </Box>
          </Link>
        ),
      },
      {
        node: (
          <Link href="https://github.com/ccontrols/component-controls">
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
