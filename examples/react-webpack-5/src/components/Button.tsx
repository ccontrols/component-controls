import React, { FC } from 'react';

export interface ButtonProps {
  /**
   *  Boolean indicating whether the button should render as disabled
   */
  disabled?: boolean;
  
  /**
   * button label
   */
  children?: string;

  /**
   * onClick handler
   */
  onClick?: () => void;
  
  /**
   * Custom styles
   */
  style?: object;

  /**
   * Background color
   */
  backgroundColor?: string;

  /**
   * Text color, default black
   */
  color?: string;

  /**
   * Button type
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * Numeric  field type
   */
  padding?: number;
}

/**
 * Button with react Typescript properties
 */
export const Button: FC<ButtonProps> = ({
  disabled,
  children,
  onClick,
  style,
  backgroundColor,
  color,
  type,
  padding,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    style={{
      ...style,
      backgroundColor,
      color,
      padding,
    }}
  >
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false,
  children: 'default',
  onClick: () => {},
  style: {},
  backgroundColor: '#fefefe',
  color: 'black',
  type: 'button',
  padding: 5,
};
