import React from 'react';
import { ColorBlock8, ColorBlock8Palette } from './ColorBlock8';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/ColorBlock8',
  component: ColorBlock8,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorBlock8 name={name} color={color} />
);

overview.controls = {
  name: { type: 'text', value: 'cobalt400' },
  color: { type: 'color', value: '#0E1FC1' },
};

export const palette = () => (
  <ColorBlock8Palette
    palette={{
      yellow50: '#FFFAF0',
      yellow100: '#FFF2D9',
      yellow200: '#FFE3AC',
      yellow300: '#FFCF70',
      yellow400: '#FFC043',
      yellow500: '#BC8B2C',
      yellow600: '#997328',
      yellow700: '#674D1B',
    }}
  />
);
