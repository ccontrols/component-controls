/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, BoxProps, Theme } from 'theme-ui';

export interface HeaderProps {
  /** Position property for the header element */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';

  /** z-index for the header */
  zIndex?: number;
}

/**
 * A page header component
 */
export const Header: FC<HeaderProps & BoxProps> = ({
  children,
  zIndex = 10,
  position = 'sticky',
  ...rest
}) => (
  <Box
    as="header"
    sx={{
      ...(position === 'fixed' ||
      position === 'absolute' ||
      position === 'sticky'
        ? {
            top: 0,
            left: 'auto',
            right: 0,
            zIndex,
          }
        : undefined),
      position,
      backgroundColor: 'background',
      px: 2,
      mb: 1,
      justifyItems: 'between',
      alignItems: 'center',
      boxShadow: (t: Theme) => `0 1px 3px 1px ${t.colors?.shadow}`,
    }}
    {...rest}
  >
    {children}
  </Box>
);
