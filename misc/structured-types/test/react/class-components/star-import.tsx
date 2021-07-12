import * as R from 'react';

export class MyComponent extends R.Component<{ name: string }> {
  render() {
    return <span>Hello, {this.props.name}!</span>;
  }
}
