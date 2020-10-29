import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { OPatternColor, OPatternColorPalette } from './OPatternColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/OPatternColor',
  component: OPatternColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <OPatternColor name={name} color={color} />
);

overview.controls = {
  name: 'Weather',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#990099' },
      sass: '$weather-color',
    },
  },
};

export const palette: Example = () => (
  <OPatternColorPalette
    palette={{
      Primary: {
        value: '#107CB2',
        sass: '$primary-color',
      },
      PrimaryLight: {
        value: '#b7d8e8',
        description: '30% of $primary-color',
        sass: '$primary-color-light',
      },
      Alert: {
        value: '#D8400F',
        sass: '$alert-color',
      },
      AlertLight: {
        value: '#f3c6b7',
        description: '30% of $alert-color',
        sass: '$alert-color-light',
      },
      Weather: {
        value: '#990099',
        sass: '$weather-color',
      },
    }}
  />
);
