import { FC, ReactNode } from 'react';
import { SxProps } from 'theme-ui';

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

export type ColorBlockProps = { sx?: SxProps } & ColorProps;

export type ColorPaletteProps = Record<string, ColorValue>;

export type ColorBlockComponent = FC<ColorProps>;

export type ContaionerCallbackProps = {
  name: string;
  value: ColorValue;
  hover: boolean;
};
/**
 * design token container
 */
export type ContainerProps = {
  palette: ColorPaletteProps;
  children: (props: ContaionerCallbackProps) => ReactNode;
};
