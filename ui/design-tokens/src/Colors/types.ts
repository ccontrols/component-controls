import { FC, ReactNode } from 'react';

export type TokenStatus = 'ok' | 'warning' | 'error';
export type ColorValue =
  | string
  | {
      name?: string;
      value: string;
      dark?: ColorValue;
      varName?: string;
      sass?: string;
      css?: string;
      description?: string;
      status?: TokenStatus;
    };
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

export type ColorBlockProps = ColorProps;

export type ColorPaletteProps = Record<string, ColorValue>;

export type ColorBlockComponent = FC<ColorProps>;

export type ContaionerCallbackProps = {
  name: string;
  value: ColorValue;
  hover: boolean;
  index: number;
};
/**
 * design token container
 */
export type ContainerProps = {
  palette: ColorPaletteProps;
  children: (props: ContaionerCallbackProps) => ReactNode;
};

export const colorContrast: Record<
  string,
  { ratio: number; fontSize: string }
> = {
  AAA: {
    ratio: 7,
    fontSize: '14px',
  },
  small: {
    ratio: 4.5,
    fontSize: '14px',
  },
  large: {
    ratio: 3,
    fontSize: '18px',
  },
};
