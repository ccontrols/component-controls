import React from 'react';
import { lighten } from 'polished';
import PropTypes from 'prop-types';

/** BaseButton component description imported from comments inside the component file */
const BaseButton = ({ disabled, label, onClick, style, backgroundColor, color, type, padding }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    style={{ ...style, backgroundColor, color: lighten(disabled ? 0.3 : 0, color), padding }}
  >
    {label}
  </button>
);

BaseButton.defaultProps = {
  disabled: false,
  onClick: () => {},
  style: {},
  backgroundColor: '#fefefe',
  color: 'black',
  type: 'button',
  padding: 5,
};

BaseButton.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** button label. */
  label: PropTypes.string.isRequired,
  /** onClick handler */
  onClick: PropTypes.func,
  /** Custom styles */
  style: PropTypes.shape({}),

  /** Background color */
  backgroundColor: PropTypes.string,

  /** Text color, default black */
  color: PropTypes.string,

  /** Button type */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /** Numeric  field type */
  padding: PropTypes.number,
};

export default BaseButton;
