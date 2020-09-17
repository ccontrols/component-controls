import { FC } from 'react';

export interface ColorProps {
  /**
   * name of the color, If none, or same as the color value, some color blocks will not display it
   */
  name?: string;
  /**
   * color value as a string.
   * accepted hex, rgb, hsl color strings
   */
  color: string;

  /**
   * hover prop
   */
  hover?: boolean;
}

export type ColorPaletteProps = Record<string, string>;

export type ColorBlockComponent = FC<ColorProps>;

/**
 * palette container
 */
export type ContainerProps = {
  palette: ColorPaletteProps;
  ColorBlock: ColorBlockComponent;
};
