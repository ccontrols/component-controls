/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, SxStyleProp, Box } from 'theme-ui';
import { FC } from 'react';
import { transparentize } from 'polished';

export interface TagProps {
  /**
   * color for the tag. The full color will be applied to the border and a transparentized color will be used as background
   */
  color: string;

  /**
   * transparent amount - 0 to 1
   */
  transparentAmount?: number;

  /**
   * theme-ui styling object for the container
   */
  sxStyle?: SxStyleProp;
}

/**
 * A copntainer component to display text in a colored box.
 */
export const Tag: FC<TagProps> = ({
  children,
  color,
  transparentAmount = 0.8,
  sxStyle,
  ...rest
}) => (
  <Box
    as="span"
    {...rest}
    sx={{
      display: 'inline-block',
      backgroundColor: transparentize(transparentAmount, color),
      paddingLeft: 1,
      paddingRight: 1,
      border: `1px solid ${color}`,
      ...sxStyle,
    }}
  >
    {children}
  </Box>
);
