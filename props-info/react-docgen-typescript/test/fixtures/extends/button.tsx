import React, { FC } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'success' | 'warn' | 'danger';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  fullWidth,
  className,
  ...props
}) => (
  <button
    type={type}
    className={`${variant}-${size}-${fullWidth ? 'yes' : 'no'} ${className}`}
    {...props}
  >
    {children}
  </button>
);
