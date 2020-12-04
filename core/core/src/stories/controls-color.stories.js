import React from 'react';
import { ControlTypes } from '../controls';
import { ColorControl } from './components/ColorControl';

export default {
  title: 'Controls/Color',
  component: ColorControl,
};

export const overview = ({ color }) => (
  <div style={{ width: 50, height: 50, backgroundColor: color }} />
);

overview.description = 'A simple story that draws a colored rectangle box';
overview.controls = {
  color: {
    type: ControlTypes.COLOR,
    value: 'red',
    description: 'a color control',
  },
};
