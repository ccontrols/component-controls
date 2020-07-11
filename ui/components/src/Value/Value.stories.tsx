import React from 'react';
import { Value, ValueProps } from './Value';

export default {
  title: 'Components/Value',
  component: Value,
};

export const overview = ({ label, value }: ValueProps) => {
  return <Value label={label} value={value} />;
};

overview.story = {
  controls: {
    label: 'date created',
    value: '01/01/2020',
  },
};
