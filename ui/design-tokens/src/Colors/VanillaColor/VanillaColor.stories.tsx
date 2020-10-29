import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { VanillaColor, VanillaColorPalette } from './VanillaColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/VanillaColor',
  component: VanillaColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <VanillaColor name={name} color={color} />
);

overview.controls = {
  name: 'negative',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#C7162B' },
      sass: '$color-negative',
    },
  },
};

export const palette: Example = () => (
  <VanillaColorPalette
    palette={{
      'x-light': { value: '#FFF', sass: '$color-x-light' },
      brand: { value: '#333', sass: '$color-brand' },
      caution: { value: '#F99B11', sass: '$color-caution' },
      negative: { value: '#C7162B', sass: '$color-negative' },
      positive: { value: '#0E8420', sass: '$color-positive' },
      information: { value: '#06C', sass: '$color-information' },
      'navigation-background': {
        value: '#FFF',
        sass: '$color-navigation-background',
      },
    }}
  />
);
