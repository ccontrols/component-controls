/** @jsx jsx */
import React, { FC, useContext } from 'react';
import {
  jsx,
  Box,
  Flex,
  BoxProps,
  Heading,
  SxStyleProp,
  Theme,
} from 'theme-ui';
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
  const defaultStyle: SxStyleProp = {
    overflowY: 'auto',
    overflowX: 'hidden',
    width,
    minWidth,
    position: 'relative',
  };
  const style: SxStyleProp = !responsive
    ? defaultStyle
    : {
        ...defaultStyle,
        position: 'fixed',
        width: '100%',
        minWidth: '100%',
        zIndex: 9999,
        backgroundColor: 'background',
        top: 0,
        left: 0,
        bottom: 0,
      };
  return collapsed ? null : (
    <Box sx={style} {...rest}>
      <div
        sx={{
          position: !responsive ? 'fixed' : undefined,
          height: '100%',
          width: 'inherit',
          overflowY: 'auto',
          a: {
            '&.active': {
              borderLeft: (t: Theme) => `4px solid ${t?.colors?.accent}`,
            },
            ':hover': {
              backgroundColor: 'shadow',
            },
          },
        }}
        onClick={() => responsive && setCollapsed(true)}
      >
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
