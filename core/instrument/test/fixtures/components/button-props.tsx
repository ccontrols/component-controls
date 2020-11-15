import React, { FC } from 'react';

export interface ButtonProps {
  name: string;
}
export const Button: FC<ButtonProps> = props => (
  <button>{`Hello, ${props.name}`}</button>
);
