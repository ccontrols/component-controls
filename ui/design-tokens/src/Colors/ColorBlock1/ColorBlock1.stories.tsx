import React from 'react';
import { ColorBlock1, ColorBlock1Palette } from './ColorBlock1';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/ColorBlock1',
  component: ColorBlock1,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorBlock1 name={name} color={color} />
);

overview.controls = {
  name: { type: 'text' },
  color: { type: 'color', value: '#fbce4a' },
};

export const name = () => <ColorBlock1 name="brand" color="#e95b54" />;

export const rgb = () => <ColorBlock1 name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <ColorBlock1 name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl = () => (
  <ColorBlock1 name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <ColorBlock1 name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette = () => (
  <ColorBlock1Palette
    palette={{
      'color-1': '#fbce4a',
      'color-2': '#fcfbe8',
      'color-3': '#fff4d5',
      'color-4': '#f6cab7',
      'color-5': '#ec96ad',
      'color-6': '#ca589d',
    }}
  />
);
