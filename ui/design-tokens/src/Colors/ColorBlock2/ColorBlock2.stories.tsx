import React from 'react';
import { ColorBlock2, ColorBlock2Palette } from './ColorBlock2';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/ColorBlock2',
  component: ColorBlock2,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorBlock2 name={name} color={color} />
);

overview.controls = {
  name: { type: 'text' },
  color: { type: 'color', value: '#cf1322' },
};

export const name = () => <ColorBlock2 name="brand" color="#e95b54" />;

export const rgb = () => <ColorBlock2 name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <ColorBlock2 name="shadow" color="rgba(0, 0, 0, 0.5)" />
);

export const hsl = () => (
  <ColorBlock2 name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <ColorBlock2 name="accent" color="hsl(12, 10%, 50%, .6)" />
);

export const palette = () => (
  <ColorBlock2Palette
    palette={{
      'green-1': '#f6ffed',
      'green-2': '#d9f7be',
      'green-3': '#b7eb8f',
      'green-4': '#95de64',
      'green-5': '#73d13d',
      'green-6': '#52c41a',
      'green-7': '#389e0d',
      'green-8': '#237804',
      'green-9': '#135200',
      'green-10': '#092b00',
    }}
  />
);
