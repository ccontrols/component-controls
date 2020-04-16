/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Theme } from 'theme-ui';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';
import { StoryStore } from '@component-controls/store';

import {
  ThemeProvider,
  markdownComponents,
} from '@component-controls/components';
import { BlockContextProvider, StoryContextConsumer } from '../context';

export interface PageContainerProps {
  /**
   * story to display in the page
   */
  storyId?: string;
  /**
   * dark/light theme for the page
   */
  dark?: boolean;
  /**
   * components to customize the markdown display.
   */
  components?: MDXProviderComponents;

  /**
   * optional custom theme
   */
  theme?: Theme;

  /**
   * mock store for tests
   */
  mockStore?: StoryStore;
}

/**
 *
 * If the page is an MDX page, will display the MDX components.
 * Otherwise, the page elements are passed as children
 */
export const PageContainer: FC<PageContainerProps> = ({
  children,
  dark,
  storyId,
  mockStore,
  theme,
  components = {},
}) => {
  return storyId ? (
    <ThemeProvider theme={theme} dark={dark}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '4rem 20px',
          bg: 'background',
          color: 'text',
          fontFamily: 'body',
        }}
      >
        <Box sx={{ maxWidth: '1000px', width: '100%' }}>
          <BlockContextProvider storyId={storyId} mockStore={mockStore}>
            <StoryContextConsumer id={storyId}>
              {({ kind }) => {
                const { MDXPage } = kind || {};
                return MDXPage ? (
                  <MDXProvider
                    components={{ ...markdownComponents, ...components }}
                  >
                    <MDXPage />
                  </MDXProvider>
                ) : (
                  children
                );
              }}
            </StoryContextConsumer>
          </BlockContextProvider>
        </Box>
      </Box>
    </ThemeProvider>
  ) : null;
};
