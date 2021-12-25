/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { ColorBlockProps, ColorValue } from '../../types';
import { GridContainerProps, GridContainer } from '../../containers';

/**
 * Color item displaying the color as a color block with sass variable name and hex color value.
 * Design inspired by [Vanilla](https://vanillaframework.io/docs/settings/color-settings).
 */
export const VanillaColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, sass } = colorObj;
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bg: 'background',
        minWidth: 100,
        maxWidth: 320,
        border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
      }}
    >
      <CopyContainer
        value={colorValue}
        name={name}
        sx={{
          border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
          bg: colorValue,
          ':after': {
            content: '""',
            display: 'block',
            paddingBottom: '30%',
          },
        }}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          fontSize: 2,
        }}
      >
        <div>{sass}</div>
        <div>{colorValue}</div>
      </div>
    </div>
  );
};

/**
 *
 * palette displayed with VanillaColor items
 * using a css grid for the dsplay
 */
export const VanillaColorPalette: FC<
  Omit<GridContainerProps, 'children'>
> = props => (
  <GridContainer width={150} gap={3} {...props}>
    {({ name, value }) => (
      <VanillaColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </GridContainer>
);
