/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying the color as a row, with sass variable name. Separate visualization (header) for primary color.
 * Design inspired by GitHub's [Primer](https://styleguide.github.com/primer/support/color-system/).
 */

export const PrimerColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, primary, sass } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);

  return (
    <div
      sx={{ display: 'flex', flex: '1', mb: primary ? 2 : 0, color: textColor }}
    >
      <CopyContainer value={hex} name={name} sx={{ width: '100%' }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bg: colorValue,

            height: primary ? 140 : 50,
            justifyContent: primary ? 'space-between' : 'center',
            fontSize: 2,
          }}
        >
          {primary && <div sx={{ px: 3, fontSize: 6 }}>{name}</div>}
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
              {sass}
            </div>
            <div>{hex}</div>
          </div>
        </div>
      </CopyContainer>
    </div>
  );
};

/**
 *
 * palette displayed with PrimerColor items
 * using a css flex display direction column
 */
export const PrimerColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" sx={{ width: 350 }} {...props}>
    {({ name, value }) => (
      <PrimerColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
