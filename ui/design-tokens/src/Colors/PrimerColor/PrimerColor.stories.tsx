import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { PrimerColor, PrimerColorPalette } from './PrimerColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/PrimerColor',
  component: PrimerColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <PrimerColor name={name} color={color} />
);

overview.controls = {
  name: 'Yellow',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#ffd33d' },
      sass: '$yellow-500',
      primary: { type: ControlTypes.BOOLEAN, value: true },
    },
  },
};

export const palette: Example = () => (
  <PrimerColorPalette
    palette={{
      Yellow: { value: '#ffd33d', sass: '$yellow-500', primary: true },
      'yellow-000': { value: '#fffdef', sass: '$yellow-000' },
      'yellow-100': { value: '#fffbdd', sass: '$yellow-100' },
      'yellow-200': { value: '#fff5b1', sass: '$yellow-200' },
      'yellow-300': { value: '#ffea7f', sass: '$yellow-300' },
      'yellow-400': { value: '#ffdf5d', sass: '$yellow-400' },
      'yellow-500': { value: '#ffd33d', sass: '$yellow-500' },
      'yellow-600': { value: '#f9c513', sass: '$yellow-600' },
      'yellow-700': { value: '#dbab09', sass: '$yellow-700' },
      'yellow-800': { value: '#b08800', sass: '$yellow-800' },
      'yellow-900': { value: '#735c0f', sass: '$yellow-900' },
    }}
  />
);
