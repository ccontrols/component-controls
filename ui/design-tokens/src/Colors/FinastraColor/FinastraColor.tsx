/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { CheckIcon } from '@primer/octicons-react';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../containers';

/**
 * Color item displaying the color as a small block, with name and hex color on the side. If the color is a primary color, will display as a circle.
 * Design inspired by [Finastra](https://design.fusionfabric.cloud/foundations/colors).
 */

export const FinastraColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName, primary } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <div
      sx={{
        display: 'flex',
        flex: '1',
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <CopyContainer
        value={hex}
        name={name}
        sx={{ p: primary ? 0 : 2, width: 80 }}
      >
        <div
          sx={{
            bg: colorValue,
            color: textColor,
            position: 'relative',

            borderRadius: primary ? '50%' : undefined,
            ':after': {
              content: '""',
              display: 'block',
              paddingBottom: '100%',
            },
          }}
        >
          <div
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {primary ? colorName : <CheckIcon />}
          </div>
        </div>
      </CopyContainer>

      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 4,
          lineHeight: '1.4rem',
        }}
      >
        <div>{name}</div>
        <div sx={{ opacity: 0.5 }}>{hex}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with FinastraColor items
 * using a css flex display direction column
 */
export const FinastraColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" sx={{ width: 250 }} {...props}>
    {({ name, value, hover }) => (
      <FinastraColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        hover={hover}
      />
    )}
  </FlexContainer>
);
