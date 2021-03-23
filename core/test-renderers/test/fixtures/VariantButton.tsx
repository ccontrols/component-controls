/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from 'react';
import {
  SearchIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@primer/octicons-react';

type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'disabled'
  | 'success'
  | 'warning'
  | 'error';

type ButtonIconType =
  | 'none'
  | 'search'
  | 'left-arrow'
  | 'right-arrow'
  | 'down-arrow'
  | 'up-arrow';

const variant_colors: Record<ButtonVariant, string> = {
  primary: '#F2F2F2',
  accent: '#F2F2F2',
  disabled: '#828282',
  success: '#F2F2F2',
  warning: '#4F4F4F',
  error: '#F2F2F2',
};

const variant_backgrounds: Record<ButtonVariant, string> = {
  primary: '#2F80ED',
  accent: '#9B51E0',
  disabled: '#E0E0E0',
  success: '#219653',
  warning: '#F2C94C',
  error: '#EB5757',
};

const variant_icons: Record<ButtonIconType, typeof SearchIcon | undefined> = {
  none: undefined,
  search: SearchIcon,
  'left-arrow': ArrowLeftIcon,
  'right-arrow': ArrowRightIcon,
  'down-arrow': ArrowDownIcon,
  'up-arrow': ArrowUpIcon,
};
export interface VariantButtonProps {
  /**
   *  button label of text
   */
  text: string;

  /**
   *  variant kind
   */
  variant?: ButtonVariant;

  /**
   * icon kind
   */
  icon?: ButtonIconType;
}

/**
 * Button with variants
 */
export const VariantButton: FC<VariantButtonProps> = ({
  text,
  variant = 'primary',
  icon,
}) => {
  const Icon = icon ? variant_icons[icon] : undefined;
  return (
    <button
      disabled={variant === 'disabled' ? true : undefined}
      style={{
        color: variant_colors[variant],
        backgroundColor: variant_backgrounds[variant],
        borderRadius: 8,
        border: `1px solid #000000`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {Icon && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Icon />
        </div>
      )}
      <div data-testid="label" style={{ padding: '0 10px' }}>
        {text}
      </div>
    </button>
  );
};
