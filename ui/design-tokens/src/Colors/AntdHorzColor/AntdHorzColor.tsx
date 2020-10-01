/** @jsx jsx */
import { FC, useState, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

/**
 * Color item displaying the color as a small block, expanding on hover.
 * Design inspired by [Antd](https://ant.design/docs/spec/colors).
 */

export const AntdHorzColor: FC<ColorBlockProps> = ({ name, color, hover }) => {
  const [hoverMe, setHoverMe] = useState(false);
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex, rgba } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const isContained = typeof hover !== 'undefined';

  const onMouseEvents = useMemo(
    () =>
      isContained
        ? {}
        : {
            onMouseOver: () => setHoverMe(true),
            onMouseOut: () => setHoverMe(false),
          },
    [isContained],
  );
  return (
    <div sx={{ display: 'flex', flex: '1', height: 90, maxWidth: 120 }}>
      <CopyContainer value={hex} name={name} sx={{ width: '100%' }}>
        <div
          {...onMouseEvents}
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            bg: colorValue,
            color: textColor,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 0,
            transition: 'all .2s',
            py: 2,
            px: 3,
            ':hover': {
              mt: -3,
              justifyContent: 'space-between',
            },
          }}
        >
          <div
            sx={{
              fontWeight: 'bold',
            }}
          >
            {name || hex}
          </div>
          <div
            sx={{
              pointerEvents: 'none',
              ...(hover || hoverMe ? {} : { visibility: 'hidden', height: 0 }),
            }}
          >
            {!name
              ? `${rgba.r}, ${rgba.g}, ${rgba.b}${
                  rgba.a !== 1 ? `, ${rgba.a}` : ''
                }`
              : hex}
          </div>
        </div>
      </CopyContainer>
    </div>
  );
};

/**
 *
 * palette displayed with AntdHorzColor items
 * using a css flex display direction row
 */
export const AntdHorzColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="row" {...props}>
    {({ name, value, hover }) => (
      <AntdHorzColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        hover={hover}
      />
    )}
  </FlexContainer>
);
