/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { OctofaceIcon, HeartFillIcon } from '@primer/octicons-react';
import { Link } from '@component-controls/components';
import { ThemeProvider, MockContext } from '@component-controls/blocks';
import { Header } from './Header';

export default {
  title: 'Application/Header',
  component: Header,
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <Header />
    </MockContext>
  </ThemeProvider>
);

export const customLeft = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <Header
        toolbar={{
          left: [{ node: 'custom', onClick: () => alert('clicked') }],
        }}
      />
    </MockContext>
  </ThemeProvider>
);

export const customRight = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
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
    </MockContext>
  </ThemeProvider>
);

export const customized = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
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
    </MockContext>
  </ThemeProvider>
);
