/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, Box, BoxProps } from 'theme-ui';
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
}

/**
 * A copntainer component to display text in a colored box.
 */
export const Tag: FC<TagProps & BoxProps> = ({
  children,
  color,
  transparentAmount = 0.8,
  ...rest
}) => (
  <Box
    as="span"
    variant="tag.default"
    {...rest}
    sx={{
      backgroundColor: transparentize(transparentAmount, color),
      display: 'inline-block',
      border: `1px solid ${color}`,
    }}
  >
    {children}
  </Box>
);
