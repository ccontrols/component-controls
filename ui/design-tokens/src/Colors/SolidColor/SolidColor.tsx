/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { GridContainerProps, GridContainer } from '../../components';

/**
 * Color item displaying the color as a block. The CSS class, HEX value, and SASS name are placed above the color block.
 * Design inspired by [Solid](https://solid.buzzfeed.com/colors.html).
 */
export const SolidColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, sass, css } = colorObj;

  const { hex } = colorToStr(colorValue);
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 180,
        maxWidth: 450,
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '16px',
          justifyContent: 'space-between',
          py: 1,
        }}
      >
        <div
          sx={{
            my: 2,
            fontSize: 2,
            fontWeight: 'bold',
            color: 'primary',
          }}
        >
          {css && (
            <CopyContainer value={css} name={name || css}>
              {css}
            </CopyContainer>
          )}
        </div>
        <div sx={{ fontSize: 1, color: 'mutedText' }}>
          {`${hex}${sass ? `, ${sass}` : ''}`}
        </div>
      </div>
      <CopyContainer
        value={hex}
        name={name || css}
        sx={{
          bg: colorValue,
          height: 50,
          border: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        }}
      />
    </div>
  );
};

/**
 *
 * palette displayed with SolidColor items
 * using a css grid for the dsplay
 */
export const SolidColorPalette: FC<Omit<
  GridContainerProps,
  'children'
>> = props => (
  <GridContainer {...props}>
    {({ name, value }) => (
      <SolidColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
