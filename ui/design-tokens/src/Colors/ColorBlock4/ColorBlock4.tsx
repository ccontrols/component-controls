/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../types';
import { GridContainerProps, GridContainer } from '../GridContainer';

/**
 * Color item displaying the color as a block with a title, as well as hex(string) and rgb values.
 * Design inspired from [Anvil](https://anvil.servicetitan.com/foundations/color/).
 */
export const ColorBlock4: FC<ColorBlockProps> = ({ name, color, sx }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 180,
        maxWidth: 450,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <Box
          sx={{
            position: 'relative',
            bg: colorValue,
            height: 90,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              height: 16,
              width: 16,
              borderRadius: '50%',
              bg: textColor,
            }}
          ></Box>
        </Box>
      </CopyContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '16px',
          justifyContent: 'space-between',
          py: 1,
          ...sx,
        }}
      >
        <Heading
          as="h2"
          sx={{
            my: 2,
          }}
        >
          {name || hex}
        </Heading>
        <Box sx={{ fontSize: 1 }}>{`${
          typeof color !== 'string' ? color.name : 'HEX:'
        } ${hex}`}</Box>
      </Box>
    </Box>
  );
};

/**
 *
 * palette displayed with ColorBlock4 items
 * using a css grid for the dsplay
 */
export const ColorBlock4Palette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <ColorBlock4 key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
