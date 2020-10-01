/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying the color as a row with a color circle and the sass var name and hex color.
 * Design inspired by [GOV.UK Design System](https://design-system.service.gov.uk/styles/colour/).
 */

export const GovUKColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, sass, varName } = colorObj;

  const { hex } = colorToStr(colorValue);
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: 2,
          p: 2,
        }}
      >
        <CopyContainer value={hex} name={name}>
          <div
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bg: colorValue,
              mr: 3,
            }}
          />
        </CopyContainer>
        <div
          sx={{
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div>{sass || varName}</div>
          <div>{hex}</div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with GovUKDS items
 * using a css flex display direction column
 */
export const GovUKColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" {...props}>
    {({ name, value }) => (
      <GovUKColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
