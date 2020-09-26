/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying as a row, with color, name and hex value
 * Design inspired from [BaseWeb](https://baseweb.design/components/tokens/).
 */

export const BaseWebColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          fontSize: 2,
          borderBottom: `1px solid ${hex}`,
          bg: 'background',
        }}
      >
        <CopyContainer value={hex} name={name}>
          <div
            sx={{
              width: 100,
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
          {name}
        </div>
        <div sx={{ mr: 3 }}>{hex.toUpperCase()}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with BaseWebColor items
 * using a css flex display direction column
 */
export const BaseWebColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" {...props}>
    {({ name, value }) => (
      <BaseWebColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </FlexContainer>
);
