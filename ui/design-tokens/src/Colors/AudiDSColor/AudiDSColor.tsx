/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import simpleColorConverter from 'simple-color-converter';
import { colorToStr } from '../utils';
import { ColorBlockProps } from '../../types';
import { GridContainerProps, GridContainer } from '../../components';

/**
 * Color item displaying the color as a color block and the values for RGB, RML, CMYK and Pantone.
 * Design inspired by [Audi Design System](https://www.audi.com/ci/en/intro/basics/colours.html).
 */
export const AudiDSColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex, rgba } = colorToStr(colorValue);
  const { color: cmyk } = new simpleColorConverter({
    rgba,
    to: 'cmyk',
  });
  const { color: ral } = new simpleColorConverter({
    rgba,
    to: 'ral',
  });
  const { color: pantone } = new simpleColorConverter({
    rgba,
    to: 'pantone',
  });
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 180,
        maxWidth: 450,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <div
          sx={{
            bg: colorValue,
            ':after': {
              content: '""',
              display: 'block',
              paddingBottom: '100%',
            },
          }}
        />
      </CopyContainer>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '16px',
          bg: 'muted',
          p: 3,
          fontSize: 2,
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div sx={{ pt: 1, pb: 2, fontWeight: 'bold' }}>{name || hex}</div>
        </div>
        <div sx={{ lineHeight: 1.5 }}>
          <div>
            {`RGB: ${rgba.r}/${rgba.g}/${rgba.b}${
              rgba.a !== 1 ? `/${rgba.a}` : ''
            }`}
          </div>
          <div>{`HEX: ${hex}`}</div>
          <div>{`CMYK: ${cmyk.c}/${cmyk.m}/${cmyk.y}/${cmyk.k}`}</div>
          <div sx={{ mb: 1 }}>{`${pantone ? `Pantone ${pantone}` : '--'}`}</div>
          <div>{`RAL: ${ral.ral}`}</div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with AudiDSColor items
 * using a css grid for the dsplay
 */
export const AudiDSColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <AudiDSColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
