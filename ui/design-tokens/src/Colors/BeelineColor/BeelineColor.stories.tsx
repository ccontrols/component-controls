import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { BeelineColor, BeelineColorPalette } from './BeelineColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/BeelineColor',
  component: BeelineColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <BeelineColor name={name} color={color} />
);

overview.controls = {
  name: 'Brand',
  color: { type: ControlTypes.COLOR, value: '#2270ee' },
};

export const name: Example = () => (
  <BeelineColor name="Critical" color="#f94d32" />
);

export const rgb: Example = () => (
  <BeelineColor name="text" color="rgb(0, 0, 0)" />
);

export const rgba: Example = () => (
  <BeelineColor name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl: Example = () => (
  <BeelineColor name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla: Example = () => (
  <BeelineColor name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette: Example = () => (
  <BeelineColorPalette
    palette={{
      'Blue 5': '#001b38',
      'Blue Accessibility': '#0352a0',
      'Blue Primary': '#0575e6',
      'Blue 1': '#4fa7ff',
      'Blue 2': '#85dfff',
      'Blue 3': '#ecf5ff',
      'Blue 4': '#FBFDFF',
    }}
  />
);
