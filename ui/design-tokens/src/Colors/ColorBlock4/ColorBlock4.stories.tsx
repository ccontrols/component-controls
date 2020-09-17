import React from 'react';
import { ColorBlock4, ColorBlock4Palette } from './ColorBlock4';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/ColorBlock4',
  component: ColorBlock4,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorBlock4 name={name} color={color} />
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
  <ColorBlock4 name="Critical" color={{ name: 'brand', value: '#f94d32' }} />
);

export const rgb = () => <ColorBlock4 name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <ColorBlock4 name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl = () => (
  <ColorBlock4 name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <ColorBlock4 name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette = () => (
  <ColorBlock4Palette
    palette={{
      Critical: { value: '#f94d32', name: 'Red400' },
      Warning: { value: '#ffc902', name: 'Yellow400' },
      Success: { value: '#18a761', name: 'Green500' },
      Info: { value: '#2270ee', name: 'Blue400' },
      Border: { value: '#dfe0e1', name: 'Neutral60' },
      Accent: { value: '#f5f5f5', name: 'Neutral40' },
    }}
  />
);
