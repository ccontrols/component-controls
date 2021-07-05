import React, { Component, BaseHTMLAttributes } from 'react';
/**
 * own properties.
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
 * Column description
 */
export class Column extends Component<OwnProps, Record<string, unknown>> {
  static defaultProps: Partial<OwnProps> = {
    stringProp: 'prop1',
  };

  render(): React.ReactNode {
    const { stringProp } = this.props;
    return <div>{stringProp}</div>;
  }
}
