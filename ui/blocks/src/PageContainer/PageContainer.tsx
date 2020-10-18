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
import { useCurrentDocument } from '@component-controls/store';
import { Container } from '../Container/Container';
import { getURL } from '../utils/url';

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
      const parseURLHash = () => {
        try {
          const url = getURL();
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
      };
      parseURLHash();
      if (typeof window !== 'undefined' && window) {
        window.addEventListener('hashchange', parseURLHash, false);
      }
      return () => {
        if (typeof window !== 'undefined' && window) {
          window.removeEventListener('hashchange', parseURLHash, false);
        }
      };
    }, []);
    const theme = useTheme();
    const doc = useCurrentDocument();
    const { MDXPage } = doc || {};
    const node = MDXPage ? <MDXPage /> : children;
    return (
      <Box
        variant="pagecontainer"
        sx={get(theme, variant as ReactText)}
        ref={ref}
        {...rest}
      >
        {Wrapper ? <Wrapper>{node}</Wrapper> : node}
      </Box>
    );
  },
);
