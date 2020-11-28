import React, { FC, MouseEventHandler } from 'react';

export interface ButtonProps {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export const Button: FC<ButtonProps> = props => (
  <button onClick={props.onClick}>{`Hello, ${props.name}`}</button>
);
