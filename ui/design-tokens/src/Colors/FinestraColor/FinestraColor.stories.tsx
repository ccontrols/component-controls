import React from 'react';
import { FinestraColor, FinestraColorPalette } from './FinestraColor';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/FinestraColor',
  component: FinestraColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <FinestraColor name={name} color={color} />
);

overview.controls = {
  name: 'V 100',
  color: {
    type: 'object',
    value: {
      name: 'V',
      value: { type: 'color', value: '#cf1322' },
      primary: { type: 'boolean', value: true },
    },
  },
};

export const palette = () => (
  <FinestraColorPalette
    palette={{
      'C 100 - dark': {
        value: '#2D2D2D',
      },
      'C 100': {
        value: '#414141',
        name: 'C',
        primary: true,
      },
      'C 75': {
        value: '#707070',
      },
      'C 50': {
        value: '#9F9F9F',
      },
      'C 25': {
        value: '#CECECE',
      },
      'C 10': {
        value: '#EAEAEA',
      },
      'C 2': {
        value: '#FAFAFA',
      },
    }}
  />
);
