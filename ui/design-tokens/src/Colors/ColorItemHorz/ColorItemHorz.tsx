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

export const ColorItemHorz: FC<ColorProps> = ({ name, color, hover }) => {
  const [hoverMe, setHoverMe] = useState(false);
  const { hex, rgba } = colorToStr(color);
  const textColor = readableColor(hex, '#000', '#fff', true);
  return (
    <Box sx={{ display: 'flex', flex: '1', width: 250 }}>
      <CopyContainer value={hex} name={name} sxStyle={{ width: '100%' }}>
        <Box
          onMouseOver={() => setHoverMe(true)}
          onMouseOut={() => setHoverMe(false)}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            bg: color,
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
            sx={hover || hoverMe ? undefined : { visibility: 'hidden' }}
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
 * palette displayed with ColorItemHorz items
 * using a css flex display direction column
 */
export const ColorItemHorzPalette: FC<Omit<
  FlexContainerProps,
  'ColorBlock' | 'direction'
>> = props => (
  <FlexContainer ColorBlock={ColorItemHorz} direction="column" {...props} />
);
