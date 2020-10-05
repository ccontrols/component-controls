/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { GridContainerProps, GridContainer } from '../../containers';

/**
 * Color item displaying the color as a circle with the HEX value and variable name below.
 * Design inspired by [Seek OSS](https://seek-oss.github.io/seek-style-guide/palette).
 */
export const SeekColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName = name } = colorObj;

  const { hex } = colorToStr(colorValue);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 320,
      }}
    >
      <CopyContainer value={hex} name={name} sx={{ px: 2, pt: 2 }}>
        <div
          sx={{
            width: 100,
            height: 100,
            bg: colorValue,
            borderRadius: '50%',
          }}
        />
      </CopyContainer>

      <div sx={{ fontSize: 2 }}>
        <div sx={{ pt: 1, textAlign: 'center', color: 'mutedText' }}>{hex}</div>
        <div sx={{ textAlign: 'center' }}>{colorName}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with SeekColor items
 * using a css grid for the dsplay
 */
export const SeekColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer width={150} gap={2} {...props}>
    {({ name, value }) => (
      <SeekColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
