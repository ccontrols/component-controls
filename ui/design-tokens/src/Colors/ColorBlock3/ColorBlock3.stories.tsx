import React from 'react';
import { ColorBlock3, ColorBlock3Palette } from './ColorBlock3';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/ColorBlock3',
  component: ColorBlock3,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorBlock3 name={name} color={color} />
);

overview.controls = {
  name: { type: 'text' },
  color: { type: 'color', value: '#cf1322' },
};

export const name = () => <ColorBlock3 name="brand" color="#e95b54" />;

export const rgb = () => <ColorBlock3 name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <ColorBlock3 name="shadow" color="rgba(0, 0, 0, 0.5)" />
);

export const hsl = () => (
  <ColorBlock3 name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <ColorBlock3 name="accent" color="hsl(12, 10%, 50%, .6)" />
);

export const palette = () => (
  <ColorBlock3Palette
    palette={{
      'red-1': '#fff1f0',
      'red-2': '#ffccc7',
      'red-3': '#ffa39e',
      'red-4': '#ff7875',
      'red-5': '#ff4d4f',
      'red-6': '#f5222d',
      'red-7': '#cf1322',
      'red-8': '#a8071a',
    }}
  />
);
