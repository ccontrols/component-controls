/** @jsx jsx */
import React, { FC, useContext } from 'react';
import { jsx, Box, BoxProps, Heading } from 'theme-ui';
import { SidebarContext } from './SidebarContext';

export interface SidebarProps {
  /**
   * Title string or any react node
   */
  title?: React.ReactNode;

  /**
   * The width of the side bar in pixels
   */
  width?: number;

  /**
   * min width for sidebar
   */
  minWidth?: number;

  /**
   * Whether the sidebar can be collapsed
   */
  collapsible?: boolean;

  /**
   children content elements to be displayed in Sidebar
   */
  children: React.ReactNode;
}

/**
 * Collapsible side bar component
 */
export const Sidebar: FC<SidebarProps & BoxProps> = ({
  title,
  width = '100%',
  minWidth,
  children,
  ...rest
}) => {
  const toggleContext = useContext(SidebarContext);
  const { collapsed, responsive, setCollapsed } = toggleContext || {};

  return collapsed ? null : (
    <Box
      variant={responsive ? 'sidebar.responsive' : 'sidebar.default'}
      sx={
        responsive
          ? undefined
          : {
              width,
              minWidth,
            }
      }
      {...rest}
    >
      <Box
        variant={
          responsive ? 'sidebar.innerresponsive' : 'sidebar.innerdefault'
        }
        sx={{
          width: responsive ? undefined : width,
        }}
        onClick={() => responsive && setCollapsed(true)}
      >
        <Box variant={'sidebar.headercontainer'}>
          {title && (
            <Box as="header">
              {typeof title === 'string' ? (
                <Heading as="h3" variant={'sidebar.heading'}>
                  {title}
                </Heading>
              ) : (
                title
              )}
            </Box>
          )}
        </Box>
        {children}
      </Box>
    </Box>
  );
};
