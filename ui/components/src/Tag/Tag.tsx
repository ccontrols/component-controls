/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, Box, BoxProps, Text } from 'theme-ui';
import { FC, ReactText } from 'react';
import { transparentize } from 'polished';
import { get } from '@theme-ui/css';
import { useTheme } from '../ThemeContext';
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
   * theme variant additional
   */
  variant?: string;
}

/**
 * A copntainer component to display text in a colored box.
 */
export const Tag: FC<TagProps & Omit<BoxProps, 'variant'>> = ({
  children,
  color,
  transparentAmount = 0.8,
  variant,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Box
      as="span"
      variant="tag.default"
      {...rest}
      sx={{
        backgroundColor: transparentize(transparentAmount, color),
        border: `1px solid ${color}`,
        ...get(theme, variant as ReactText),
      }}
    >
      <Text>{children}</Text>
    </Box>
  );
};
