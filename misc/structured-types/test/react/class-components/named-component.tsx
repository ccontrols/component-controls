import React, { Component } from 'react';

export class MyComponent extends Component<{ name: string }> {
  render() {
    return <span>Hello, {this.props.name}!</span>;
  }
}
