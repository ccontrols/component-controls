import React from 'react';
import { Example } from '@component-controls/core';
import { Value, ValueProps } from './Value';

export default {
  title: 'Components/Value',
  component: Value,
};

export const overview: Example = ({ label, value }: ValueProps) => {
  return <Value label={label} value={value} />;
};

overview.controls = {
  label: 'date created',
  value: '01/01/2020',
};
