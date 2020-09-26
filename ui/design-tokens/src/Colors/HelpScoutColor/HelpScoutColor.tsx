/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying the color as a row, expanding on hover. Separate visualization (header) for primary color.
 * Design inspired from [HelpScout](https://style.helpscout.com/visual-elements/#color).
 */

export const HelpScoutColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, primary, name: colorName } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);

  return (
    <div sx={{ display: 'flex', flex: '1', width: 250 }}>
      <CopyContainer value={hex} name={name} sxStyle={{ width: '100%' }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bg: colorValue,
            color: textColor,
            height: primary ? 100 : 50,
            justifyContent: primary ? 'space-between' : 'center',
            fontSize: 0,
            borderTopRightRadius: primary ? 6 : 0,
            borderTopLeftRadius: primary ? 6 : 0,
            transition: 'all .2s',
            ':hover': {
              mx: -2,
              borderRadius: 3,
              boxShadow: (t: Theme) => `0 2px 10px 3px ${t.colors?.shadow}`,
            },
          }}
        >
          {primary && (
            <div sx={{ p: 3, fontSize: 1, fontWeight: 'heading' }}>
              {name ? name.toUpperCase() : ''}
            </div>
          )}
          <div
            sx={{
              px: 3,
              display: 'flex',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              sx={{
                mr: 4,
              }}
            >
              {colorName}
            </div>
            <div
              sx={{
                pointerEvents: 'none',
              }}
            >
              {hex}
            </div>
          </div>
        </div>
      </CopyContainer>
    </div>
  );
};

/**
 *
 * palette displayed with HelpScoutColor items
 * using a css flex display direction column
 */
export const HelpScoutColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" sx={{ width: 250 }} {...props}>
    {({ name, value }) => (
      <HelpScoutColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
