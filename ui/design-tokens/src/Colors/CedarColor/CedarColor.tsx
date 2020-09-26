/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying as a row, with color, name, description and hex value
 * Design inspired from REI's [Cedar](https://rei.github.io/rei-cedar-docs/foundation/color/).
 */

export const CedarColor: FC<ColorBlockProps & { index?: number }> = ({
  name,
  color,
  index = 0,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName, description } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: 1,
          p: 2,
          bg: index % 2 ? 'background' : 'gray',
        }}
      >
        <CopyContainer value={hex} name={name}>
          <div
            sx={{
              width: 50,
              height: 50,
              bg: colorValue,
              color: textColor,
              mr: 3,
            }}
          />
        </CopyContainer>
        <div
          sx={{
            flex: 1,
          }}
        >
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <div sx={{ fontWeight: 'bold' }}>{colorName}</div>
            <div> {description}</div>
          </div>
        </div>
        <div sx={{ mr: 3, fontSize: 0 }}>{hex}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with CedarColor items
 * using a css flex display direction column
 */
export const CedarColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" {...props}>
    {({ name, value, index }) => (
      <CedarColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        index={index}
      />
    )}
  </FlexContainer>
);
