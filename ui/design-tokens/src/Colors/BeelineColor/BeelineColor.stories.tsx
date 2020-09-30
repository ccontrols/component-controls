import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { BeelineColor, BeelineColorPalette } from './BeelineColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/BeelineColor',
  component: BeelineColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <BeelineColor name={name} color={color} />
);

overview.controls = {
  name: 'Brand',
  color: { type: ControlTypes.COLOR, value: '#2270ee' },
};

export const name = () => <BeelineColor name="Critical" color="#f94d32" />;

export const rgb = () => <BeelineColor name="text" color="rgb(0, 0, 0)" />;

export const rgba = () => (
  <BeelineColor name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl = () => (
  <BeelineColor name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla = () => (
  <BeelineColor name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette = () => (
  <BeelineColorPalette
    palette={{
      'Blue 5': { value: '#001b38' },
      'Blue Accessibility': { value: '#0352a0' },
      'Blue Primary': { value: '#0575e6' },
      'Blue 1': { value: '#4fa7ff' },
      'Blue 2': { value: '#85dfff' },
      'Blue 3': { value: '#ecf5ff' },
      'Blue 4': { value: '#FBFDFF' },
    }}
  />
);
