/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useEffect, forwardRef } from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';

import { markdownComponents } from '@component-controls/components';
import { StoryContextConsumer } from '../context';

export interface PageContainerProps {
  /**
   * components to customize the markdown display.
   */
  components?: MDXProviderComponents;

  /**
   * limit the max width of the page
   */
  maxWidth?: number | string;

  /**
   * container padding
   */
  padding?: number;

  /**
   * ref to the page container component
   */
  ref?: React.Ref<HTMLDivElement>;
}

/**
 * Page container component
 * If the page is an MDX page, will display the MDX components.
 * Otherwise, the page elements are passed as children
 */
export const PageContainer: FC<PageContainerProps & BoxProps> = forwardRef(
  (
    { children, components = {}, maxWidth, padding = 4, ...rest },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    useEffect(() => {
      try {
        const pageURL =
          (typeof window !== 'undefined' &&
          window.location !== window.parent.location &&
          window.parent.location
            ? window.parent.location.href
            : document.location.href) || '';
        const url = new URL(pageURL);
        const scrollId = url.hash ? url.hash.substring(1) : undefined;
        if (scrollId) {
          const element = document.getElementById(scrollId);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);

            /*
            const offsetTop =
              element.getBoundingClientRect().top + window.pageYOffset - 30;
            // Introducing a delay to ensure scrolling works when it's a full refresh.

            setTimeout(() => {
              window.scroll({
                top: offsetTop,
                behavior: 'smooth',
              });
            }, 100);
            */
          }
        }
      } catch (err) {}
    }, []);
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bg: 'background',
          color: 'text',
          fontFamily: 'body',
          width: '100%',
        }}
        {...rest}
      >
        <Box
          sx={{ maxWidth, width: '100%', p: padding, position: 'relative' }}
          ref={ref}
        >
          <StoryContextConsumer id=".">
            {({ doc }) => {
              const { MDXPage } = doc || {};
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
        </Box>
      </Box>
    );
  },
);
