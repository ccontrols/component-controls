/* eslint-disable react/display-name */
/** @jsx jsx */
import {
  FC,
  useEffect,
  forwardRef,
  Ref,
  ComponentType,
  ReactText,
} from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';
import { get } from '@theme-ui/css';
import { useTheme } from '@component-controls/components';
import { Container } from '../Container';
import { StoryContextConsumer } from '../context';

export interface PageContainerOwnProps {
  /**
   * ref to the page container component
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * theme variant
   */
  variant?: string;

  /**
   * inner wrapper container
   */
  wrapper?: ComponentType | null;
}

export type PageContainerProps = PageContainerOwnProps &
  Omit<BoxProps, 'variant'>;
/**
 * Page container component
 * If the page is an MDX page, will display the MDX components.
 * Otherwise, the page elements are passed as children
 */
export const PageContainer: FC<PageContainerProps> = forwardRef(
  (
    { children, variant, wrapper: Wrapper = Container, ...rest },
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
          }
        }
      } catch (err) {}
    }, []);
    const theme = useTheme();
    return (
      <Box
        variant="pagecontainer"
        sx={get(theme, variant as ReactText)}
        ref={ref}
        {...rest}
      >
        <StoryContextConsumer id=".">
          {({ doc }) => {
            const { MDXPage } = doc || {};
            const node = MDXPage ? <MDXPage /> : children;
            return Wrapper ? <Wrapper>{node}</Wrapper> : node;
          }}
        </StoryContextConsumer>
      </Box>
    );
  },
);
