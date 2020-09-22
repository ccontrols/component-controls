/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../types';
import { FlexContainerProps, FlexContainer } from '../FlexContainer';

/**
 * Color item displaying as a row, with color, name and hex value
 * Design inspired from [BaseWeb](https://baseweb.design/components/tokens/).
 */

export const ColorBlock8: FC<ColorBlockProps> = ({ name, color, sx }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <Box sx={{ display: 'flex', flex: '1', ...sx }}>
      <CopyContainer value={hex} name={name} sxStyle={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            fontSize: 2,
            borderBottom: `1px solid ${hex}`,
            bg: 'background',
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 50,
              bg: colorValue,
              color: textColor,
              mr: 3,
            }}
          ></Box>
          <Box
            sx={{
              flex: 1,
            }}
          >
            {name}
          </Box>
          <div sx={{ mr: 3 }}>{hex.toUpperCase()}</div>
        </Box>
      </CopyContainer>
    </Box>
  );
};

/**
 *
 * palette displayed with ColorBlock8 items
 * using a css flex display direction column
 */
export const ColorBlock8Palette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" {...props}>
    {({ name, value, hover }) => (
      <ColorBlock8
        key={`color_item_${name}}`}
        name={name}
        color={value}
        hover={hover}
      />
    )}
  </FlexContainer>
);
