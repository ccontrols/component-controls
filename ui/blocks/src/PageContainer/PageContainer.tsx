/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useEffect, forwardRef } from 'react';
import { jsx, Box } from 'theme-ui';
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
   * ref to the page container component
   */
  ref?: React.Ref<HTMLDivElement>;
}

/**
 * Page container component
 * If the page is an MDX page, will display the MDX components.
 * Otherwise, the page elements are passed as children
 */
export const PageContainer: FC<PageContainerProps> = forwardRef(
  ({ children, components = {}, maxWidth }, ref: React.Ref<HTMLDivElement>) => {
    let scrollId: string | undefined;
    try {
      const pageURL =
        (typeof window !== 'undefined' &&
        window.location !== window.parent.location &&
        window.parent.location
          ? window.parent.location.href
          : document.location.href) || '';
      const url = new URL(pageURL);
      scrollId = url.hash ? url.hash.substring(1) : undefined;
    } catch (err) {}

    useEffect(() => {
      if (scrollId) {
        const element = document.getElementById(scrollId);
        if (element) {
          const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset - 60;
          // Introducing a delay to ensure scrolling works when it's a full refresh.
          setTimeout(() => {
            window.scroll({
              top: offsetTop,
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    }, [scrollId]);
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          px: 4,
          py: 4,
          bg: 'background',
          color: 'text',
          fontFamily: 'body',
        }}
      >
        <Box sx={{ maxWidth, width: '100%', position: 'relative' }} ref={ref}>
          <StoryContextConsumer id=".">
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
        </Box>
      </Box>
    );
  },
);
