/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Theme } from 'theme-ui';
import { parseToRgb, rgbToColorString } from 'polished';
import { ColorBlockProps } from '../types';

export const ColorSwatch: FC<ColorBlockProps> = ({ name, color }) => {
  const colorStr = color.toLowerCase().startsWith('rgb')
    ? rgbToColorString(parseToRgb(color))
    : color;
  const hex = colorStr.startsWith('#') ? colorStr : `#${colorStr}`;
  const rgb = parseToRgb(hex);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '220px' }}>
      <Box
        sx={{
          bg: color,
          width: 64,
          height: 64,
          border: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 2,
          lineHeight: '16px',
          justifyContent: 'space-between',
          fontSize: 0,
          py: 1,
        }}
      >
        <Box
          sx={{
            fontWeight: 'bold',
            borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
            pb: 1,
          }}
        >
          {name || hex}
        </Box>
        <Box>HEX: {hex}</Box>
        <Box>RGB: {`${rgb.red},${rgb.green},${rgb.blue}`}</Box>
      </Box>
    </Box>
  );
};
