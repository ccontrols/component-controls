/** @jsx jsx */
import React, { FC, useContext, ReactText } from 'react';
import { jsx, Box, BoxProps, Heading } from 'theme-ui';
import { get } from '@theme-ui/css';
import { useTheme } from '../ThemeContext';

import { SidebarContext } from './SidebarContext';

export interface SidebarProps {
  /**
   * Title string or any react node
   */
  title?: React.ReactNode;

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
  children,
  variant,
  ...rest
}) => {
  const toggleContext = useContext(SidebarContext);
  const { collapsed, responsive, setCollapsed } = toggleContext || {};
  const theme = useTheme();
  return collapsed ? null : (
    <Box
      variant={responsive ? 'sidebar.responsive' : 'sidebar.default'}
      sx={get(theme, variant as ReactText)}
      onClick={() => responsive && setCollapsed(true)}
      {...rest}
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
      <Box variant="sidebar.inner">{children}</Box>
    </Box>
  );
};
