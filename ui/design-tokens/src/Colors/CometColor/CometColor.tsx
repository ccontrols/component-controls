/** @jsx jsx */
import { FC } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable, contrastGrade } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying as a row, with color, name sass variable name and AA/AAA tests
 * Design inspired by [Comet](https://comet.discoveryeducation.com/visual-language/color.html).
 */

export const CometColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color, name } : color;
  const { value: colorValue, name: colorName = name, sass } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const contrast = tinycolor.readability(hex, textColor);

  let accessibilityTest;
  const testProps: SxStyleProp = {
    ml: 3,
    width: '40px',
    textAlign: 'center',
    color: 'black',
    fontSize: 1,
  };
  const grade = contrastGrade(contrast);
  switch (grade) {
    case 'AAA':
      accessibilityTest = <div sx={{ ...testProps, bg: 'gray' }}>AAA</div>;
      break;
    case 'AA':
      accessibilityTest = <div sx={{ ...testProps, bg: 'gray' }}>AA</div>;
      break;
    case 'AA':
      accessibilityTest = <div sx={{ ...testProps, bg: '#e6c719' }}>AA18</div>;
      break;
    default:
      accessibilityTest = (
        <div sx={{ ...testProps, bg: '##b42818', color: 'white' }}>DNP</div>
      );
  }
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <CopyContainer value={hex} name={name} sx={{ width: '100%' }}>
        <div
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            fontSize: 1,
            px: 3,
            bg: colorValue,
            color: textColor,
          }}
        >
          <div
            sx={{
              fontWeight: 'bold',
              fontSize: 2,
              width: '30%',
            }}
          >
            {colorName}
          </div>

          <div
            sx={{
              flex: 1,
            }}
          >
            {sass}
          </div>
          <div sx={{ display: 'flex', flexDirection: 'row' }}>
            <div sx={{ textAlign: 'right' }}>{hex.toUpperCase()}</div>
            {accessibilityTest}
          </div>
        </div>
      </CopyContainer>
    </div>
  );
};

/**
 *
 * palette displayed with CometColor items
 * using a css flex display direction column
 */
export const CometColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" {...props}>
    {({ name, value }) => (
      <CometColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
