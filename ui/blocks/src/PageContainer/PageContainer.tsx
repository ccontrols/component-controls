/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useEffect, forwardRef } from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';
import { StoryContextConsumer } from '../context';

export interface PageContainerProps {
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
export const PageContainer: FC<PageContainerProps &
  Omit<BoxProps, 'sx'>> = forwardRef(
  ({ children, ...rest }, ref: React.Ref<HTMLDivElement>) => {
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
          }
        }
      } catch (err) {}
    }, []);
    return (
      <Box variant="pagecontainer" ref={ref} {...rest}>
        <StoryContextConsumer id=".">
          {({ doc }) => {
            const { MDXPage } = doc || {};
            return MDXPage ? <MDXPage /> : children;
          }}
        </StoryContextConsumer>
      </Box>
    );
  },
);
