import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age }) => (
  <div>{`My name is ${name} and I am ${age} years old`}</div>
);

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
Person.defaultProps = {
  name: 'Martin',
  age: 22,
};
