/** @jsx jsx */
import { FC } from 'react';
import { jsx, Heading } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../../types';
import { GridContainerProps, GridContainer } from '../../containers';

/**
 * Color item displaying the color as a color block with a dot suggesting the best text color and a block of text with the color title, name, and value.
 * Design inspired by [Anvil](https://anvil.servicetitan.com/foundations/color/).
 */
export const AnvilColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 180,
        maxWidth: 450,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <div
          sx={{
            position: 'relative',
            bg: colorValue,
            height: 90,
          }}
        >
          <div
            sx={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              height: 16,
              width: 16,
              borderRadius: '50%',
              bg: textColor,
            }}
          />
        </div>
      </CopyContainer>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '16px',
          justifyContent: 'space-between',
          py: 1,
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
        <div sx={{ fontSize: 1 }}>{`${
          typeof color !== 'string' ? color.name : 'HEX:'
        } ${hex}`}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with AnvilColor items
 * using a css grid for the dsplay
 */
export const AnvilColorPalette: FC<
  Omit<GridContainerProps, 'children'>
> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <AnvilColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
