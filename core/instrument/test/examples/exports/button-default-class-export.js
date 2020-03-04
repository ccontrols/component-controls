import React from 'react';

class Button extends React.Component {
  render() {
    return <button>Hello, {this.props.name}</button>;
  }
}

export default Button;
