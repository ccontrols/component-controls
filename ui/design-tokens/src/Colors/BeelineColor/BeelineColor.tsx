/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import simpleColorConverter from 'simple-color-converter';
import { colorToStr } from '../utils';
import { ColorBlockProps } from '../../types';
import { GridContainerProps, GridContainer } from '../../components';

/**
 * Color item displaying the color as a block with values for rgb and Pantone colors.
 * Design inspired from [Beeline Design System](http://beelinedesignsystem.com/color-palette/).
 */
export const BeelineColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex, rgba } = colorToStr(colorValue);
  const { color: pantone } = new simpleColorConverter({
    rgba,
    to: 'pantone',
  });
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
      <CopyContainer value={hex} name={name} sx={{ px: 2, pt: 2 }}>
        <div
          sx={{
            bg: colorValue,
            ':after': {
              content: '""',
              display: 'block',
              paddingBottom: '60%',
            },
          }}
        />
      </CopyContainer>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          fontSize: 2,
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div sx={{ pb: 2, fontSize: 3 }}>{name || hex}</div>
        </div>
        <div sx={{ fontSize: 0 }}>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div sx={{ fontWeight: 'bold', mr: 1 }}>HEX:</div>
            <div>{hex}:</div>
          </div>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div sx={{ fontWeight: 'bold', mr: 1 }}>RGB:</div>
            <div>
              {`rgb(${rgba.r},${rgba.g},${rgba.b}${
                rgba.a !== 1 ? `,${rgba.a}` : ''
              })`}
              :
            </div>
          </div>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div sx={{ fontWeight: 'bold', mr: 1 }}>Pantone:</div>
            <div>{pantone || '--'}:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with BeelineColor items
 * using a css grid for the dsplay
 */
export const BeelineColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer width={170} gap={3} {...props}>
    {({ name, value }) => (
      <BeelineColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
