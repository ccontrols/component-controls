/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps } from '../../types';
import { GridContainerProps, GridContainer } from '../../components';

/**
 * Color item displaying the color as a block, as well as hex(string) and rgb values.
 * Inspired from [Alta UI](https://www.oracle.com/webfolder/ux/middleware/alta_web_icon_guide/Alta-Colors/UI-Palette.html).
 */
export const AltaColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex, rgba } = colorToStr(colorValue);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minWidth: 180,
        maxWidth: 450,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <div
          sx={{
            bg: colorValue,
            width: 64,
            height: 64,
            border: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
          }}
        />
      </CopyContainer>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 3,
          lineHeight: '16px',
          justifyContent: 'space-between',
          fontSize: 0,
          py: 1,
        }}
      >
        <div
          sx={{
            fontWeight: 'bold',
            borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
            pb: 1,
          }}
        >
          {name || hex}
        </div>
        <div>HEX: {hex}</div>
        <div>
          RGB:{' '}
          {`${rgba.r}, ${rgba.g}, ${rgba.b}${
            rgba.a !== 1 ? `, ${rgba.a}` : ''
          }`}
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with AltaColor items
 * using a css grid for the dsplay
 */
export const AltaColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <AltaColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
