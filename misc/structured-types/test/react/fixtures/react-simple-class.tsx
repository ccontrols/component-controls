import React from 'react';

export class ReactComponent extends React.Component<{ name: string }> {
  render() {
    return <span>Hello, {this.props.name}!</span>;
  }
}
