/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import simpleColorConverter from 'simple-color-converter';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { GridContainerProps, GridContainer } from '../../containers';

/**
 * Color item displaying the color as a circle with the variable name, HEX, RGB, CMYK, and PANTONE values below.
 * Design inspired by Biteable's Design System [X](https://x.biteable.com/brand/).
 */
export const XColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName = name } = colorObj;

  const { hex, rgba } = colorToStr(colorValue);
  const { color: cmyk } = new simpleColorConverter({
    rgba,
    to: 'cmyk',
  });
  const { color: pantone } = new simpleColorConverter({
    rgba,
    to: 'pantone',
  });
  return (
    <div
      sx={{
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 120,
        maxWidth: 320,
        fontSize: 2,
      }}
    >
      <CopyContainer value={hex} name={name} sx={{ px: 2, pt: 2 }}>
        <div
          sx={{
            border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
            width: 80,
            height: 80,
            bg: colorValue,
            borderRadius: '50%',
          }}
        />
      </CopyContainer>
      <div sx={{ textAlign: 'center', mt: 1, mb: 2, fontWeight: 'heading' }}>
        {colorName}
      </div>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>HEX</div>
        <div>{hex.split('#')[1].toUpperCase()}</div>
      </div>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>RGB</div>
        <div>
          {`${rgba.r},${rgba.g},${rgba.b}${rgba.a !== 1 ? `,${rgba.a}` : ''}`}
        </div>
      </div>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>CMYK</div>
        <div>{`${cmyk.c},${cmyk.m},${cmyk.y},${cmyk.k}`}</div>
      </div>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>Pantone</div>
        <div>{pantone}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with XColor items
 * using a css grid for the dsplay
 */
export const XColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer width={180} gap={2} {...props}>
    {({ name, value }) => (
      <XColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
