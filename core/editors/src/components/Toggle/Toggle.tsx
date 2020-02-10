import React, { forwardRef, HTMLProps } from 'react';
import { Button } from 'theme-ui';

interface ToggleButtonProps {
  active: boolean;
  left: boolean;
  onClick: (e: any) => void;
}
const ToggleButton: React.FC<ToggleButtonProps> = ({
  active,
  left,
  children,
  onClick,
}) => {
  const activeColor = 'primary';
  return (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: left ? '14px 0 0 14px' : '0 14px 14px 0',
        border: 1,
        borderColor: activeColor,
        color: active ? 'text' : 'fadedText',
        bg: active ? activeColor : 'unset',
      }}
    >
      {children}
    </Button>
  );
};

export interface ToggleOwnProps {
  /** whether checked */
  checked?: boolean;
  /** onChange event - when one of the toggles in clicked */
  onChange?: (checked: boolean) => void;

  /** custom labels - by defaut 'True' and 'False' */
  labels?: {
    true: React.ReactNode;
    false: React.ReactNode;
  };
}

export type ToggleProps = Omit<
  HTMLProps<HTMLDivElement>,
  keyof ToggleOwnProps
> &
  ToggleOwnProps;
export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  (
    {
      checked = false,
      onChange,
      labels = {
        true: 'True',
        false: 'False',
      },
      ...rest
    }: ToggleProps,
    ref,
  ) => (
    <div ref={ref} {...rest}>
      <ToggleButton
        active={checked}
        left
        onClick={() => onChange && onChange(true)}
      >
        {labels.true}
      </ToggleButton>
      <ToggleButton
        active={!checked}
        left={false}
        onClick={() => onChange && onChange(false)}
      >
        {labels.false}
      </ToggleButton>
    </div>
  ),
);

Toggle.displayName = 'Toggle';
