import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    error: undefined,
  };
  componentDidCatch(error: Error | null, info: object) {
    this.setState({ error: error || new Error('ERROR WAS NOT PROPAGATED') });
    console.error(error, info);
  }
  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      console.log(error);
      return <h1>Unexpected error.</h1>;
    }

    return children;
  }
}
