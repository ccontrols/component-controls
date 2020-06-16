import React from 'react';
import { ControlTypes } from '../components';
import { NumberControl } from './components/NumberControl';

export default {
  title: 'Controls/NUMBER',
  component: NumberControl,
};

export const overview = ({ value }) => <div>{value}</div>;

overview.story = {
  description: 'A simple story with a numeric property control',
  controls: {
    value: {
      type: ControlTypes.NUMBER,
      value: 10,
      description: 'a numeric control',
    },
  },
};

export const range = ({ value }) => <div>{value}</div>;

range.story = {
  description: 'A story with a range type numeric property control',
  controls: {
    value: {
      type: ControlTypes.NUMBER,
      value: 10,
      min: 3,
      max: 22,
      range: true,
      description: 'a numeric control',
    },
  },
};

export const step = ({ value }) => <div>{value}</div>;

step.story = {
  description: 'A story with a numeric property control with custom step value',
  controls: {
    value: {
      type: ControlTypes.NUMBER,
      value: 10,
      min: 3,
      max: 22,
      step: 0.5,
      description: 'a numeric control',
    },
  },
};
