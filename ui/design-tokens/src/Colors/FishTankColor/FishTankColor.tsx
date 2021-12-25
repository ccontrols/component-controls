/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../containers';

/**
 * Color item displaying the color as a row with the sass var name and hex color.
 * Design inspired by Blooomberg BNA's [FishTank](https://fishtank.bna.com/colors).
 */

export const FishTankColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, sass } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <CopyContainer value={hex} name={name} sx={{ width: '100%' }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            bg: colorValue,
            color: textColor,
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 1,
            transition: 'all .2s',
            px: 3,
          }}
        >
          <div>{sass}</div>
          <div
            sx={{
              fontSize: 2,
            }}
          >
            {hex.toUpperCase()}
          </div>
        </div>
      </CopyContainer>
    </div>
  );
};

/**
 *
 * palette displayed with FishTankColor items
 * using a css flex display direction column
 */
export const FishTankColorPalette: FC<
  Omit<FlexContainerProps, 'children' | 'direction'>
> = props => (
  <FlexContainer
    direction="column"
    sx={{
      boxShadow: (t: Theme) => `0 2px 10px 3px ${t.colors?.shadow}`,
    }}
    {...props}
  >
    {({ name, value }) => (
      <FishTankColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
