import { FC, ReactNode } from 'react';

export type TokenStatus = 'ok' | 'warning' | 'error';
export type ColorValue =
  | string
  | {
      /**
       * color sub name
       */
      name?: string;
      /**
       * color string. can be hex, rgb or hsl
       */
      value: string;
      /**
       * if both dark and light variants are displayed
       */
      dark?: ColorValue;
      /**
       * variable name ex var(--theme-ui-colors-palette4,#dc004e)
       */
      varName?: string;
      /**
       * sass variable name ex: $text-input
       */
      sass?: string;
      /**
       * css class name ex text-input or --pf-global--link--Color
       */
      css?: string;
      /**
       * full text description of the color usage.
       */
      description?: string;
      /**
       * design token status. can be work in progrss, obsolete etc.
       */
      status?: TokenStatus;
      /**
       * for color palettes were each color palette has a primary color
       */
      primary?: boolean;

      /**
       * custom fields
       */
      [field: string]: any;
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

export type ContrastGrades = 'AAA' | 'AA' | 'AA+' | 'F';
