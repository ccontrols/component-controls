import React from 'react';
import { ControlTypes } from '../controls';
import { NumberControl } from './components/NumberControl';

export default {
  title: 'Controls/Number',
  component: NumberControl,
};

export const overview = ({ value }) => <div>{value}</div>;

overview.description = 'A simple story with a numeric property control';
overview.controls = {
  value: {
    type: ControlTypes.NUMBER,
    value: 10,
    description: 'a numeric control',
  },
};

export const range = ({ value }) => <div>{value}</div>;

range.description = 'A story with a range type numeric property control';
range.controls = {
  value: {
    type: ControlTypes.NUMBER,
    value: 10,
    min: 3,
    max: 22,
    range: true,
    description: 'a numeric control',
  },
};

export const step = ({ value }) => <div>{value}</div>;

step.description =
  'A story with a numeric property control with custom step value';
step.controls = {
  value: {
    type: ControlTypes.NUMBER,
    value: 10,
    min: 3,
    max: 22,
    step: 0.5,
    description: 'a numeric control',
  },
};
