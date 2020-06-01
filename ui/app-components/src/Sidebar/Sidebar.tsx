/** @jsx jsx */
import React, { FC, useContext } from 'react';
import { jsx, Box, Flex, BoxProps, Heading, SxStyleProp } from 'theme-ui';
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
}

/**
 * Collapsible side bar component
 */
export const Sidebar: FC<SidebarProps & BoxProps> = ({
  title,
  width = '100%',
  children,
  ...rest
}) => {
  const toggleContext = useContext(SidebarContext);
  const { collapsed, responsive } = toggleContext || {};
  const defaultStyle: SxStyleProp = {
    overflowY: 'auto',
    overflowX: 'hidden',
    width,
    position: 'relative',
  };
  const style: SxStyleProp = !responsive
    ? defaultStyle
    : {
        ...defaultStyle,
        position: 'absolute',
        width: '100%',
        minWidth: '100%',
        zIndex: 9999,
        backgroundColor: 'background',
        top: 0,
        left: 0,
      };
  return collapsed ? null : (
    <Box sx={style} {...rest}>
      <div sx={{ position: 'fixed' }}>
        <Flex
          sx={{
            pb: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
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
      </div>
    </Box>
  );
};
