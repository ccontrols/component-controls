const React = require('react');

/**
 * Column description
 */
class Column extends React.Component {
  static defaultProps = {
    stringProp: 'prop1',
  };

  render() {
    const { stringProp } = this.props;
    return <div>{stringProp}</div>;
  }
}

module.exports = {
  Column,
  React,
};

exports.Test = Column;
