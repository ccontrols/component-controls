import React, { forwardRef, HTMLProps } from 'react';
import { styled } from '@storybook/theming';
import { transparentize, darken } from 'polished';

import { Button } from '@storybook/components';

interface ToggleButtonProps {
  active: boolean;
  left: boolean;
  onClick: (e: any) => void;
}
const ToggleButton = styled(Button)<ToggleButtonProps>(
  ({ theme, active, left }) => {
    const activeColor = darken(0.1, theme.color.light);
    return {
      '&&': {
        borderRadius: left ? '14px 0 0 14px' : '0 14px 14px 0',
        margin: 0,
        border: 'none',
        borderColor: activeColor,
        color: active
          ? theme.color.defaultText
          : transparentize(
              theme.base === 'light' ? 0.4 : 0.6,
              theme.color.defaultText,
            ),
        background: active ? activeColor : 'unset',
      },
    };
  },
);

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
