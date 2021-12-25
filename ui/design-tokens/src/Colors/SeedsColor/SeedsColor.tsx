/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import simpleColorConverter from 'simple-color-converter';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { GridContainerProps, GridContainer } from '../../containers';

/**
 * Color item displaying the color as a block with RGB and CMYK colors. The color name and description are displayed below the block.
 * Design inspired by SproutSocial's [Seed](https://seeds.sproutsocial.com/visual/color/).
 */
export const SeedsColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const {
    value: colorValue,
    name: colorName,
    description,
    variants,
  } = colorObj;
  const { hex, rgba } = colorToStr(colorValue);
  const { color: cmyk } = new simpleColorConverter({
    rgba,
    to: 'cmyk',
  });
  const textColor = mostReadable(hex);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 180,
        maxWidth: 450,
        fontSize: 0,
      }}
    >
      <CopyContainer value={hex} name={name}>
        <div
          sx={{
            position: 'relative',
            color: textColor,
            fontSize: '11px',
            bg: colorValue,
            ':after': {
              content: '""',
              display: 'block',
              paddingBottom: '50%',
            },
          }}
        >
          <div
            sx={{
              position: 'absolute',
              left: 2,
              right: 2,
              bottom: 2,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div sx={{ mr: 2 }}>
              {`RGB: ${rgba.r},${rgba.g},${rgba.b}${
                rgba.a !== 1 ? `,${rgba.a}` : ''
              }`}
            </div>
            <div>{`CMYK: ${cmyk.c},${cmyk.m},${cmyk.y},${cmyk.k}`}</div>
          </div>
        </div>
      </CopyContainer>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '16px',
          bg: 'background',
          py: 3,
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {colorName && (
            <div sx={{ fontSize: 2, fontWeight: 'bold', mb: 2 }}>
              {colorName}
            </div>
          )}
          {variants && (
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                mb: 2,
                flexWrap: 'wrap',
              }}
            >
              {variants.map(variant => (
                <CopyContainer
                  key={`seeds_color_${variant}`}
                  value={hex}
                  name={variant}
                >
                  <div
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      p: 2,
                      mr: 2,
                      borderRadius: 8,
                      border: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
                    }}
                  >
                    <div
                      sx={{
                        borderRadius: '50%',
                        height: '12px',
                        width: '12px',
                        bg: colorValue,
                        mr: 2,
                      }}
                    />
                    <div>{variant}</div>
                  </div>
                </CopyContainer>
              ))}
            </div>
          )}

          <p sx={{ my: 0 }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with SeedsColor items
 * using a css grid for the dsplay
 */
export const SeedsColorPalette: FC<
  Omit<GridContainerProps, 'children'>
> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <SeedsColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
