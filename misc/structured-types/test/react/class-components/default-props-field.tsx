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
class MyComponent extends Component<OwnProps> {
  render(): React.ReactNode {
    const { stringProp } = this.props;
    return <div>{stringProp}</div>;
  }
}

MyComponent.defaultProps = {
  stringProp: 'test',
};

export default MyComponent;
