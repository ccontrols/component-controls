import React from 'react';
import { ColorItemHorz, ColorItemHorzPalette } from './ColorItemHorz';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/ColorItemHorz',
  component: ColorItemHorz,
};

export const overview = ({ name, color }: ColorProps) => (
  <ColorItemHorz name={name} color={color} />
);

overview.controls = {
  name: { type: 'text' },
  color: { type: 'color', value: '#cf1322' },
};

export const name = () => <ColorItemHorz name="brand" color="#e95b54" />;

export const rgb = () => <ColorItemHorz name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <ColorItemHorz name="shadow" color="rgba(0, 0, 0, 0.5)" />
);

export const hsl = () => (
  <ColorItemHorz name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <ColorItemHorz name="accent" color="hsl(12, 10%, 50%, .6)" />
);

export const palette = () => (
  <ColorItemHorzPalette
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
