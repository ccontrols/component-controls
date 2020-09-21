/** @jsx jsx */
import { FC, useState, useMemo } from 'react';
import { jsx, Box } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../types';
import { FlexContainerProps, FlexContainer } from '../FlexContainer';

/**
 * Color item displaying the color as a small block, expanding on hover.
 * Design inspired from [Antd](https://ant.design/docs/spec/colors).
 */

export const ColorBlock3: FC<ColorBlockProps> = ({
  name,
  color,
  hover,
  sx,
}) => {
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
    <Box sx={{ display: 'flex', flex: '1', height: 90, maxWidth: 120, ...sx }}>
      <CopyContainer value={hex} name={name} sxStyle={{ width: '100%' }}>
        <Box
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
          <Box
            sx={{
              fontWeight: 'bold',
            }}
          >
            {name || hex}
          </Box>
          <Box
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
          </Box>
        </Box>
      </CopyContainer>
    </Box>
  );
};

/**
 *
 * palette displayed with ColorBlock3 items
 * using a css flex display direction row
 */
export const ColorBlock3Palette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
>> = props => (
  <FlexContainer direction="row" {...props}>
    {({ name, value, hover }) => (
      <ColorBlock3
        key={`color_item_${name}}`}
        name={name}
        color={value}
        hover={hover}
      />
    )}
  </FlexContainer>
);
