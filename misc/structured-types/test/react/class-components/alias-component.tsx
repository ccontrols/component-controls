import React, { Component as C } from 'react';

export class MyComponent extends C<{ name: string }> {
  render() {
    return <span>Hello, {this.props.name}!</span>;
  }
}
