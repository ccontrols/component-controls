/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import simpleColorConverter from 'simple-color-converter';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../types';
import { GridContainerProps, GridContainer } from '../GridContainer';

/**
 * Color item displaying the color as a block and color aliases for various standard is Pantone, CMYK.
 * If specified, will display the dark color as a bottom-right side triangle.
 * Design inspired from [Backpack](https://backpack.github.io/guidelines/colors).
 */
export const BackpackColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color, name: '' } : color;
  const { value: colorValue, name: colorName, dark } = colorObj;
  const darkColorObj: ColorValue | undefined =
    typeof dark === 'string' ? { value: dark, name: dark } : dark;
  const { value: darkValue, name: darkName } = darkColorObj || {};
  const { hex, rgba } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const { color: cmyk } = new simpleColorConverter({
    rgba,
    to: 'cmyk',
  });
  const { color: pantone } = new simpleColorConverter({
    rgba,
    to: 'pantone',
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 180,
        maxWidth: 320,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <Box
          sx={{
            color: textColor,
            bg: colorValue,
            position: 'relative',
            ':after': {
              content: '""',
              display: 'block',
              paddingBottom: '100%',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'absolute',
              p: 2,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            {typeof darkValue !== 'undefined' && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  height: '40%',
                  width: '40%',
                  backgroundImage: `linear-gradient(to right bottom, transparent 50%, ${darkValue} 0%, ${darkValue} 50% )`,
                }}
              />
            )}
            <Box sx={{ pt: 1, pb: 2, fontWeight: 'bold' }}>{`${name || hex} ${
              typeof darkName !== 'string' ? colorName : ''
            }`}</Box>
            <div
              sx={{
                lineHeight: 1.5,
              }}
            >
              {typeof darkName !== 'string' ? (
                <div>
                  <div>
                    {`RGB ${rgba.r}, ${rgba.g}, ${rgba.b}${
                      rgba.a !== 1 ? `, ${rgba.a}` : ''
                    }`}
                  </div>
                  <div>{`HEX ${hex}`}</div>
                  <div>{`CMYK: ${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`}</div>
                  <div sx={{ mb: 1 }}>{`${
                    pantone ? `PMS ${pantone}` : '--'
                  }`}</div>
                </div>
              ) : (
                <div>
                  <div>{`light: ${colorName}`}</div>
                  <div>{`dark: ${darkName}`}</div>
                </div>
              )}
            </div>
          </Box>
        </Box>
      </CopyContainer>
    </Box>
  );
};

/**
 *
 * palette displayed with BackpackColor items
 * using a css grid for the dsplay
 */
export const BackpackColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <BackpackColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
