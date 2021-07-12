import React, { Component, BaseHTMLAttributes } from 'react';
/**
 * MyComponent properties.
 */
type OwnProps = {
  /** stringProp description */
  stringProp?: string;

  /** numberProp description */
  numberProp: number;
  /**
   * function props description
   */
  fnProp: () => void;

  /**
   * unionProp description
   * @deprecated since version 1.0
   */
  unionProp: 'option1' | 'option2' | 'option3';
} & BaseHTMLAttributes<HTMLDivElement>;

/**
 * MyComponent special component
 */

export class MyComponent extends Component<OwnProps, Record<string, unknown>> {
  render(): React.ReactNode {
    const { stringProp } = this.props;
    return <div>{stringProp}</div>;
  }
}
