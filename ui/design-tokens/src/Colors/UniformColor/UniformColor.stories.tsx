import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { UniformColor, UniformColorPalette } from './UniformColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/UniformColor',
  component: UniformColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <UniformColor name={name} color={color} />
);

overview.controls = {
  name: 'Weather',
  color: { type: ControlTypes.COLOR, value: '#990099' },
};

export const palette: Example = () => (
  <UniformColorPalette
    palette={{
      Primary: '#107CB2',
      PrimaryLight: '#b7d8e8',
      Alert: '#D8400F',
      AlertLight: '#f3c6b7',
      Weather: '#990099',
    }}
  />
);
