import React, { PureComponent } from 'react';

export class MyComponent extends PureComponent<{ name: string }> {
  render() {
    return <span>Hello, {this.props.name}!</span>;
  }
}
