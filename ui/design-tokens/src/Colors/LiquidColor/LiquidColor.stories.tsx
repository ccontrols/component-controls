import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { LiquidColor, LiquidColorPalette } from './LiquidColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/LiquidColor',
  component: LiquidColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <LiquidColor name={name} color={color} />
);

overview.controls = {
  name: 'Rich Purple',
  color: { type: ControlTypes.COLOR, value: '#503291' },
};

export const palette: Example = () => (
  <LiquidColorPalette
    palette={{
      'Vibrant Magenta': '#EB3C96',
      'Rich Blue': '#0F69AF',
      'Vibrant Cyan': '#2DBECD',
      'Vibrant Green': '#A5CD50',
      'Rich Red': '#E61E50',
      'Vibrant Yellow': '#FFC832',
      'Rich Green': '#149B5F',
    }}
  />
);
