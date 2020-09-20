import React from 'react';
import { ColorBlock5, ColorBlock5Palette } from './ColorBlock5';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/ColorBlock5',
  component: ColorBlock5,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorBlock5 name={name} color={color} />
);

overview.controls = {
  name: { type: 'text', value: 'Brand' },
  color: {
    type: 'object',
    value: {
      value: { type: 'color', value: '#2270ee' },
      name: { type: 'text', value: 'Blue400' },
    },
  },
};

export const name = () => (
  <ColorBlock5 name="Critical" color={{ name: 'brand', value: '#f94d32' }} />
);

export const rgb = () => <ColorBlock5 name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <ColorBlock5 name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl = () => (
  <ColorBlock5 name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <ColorBlock5 name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette = () => (
  <ColorBlock5Palette
    palette={{
      'Poppy surprise': { value: '#FF5630', name: 'R300' },
      'Golden state': { value: '#FFAB00', name: 'Y300' },
      'Fine pine': { value: '#36B37E', name: 'G300' },
      Tamarama: { value: '#00B8D9', name: 'T300' },
      "Da' juice": { value: '#6554C0', name: 'P300' },
      Critical: { value: '#f94d32', name: 'Red400' },
    }}
  />
);
