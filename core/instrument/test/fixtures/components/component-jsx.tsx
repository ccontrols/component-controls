import React, { FC, MouseEventHandler } from 'react';
import { Button as PropsButton } from './button-props';

export interface ButtonProps {
  className: string;
  id: string;
  name: string;
  defaultValue?: string;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export const Button: FC<ButtonProps> = ({
  className,
  id,
  name,
  defaultValue,
  label,
  onClick,
}) => (
  <div className={className}>
    <input id={id} name={name} defaultValue={defaultValue} />
    <PropsButton name={label} onClick={onClick}>{`Hello, ${name}`}</PropsButton>
  </div>
);
