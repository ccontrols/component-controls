/** @jsx jsx */
import React, { FC, useContext } from 'react';
import { jsx, Box, Flex, BoxProps, Heading } from 'theme-ui';
import { useBreakpointIndex } from '@theme-ui/match-media';
import { Collapsible, CollapsibleProps } from '@component-controls/components';

import { SidebarContext } from './SidebarContext';

export interface SidebarProps {
  /**
   * Title string or any react node
   */
  title?: React.ReactNode;

  /** The width of the side bar in pixels */
  width?: number;

  /**
   * Whether the sidebar can be collapsed
   */
  collapsible?: boolean;

  /**
   children content elements to be displayed in Sidebar
   */
  children: React.ReactNode;

  /**
   * collapsible animate height props
   */
  animate?: Omit<CollapsibleProps, 'isOpen' | 'children'>;
}

/**
 * Collapsible side bar component
 */
export const Sidebar: FC<SidebarProps & BoxProps> = ({
  title,
  width,
  children,
  animate,
  ...rest
}) => {
  const toggleContext = useContext(SidebarContext);
  const { collapsed, collapsible = true } = toggleContext || {};
  const size: number = useBreakpointIndex();
  const isCollapsed =
    (collapsible && size <= 1 && collapsed === undefined) || collapsed === true;
  return (
    <Collapsible
      css={{ display: 'flex', alignItems: 'stretch' }}
      isOpen={!isCollapsed}
      easing="ease-in-out"
      {...animate}
    >
      <Box
        sx={{ overflowY: 'auto', height: '100%', overflowX: 'hidden', width }}
        {...rest}
      >
        <Flex sx={{ pb: 1, flexDirection: 'row', alignItems: 'center' }}>
          {title && (
            <Box as="header">
              {typeof title === 'string' ? (
                <Heading as="h3" sx={{ pl: 2 }}>
                  {title}
                </Heading>
              ) : (
                title
              )}
            </Box>
          )}
        </Flex>

        {children}
      </Box>
    </Collapsible>
  );
};
