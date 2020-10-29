import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { XColor, XColorPalette } from './XColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/XColor',
  component: XColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <XColor name={name} color={color} />
);

overview.controls = {
  name: 'Lady Black',
  color: { type: ControlTypes.COLOR, value: '#3C3C3B' },
};

export const palette: Example = () => (
  <XColorPalette
    palette={{
      'Dame Tangerine': '#FF5000',
      'Señor Purple': '#5F285A',
      'Baron Von Teal': '#1DE9B6',
      'Agent Cyan': '#18FFFF',
      'Madam Yellow': '#FFF500',
      'Pastor Pink': '#FF96B4',
      'Brigadier Blue': '#000A47',
    }}
  />
);
