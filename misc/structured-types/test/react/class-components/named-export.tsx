import React, { Component } from 'react';
/**
 * MyComponent properties.
 */
type OwnProps = {
  /** stringProp description */
  stringProp?: string;

  /** numberProp description */
  numberProp: number;
};

/**
 * MyComponent special component
 */
export class MyComponent extends Component<OwnProps, Record<string, unknown>> {
  render(): React.ReactNode {
    const { stringProp } = this.props;
    return <div>{stringProp}</div>;
  }
}
