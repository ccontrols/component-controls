/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable, contrastGrade } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying as a row, with a color block, name, hex value and AA/AAA tests for text and backgorund.
 * Design inspired by Firefox's [Photon Design System](https://design.firefox.com/photon/visuals/color.html).
 */

export const PhotonColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color, name } : color;
  const { value: colorValue, name: colorName = name } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const contrast = tinycolor.readability(hex, textColor);
  const grade = contrastGrade(contrast);
  const contrastText = tinycolor.readability('#ffffff', hex);
  const gradeText = contrastGrade(contrastText);

  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        py: 1,
        bg: 'background',
        fontSize: 1,
        border: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
      }}
    >
      <div
        sx={{
          px: 2,
          width: '40%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <CopyContainer
          value={hex}
          name={name}
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <div
            sx={{
              height: 35,
              width: 35,
              alignItems: 'center',
              px: 3,
              bg: colorValue,
              color: textColor,
            }}
          />
          <div
            sx={{
              ml: 2,
            }}
          >
            {colorName}
          </div>
        </CopyContainer>
      </div>
      <div sx={{ p: 2, width: '30%', display: 'flex' }}>
        <CopyContainer value={hex} name={name}>
          <code
            sx={{
              bg: 'gray',
              border: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
              px: 1,
            }}
          >
            {hex}
          </code>
        </CopyContainer>
      </div>
      <div sx={{ p: 2, width: '15%', display: 'flex' }}>
        <div sx={{ bg: hex, color: textColor, px: 1 }}>{grade}</div>
      </div>
      <div sx={{ p: 2, width: '15%', display: 'flex' }}>
        <div sx={{ bg: 'white', color: hex, px: 1 }}>{gradeText}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with CometColor items
 * using a css flex display direction column
 */
export const PhotonColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" {...props}>
    {({ name, value }) => (
      <PhotonColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
