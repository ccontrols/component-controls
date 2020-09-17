/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, Box } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { readableColor } from 'polished';
import { colorToStr } from '../utils';
import { ColorProps } from '../types';
import { FlexContainerProps, FlexContainer } from '../FlexContainer';

/**
 * Color item displaying the color as a small block, expanding on hover.
 * Design inspired from [And Design](https://ant.design/docs/spec/colors).
 */

export const ColorItemVert: FC<ColorProps> = ({ name, color, hover }) => {
  const [hoverMe, setHoverMe] = useState(false);
  const { hex, rgba } = colorToStr(color);
  const textColor = readableColor(hex, '#000', '#fff', true);
  return (
    <Box sx={{ display: 'flex', flex: '1', height: 90, maxWidth: 120 }}>
      <CopyContainer value={hex} name={name} sxStyle={{ width: '100%' }}>
        <Box
          onMouseOver={() => setHoverMe(true)}
          onMouseOut={() => setHoverMe(false)}
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            bg: color,
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
            sx={
              hover || hoverMe ? undefined : { visibility: 'hidden', height: 0 }
            }
          >
            {!name
              ? `${rgba.red}, ${rgba.green}, ${rgba.blue}${
                  rgba.alpha !== 1 ? `, ${rgba.alpha}` : ''
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
 * palette displayed with ColorItemVert items
 * using a css flex display direction row
 */
export const ColorItemVertPalette: FC<Omit<
  FlexContainerProps,
  'ColorBlock' | 'direction'
>> = props => (
  <FlexContainer ColorBlock={ColorItemVert} direction="row" {...props} />
);
