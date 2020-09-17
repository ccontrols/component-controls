/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Theme, SxProps } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorProps } from '../types';
import { GridContainerProps, GridContainer } from '../GridContainer';

export type ColorSwatchProps = { sx?: SxProps } & ColorProps;

/**
 * Color item displaying the color as a block, as well as hex(string) and rgb values.
 * Inspired from [Alta UI](https://www.oracle.com/webfolder/ux/middleware/alta_web_icon_guide/Alta-Colors/UI-Palette.html).
 */
export const ColorSwatch: FC<ColorSwatchProps> = ({ name, color, sx }) => {
  const { hex, rgba } = colorToStr(color);
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
        <Box>
          RGB:{' '}
          {`${rgba.red}, ${rgba.green}, ${rgba.blue}${
            rgba.alpha !== 1 ? `, ${rgba.alpha}` : ''
          }`}
        </Box>
      </Box>
    </Box>
  );
};

/**
 *
 * palette displayed with ColorSwatch items
 * using a css grid for the dsplay
 */
export const ColorSwatchPalette: FC<Omit<
  GridContainerProps,
  'ColorBlock'
>> = props => <GridContainer ColorBlock={ColorSwatch} {...props} />;
