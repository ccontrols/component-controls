/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../../types';
import { GridContainerProps, GridContainer } from '../../components';

/**
 * Color item displaying the color as a block with values for rgb and a palette of lighter and darker colors.
 * Design inspired from [Liquid Design System](https://liquid.emd.design/fundamentals/color/).
 */
export const LiquidColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex, rgba } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const palette = [hex];
  let initial = hex;
  for (let i = 0; i < 3; i += 1) {
    initial = tinycolor(initial)
      .lighten()
      .toHexString();
    if (!palette.includes(initial)) {
      palette.push(initial);
    }
  }
  initial = hex;
  for (let i = 0; i < 3; i += 1) {
    initial = tinycolor(initial)
      .darken()
      .toHexString();
    if (!palette.includes(initial)) {
      palette.unshift(initial);
    }
  }

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bg: 'background',
        minWidth: 120,
        maxWidth: 320,
        border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
        borderRadius: 1,
        boxShadow: (t: Theme) => `0 1px 2px 0 ${t.colors?.shadow}`,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <div
          sx={{
            bg: colorValue,
            position: 'relative',
            ':after': {
              content: '""',
              display: 'block',
              paddingBottom: '60%',
            },
          }}
        >
          <div
            sx={{
              fontSize: 2,
              fontWeight: 'bold',
              position: 'absolute',
              left: 3,
              bottom: 3,
              color: textColor,
            }}
          >
            {hex.toUpperCase()}
          </div>
        </div>
      </CopyContainer>
      <div
        sx={{
          height: 25,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {palette.map(p => (
          <CopyContainer
            key={`liquid_color_${p}`}
            sx={{ flex: 1, bg: p }}
            name={name}
            value={p}
          ></CopyContainer>
        ))}
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          fontSize: 2,
        }}
      >
        <div sx={{ fontSize: 3 }}>{name || hex}</div>
        <div>
          {`RGB (${rgba.r},${rgba.g},${rgba.b}${
            rgba.a !== 1 ? `,${rgba.a}` : ''
          })`}
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with LiquidColor items
 * using a css grid for the dsplay
 */
export const LiquidColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer width={170} gap={3} {...props}>
    {({ name, value }) => (
      <LiquidColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
