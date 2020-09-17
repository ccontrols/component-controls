import { FC } from 'react';

export type ColorValue = string | { name: string; value: string };
export interface ColorProps {
  /**
   * name of the color, If none, or same as the color value, some color blocks will not display it
   */
  name?: string;
  /**
   * color value as a string.
   * accepted hex, rgb, hsl color strings
   */
  color: ColorValue;

  /**
   * hover prop
   */
  hover?: boolean;
}

export type ColorPaletteProps = Record<string, ColorValue>;

export type ColorBlockComponent = FC<ColorProps>;

/**
 * palette container
 */
export type ContainerProps = {
  palette: ColorPaletteProps;
  ColorBlock: ColorBlockComponent;
};
