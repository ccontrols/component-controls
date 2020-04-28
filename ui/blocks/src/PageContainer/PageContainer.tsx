/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Theme } from 'theme-ui';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';
import { StoryStore } from '@component-controls/store';
import { store } from '@component-controls/store/live_store';

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
   * global options passed from container
   * those are global parameters as well as decorators
   */
  options?: any;

  /**
   * components to customize the markdown display.
   */
  components?: MDXProviderComponents;

  /**
   * optional custom theme
   */
  theme?: Theme;

  /**
   * store object
   */
  store?: StoryStore;
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
  store: mockStore,
  theme,
  options,
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
          <BlockContextProvider
            storyId={storyId}
            store={mockStore || store}
            options={options}
          >
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
