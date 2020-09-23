import React from 'react';
import { AudiDSColor, AudiDSColorPalette } from './AudiDSColor';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/AudiDSColor',
  component: AudiDSColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <AudiDSColor name={name} color={color} />
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
  <AudiDSColor name="Critical" color={{ name: 'brand', value: '#f94d32' }} />
);

export const rgb = () => <AudiDSColor name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <AudiDSColor name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl = () => (
  <AudiDSColor name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <AudiDSColor name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette = () => (
  <AudiDSColorPalette
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
