import React, { FC } from 'react';
import { lighten } from 'polished';

interface ButtonProps {
  /** Boolean indicating whether the button should render as disabled */
  disabled?: boolean;
  /** button label. */
  label?: string;
  /** onClick handler */
  onClick: () => void;
  /** Custom styles */
  style: object;

  /** Background color */
  backgroundColor: string;

  /** Text color, default black */
  color: string;

  /** Button type */
  type: 'button' | 'reset' | 'submit';

  /** Numeric  field type */
  padding: number;
}

/** Button with react Typescript properties */
export const Button: FC<ButtonProps> = ({
  disabled,
  label,
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
      color: lighten(disabled ? 0.4 : 0, color),
      padding,
    }}
  >
    {label}
  </button>
);

Button.defaultProps = {
  disabled: false,
  label: 'default',
  onClick: () => {},
  style: {},
  backgroundColor: '#fefefe',
  color: 'black',
  type: 'button',
  padding: 5,
};
