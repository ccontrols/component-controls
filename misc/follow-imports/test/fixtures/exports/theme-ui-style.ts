import * as React from 'react';
import { InterpolationWithTheme } from '@emotion/core';
import { SpaceProps, ColorProps } from 'styled-system';

type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T
    ? T[P]
    : P extends keyof U
    ? U[P]
    : never;
};

type ForwardRef<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

export interface BoxOwnProps extends SpaceProps, ColorProps {
  as?: React.ElementType;
  variant?: string;
  css?: InterpolationWithTheme<any>;
}

export interface ButtonProps
  extends Assign<React.ComponentPropsWithRef<'button'>, BoxOwnProps> {}
/**
 * Primitive button component with variants
 * @see https://theme-ui.com/components/button
 */
export const Button: ForwardRef<HTMLButtonElement, ButtonProps>;
