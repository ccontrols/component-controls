import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { PajamasColor, PajamasColorPalette } from './PajamasColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/PajamasColor',
  component: PajamasColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <PajamasColor name={name} color={color} />
);

overview.controls = {
  name: '$blue-50',
  color: { type: ControlTypes.COLOR, value: '#e9f3fc' },
};

export const palette: Example = () => (
  <PajamasColorPalette
    palette={{
      '$orange-50': '#fdf1dd',
      '$orange-100': '#f5d9a8',
      '$orange-200': '#e9be74',
      '$orange-300': '#d99530',
      '$orange-400': '#c17d10',
      '$orange-500': '#ab6100',
      '$orange-600': '#9e5400',
      '$orange-700': '#8f4700',
      '$orange-800': '#703800',
      '$orange-900': '#5c2900',
      '$orange-950': '#421f00',
    }}
  />
);
