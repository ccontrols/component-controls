import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { HelpScoutColor, HelpScoutColorPalette } from './HelpScoutColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/HelpScoutColor',
  component: HelpScoutColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <HelpScoutColor name={name} color={color} />
);

overview.controls = {
  name: 'Lavender',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#9FA6FF' },
      name: '500',
      primary: { type: ControlTypes.BOOLEAN, value: true },
    },
  },
};

export const palette: Example = () => (
  <HelpScoutColorPalette
    palette={{
      lavender: { value: '#9FA6FF', name: '500', primary: true },
      'lavender-100': { value: '#F9F9FF', name: '100' },
      'lavender-200': { value: '#EBECFF', name: '200' },
      'lavender-300': { value: '#D9DCFD', name: '300' },
      'lavender-400': { value: '#B9BEFF', name: '400' },
      'lavender-500': { value: '#9FA6FF', name: '500' },
      'lavender-600': { value: '#818AEC', name: '600' },
      'lavender-700': { value: '#6269C5', name: '700' },
      'lavender-800': { value: '#404996', name: '800' },
      'lavender-900': { value: '#232A5C', name: '900' },
    }}
  />
);
