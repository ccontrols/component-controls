/** @jsx jsx */
import { FC, useState, useMemo } from 'react';
import { jsx, Box } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorProps } from '../types';
import { FlexContainerProps, FlexContainer } from '../FlexContainer';

/**
 * Color item displaying the color as a small block, expanding on hover.
 * Design inspired from [And Design](https://ant.design/docs/spec/colors).
 */

export const ColorBlock2: FC<ColorProps> = ({ name, color, hover }) => {
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
    <Box sx={{ display: 'flex', flex: '1', width: 250 }}>
      <CopyContainer value={hex} name={name} sxStyle={{ width: '100%' }}>
        <Box
          {...onMouseEvents}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            bg: colorValue,
            color: textColor,
            height: 44,
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 0,
            transition: 'all .2s',
            px: 3,
            ':hover': {
              mr: -3,
            },
          }}
        >
          <Box
            sx={{
              fontWeight: 'bold',
              mr: 4,
            }}
          >
            {name || hex}
          </Box>
          <Box
            className="item-text"
            sx={{
              pointerEvents: 'none',
              ...(hover || hoverMe ? {} : { visibility: 'hidden', width: 0 }),
            }}
          >
            {!name
              ? `${rgba.r}, ${rgba.g}, ${rgba.b}${
                  rgba.a !== 1 ? `, ${rgba.a}` : ''
                }`
              : hex}
          </Box>
        </Box>
      </CopyContainer>
    </Box>
  );
};

/**
 *
 * palette displayed with ColorBlock2 items
 * using a css flex display direction column
 */
export const ColorBlock2Palette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="column" sx={{ width: 250 }} {...props}>
    {({ name, value, hover }) => (
      <ColorBlock2
        key={`color_item_${name}}`}
        name={name}
        color={value}
        hover={hover}
      />
    )}
  </FlexContainer>
);
