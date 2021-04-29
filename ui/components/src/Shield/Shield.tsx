/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, Box, BoxProps, Theme } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { getColor } from '@theme-ui/color';
import { mix } from 'polished';
import { FC } from 'react';
import { useTheme } from '../ThemeContext';
export interface ShieldProps {
  /**
   * shield label/text
   */
  label: string;
  /**
   * value displayed with background color
   */
  value?: string | number;

  /**
   * if true, treat the value as a percentage number from 0 to 100
   */
  percent?: boolean;
  /**
   * background color for the value.
   */
  color?: string;
}

const defColor = '#227fc0';
/**
 * A container component to display label/value pairs, where the value is colord. Similar design to github shields.
 */
export const Shield: FC<ShieldProps & Omit<BoxProps, 'variant'>> = ({
  label,
  value,
  percent = false,
  color = defColor,
  ...rest
}) => {
  const theme = useTheme() as Theme;
  const textColor = theme.colors?.text as string;
  const bgColor = theme.colors?.background as string;
  let resolvedValueBgColor = getColor(theme, color);
  const parsedValue: number | undefined =
    percent && value
      ? typeof value === 'number'
        ? value
        : parseFloat(value)
      : undefined;
  if (typeof parsedValue === 'number' && theme.colors) {
    resolvedValueBgColor = mix(
      Math.min(parsedValue / 100, 1),
      theme.colors.status_passed as string,
      theme.colors.status_failed as string,
    );
  } else if (typeof resolvedValueBgColor !== 'string') {
    resolvedValueBgColor = defColor;
  }

  const labelBgColor = 'mutedText';
  let resolvedLabelBgColor = getColor(theme, labelBgColor);
  if (typeof resolvedLabelBgColor !== 'string') {
    resolvedLabelBgColor = '#69768C';
  }
  return (
    <Box {...rest} variant="shield.container">
      <Box
        variant="shield.left"
        sx={{
          bg: resolvedLabelBgColor,
          color: tinycolor
            .mostReadable(resolvedLabelBgColor, [bgColor, textColor])
            .toString('hex'),
        }}
      >
        {label}
      </Box>
      <Box
        variant="shield.right"
        sx={{
          backgroundColor: resolvedValueBgColor,
          color: tinycolor
            .mostReadable(resolvedValueBgColor, [bgColor, textColor])
            .toString('hex'),
        }}
      >
        {typeof parsedValue === 'number' ? `${parsedValue}%` : value}
      </Box>
    </Box>
  );
};
