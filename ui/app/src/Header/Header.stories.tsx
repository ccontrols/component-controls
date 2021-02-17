/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { OctofaceIcon, HeartFillIcon } from '@primer/octicons-react';
import { Document, Example } from '@component-controls/core';
import { Link } from '@component-controls/components';
import { mockDecorators } from '@component-controls/blocks';
import { Header } from './Header';

export default {
  title: 'Application/Header',
  component: Header,
  decorators: mockDecorators,
  category: 'Application',
} as Document;

export const overview: Example = () => <Header />;

export const customLeft: Example = () => (
  <Header
    toolbar={{
      left: [{ node: 'custom', onClick: () => alert('clicked') }],
    }}
  />
);

export const customRight: Example = () => (
  <Header
    toolbar={{
      right: [
        {
          node: 'github',
          href: 'https://github.com/ccontrols/component-controls',
          'aria-label': 'visit github repo',
        },
      ],
    }}
  />
);

export const customized: Example = () => (
  <Header
    toolbar={{
      left: [{ node: 'About', href: '/about' }],
      right: [
        {
          node: (
            <Link href="https://github.com/ccontrols/component-controls">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <OctofaceIcon sx={{ mr: 2 }} size="medium" />
                github
              </Box>
            </Link>
          ),
        },
        {
          node: (
            <Link
              href="https://github.com/ccontrols/component-controls"
              aria-label="visit github repo"
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  sx={{
                    color: 'red',
                    mr: 1,
                    display: 'flex',
                  }}
                >
                  <HeartFillIcon size="medium" />
                </Text>
                parteon
              </Box>
            </Link>
          ),
        },
      ],
    }}
  />
);
