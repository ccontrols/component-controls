import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { SkylineColor, SkylineColorPalette } from './SkylineColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/SkylineColor',
  component: SkylineColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <SkylineColor name={name} color={color} />
);

overview.controls = {
  name: 'Gray 600',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#757575' },
      description:
        'Dark version of primary blue that is accessible with white. Most commonly used to indicate hover and active states of an item with primary blue background.',
      scss: 'get-gray(600)',
    },
  },
};

export const palette: Example = () => (
  <SkylineColorPalette
    palette={{
      Green: {
        value: '#1a801b',
        scss: 'get-hue(green)',
      },
      'Green Light': {
        value: '#f4fce3',
        scss: 'get-hue(green, light)',
      },
      Yellow: {
        value: '#fcc419',
        scss: 'get-hue(yellow)',
      },
      'Yellow Light': {
        value: '#fff9db',
        scss: 'get-hue(yellow, light)',
      },
      'Gray 500': {
        value: '#8b8b8b',
        scss: 'get-gray(500)',
      },
      'Gray 600': {
        value: '#757575',
        scss: 'get-gray(600)',
      },
      'Gray 700': {
        value: '#616161',
        scss: 'get-gray(700)',
      },
    }}
  />
);
