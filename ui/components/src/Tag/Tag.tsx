/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, Box, BoxProps, Theme, Text } from 'theme-ui';
import { getColor, transparentize } from '@theme-ui/color';
import { FC, ReactText } from 'react';
import { get } from '@theme-ui/css';
import { useTheme } from '../ThemeContext';
export interface TagProps {
  /**
   * color for the tag. The full color will be applied to the border and a transparentized color will be used as background
   */
  color?: string;

  /**
   * transparent amount - 0 to 1
   */
  transparentAmount?: number;

  /**
   * borderSize in pixels
   */
  borderSize?: number;

  /**
   * theme variant additional
   */
  variant?: string;
  /**
   * raw string value to be injected. Useful for highlighting searh results
   */
  raw?: string;
}

const defColor = 'white';
/**
 * A container component to display text in a colored box, with a semi-transparent background.
 */
export const Tag: FC<TagProps & Omit<BoxProps, 'variant'>> = ({
  children,
  raw,
  color = defColor,
  borderSize = 2,
  transparentAmount = 0.85,
  variant,
  ...rest
}) => {
  const theme = useTheme() as Theme;
  let resolvedColor = getColor(theme, color);
  if (typeof resolvedColor !== 'string') {
    resolvedColor = defColor;
  }
  return (
    <Box
      as="span"
      variant="tag.default"
      {...rest}
      sx={{
        backgroundColor: transparentize(resolvedColor, transparentAmount),
        border: `${borderSize}px solid ${resolvedColor}`,
        ...get(theme, variant as ReactText),
      }}
    >
      {raw ? (
        <Text dangerouslySetInnerHTML={{ __html: raw }} />
      ) : (
        <Text>{children}</Text>
      )}
    </Box>
  );
};
