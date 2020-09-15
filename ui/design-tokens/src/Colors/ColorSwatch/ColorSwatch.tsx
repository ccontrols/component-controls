/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Theme, SxProps } from 'theme-ui';
import { parseToRgb } from 'polished';
import { colorToStr } from '../utils';
import { ColorBlockProps } from '../types';
import { CopyContainer } from '../../CopyContainer';

export type ColorSwatchProps = { sx?: SxProps } & ColorBlockProps;

export const ColorSwatch: FC<ColorSwatchProps> = ({ name, color, sx }) => {
  const colorStr = colorToStr(color);
  const hex = colorStr.startsWith('#') ? colorStr : `#${colorStr}`;
  const rgb = parseToRgb(hex);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '220px' }}>
      <CopyContainer value={hex} name={name}>
        <Box
          sx={{
            bg: color,
            width: 64,
            height: 64,
            border: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
          }}
        />
      </CopyContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 3,
          lineHeight: '16px',
          justifyContent: 'space-between',
          fontSize: 0,
          py: 1,
          ...sx,
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
