/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Theme } from 'theme-ui';
import { parseToRgb } from 'polished';

export interface ColorBlockProps {
  name?: string;
  color: string;
}

export const ColorBlock: FC<ColorBlockProps> = ({ name, color }) => {
  const hex = color;
  const rgb = parseToRgb(color);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '220px' }}>
      <Box sx={{ bg: color, width: 64, height: 64 }}></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 2,
          lineHeight: '16px',
          justifyContent: 'space-between',
          fontSize: 0,
        }}
      >
        <Box
          sx={{
            fontWeight: 'bold',
            borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
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
