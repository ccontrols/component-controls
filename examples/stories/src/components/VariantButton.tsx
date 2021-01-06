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

type IconSideType = 'left' | 'right';

type SizeVariants = 'small' | 'medium' | 'large';

const paddings: Record<SizeVariants, string> = {
  small: `5px 10px`,
  medium: `10px 20px`,
  large: `15px 30px`,
};
const variant_icons: Record<ButtonIconType, typeof SearchIcon> = {
  none: null,
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
   * font size for the Button label
   */
  fontSize?: number;

  /**
   * icon kind
   */
  icon?: ButtonIconType;

  /**
   * on which side of the label should the icon be placed
   */
  iconSide?: IconSideType;

  /**
   * icon size
   */
  iconSize?: SizeVariants;

  /**
   * padding variants
   */
  padding: SizeVariants;
}

/**
 * Button with variants
 */
export const VariantButton: FC<VariantButtonProps> = ({
  text,
  fontSize = 18,
  iconSize = 'small',
  variant = 'primary',
  iconSide = 'left',
  padding = 'medium',
  icon,
}) => {
  const Icon = variant_icons[icon];
  return (
    <button
      style={{
        color: variant_colors[variant],
        backgroundColor: variant_backgrounds[variant],
        fontSize,
        padding: paddings[padding],
        borderRadius: 8,
        border: `1px solid #000000`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {Icon && iconSide === 'left' && (
        <div
          style={{
            padding: '0 10px 0 0',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Icon size={iconSize} />
        </div>
      )}
      <div>{text}</div>
      {Icon && iconSide === 'right' && (
        <div
          style={{
            padding: '0 0 0 10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Icon size={iconSize} />
        </div>
      )}
    </button>
  );
};
