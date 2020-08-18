import React from 'react';
import { lighten } from 'polished';
import PropTypes from 'prop-types';

/**
 * Spinner with react PropTypes
 */
export const Spinner = ({
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
      color: lighten(disabled ? 0.4 : 0, color),
      padding,
    }}
  >
    {children}
  </button>
);

Spinner.defaultProps = {
  disabled: false,
  children: 'default',
  onClick: () => {},
  style: {},
  backgroundColor: '#fefefe',
  color: 'black',
  type: 'button',
  padding: 5,
};

Spinner.propTypes = {
  /**
   * Boolean indicating whether the button should render as disabled
   */
  disabled: PropTypes.bool,

  /**
   * button label
   */
  children: PropTypes.string,

  /**
   * onClick handler
   */
  onClick: PropTypes.func,

  /**
   * Custom styles
   */
  style: PropTypes.shape({}),

  /**
   * Background color
   */
  backgroundColor: PropTypes.string,

  /**
   * Text color, default black
   */
  color: PropTypes.string,

  /**
   * Button type
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * Numeric  field type
   */
  padding: PropTypes.number,
};
