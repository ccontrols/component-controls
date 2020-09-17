import React from 'react';
import { ColorItemVert, ColorItemVertPalette } from './ColorItemVert';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/ColorItemVert',
  component: ColorItemVert,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorItemVert name={name} color={color} />
);

overview.controls = {
  name: { type: 'text' },
  color: { type: 'color', value: '#cf1322' },
};

export const name = () => <ColorItemVert name="brand" color="#e95b54" />;

export const rgb = () => <ColorItemVert name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <ColorItemVert name="shadow" color="rgba(0, 0, 0, 0.5)" />
);

export const hsl = () => (
  <ColorItemVert name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <ColorItemVert name="accent" color="hsl(12, 10%, 50%, .6)" />
);

export const palette = () => (
  <ColorItemVertPalette
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
