import React from 'react';
import { BackpackColor, BackpackColorPalette } from './BackpackColor';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/BackpackColor',
  component: BackpackColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <BackpackColor name={name} color={color} />
);

overview.controls = {
  name: { type: 'text', value: 'Brand' },
  color: {
    type: 'object',
    value: {
      value: { type: 'color', value: '#084eb2' },
      dark: {
        type: 'object',
        value: {
          value: { type: 'color', value: '#cddff8' },
          name: { type: 'text', value: 'Blue800' },
        },
      },
      name: { type: 'text', value: 'Blue400' },
    },
  },
};

export const name = () => (
  <BackpackColor name="Critical" color={{ name: 'brand', value: '#f94d32' }} />
);

export const rgb = () => <BackpackColor name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <BackpackColor name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl = () => (
  <BackpackColor name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <BackpackColor name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette = () => (
  <BackpackColorPalette
    palette={{
      'Poppy surprise': { value: '#FF5630', name: 'R300' },
      'Golden state': { value: '#FFAB00', name: 'Y300' },
      'Fine pine': { value: '#36B37E', name: 'G300' },
      Tamarama: { value: '#00B8D9', name: 'T300', dark: '#084eb2' },
      "Da' juice": { value: '#6554C0', name: 'P300' },
      Critical: { value: '#f94d32', name: 'Red400' },
    }}
  />
);
