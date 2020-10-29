import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { AnvilColor, AnvilColorPalette } from './AnvilColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/AnvilColor',
  component: AnvilColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <AnvilColor name={name} color={color} />
);

overview.controls = {
  name: 'Brand',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#2270ee' },
      name: 'Blue400',
    },
  },
};

export const name: Example = () => (
  <AnvilColor name="Critical" color={{ name: 'brand', value: '#f94d32' }} />
);

export const rgb: Example = () => (
  <AnvilColor name="text" color="rgb(0, 0, 0)" />
);

export const rgba: Example = () => (
  <AnvilColor name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl: Example = () => (
  <AnvilColor name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla: Example = () => (
  <AnvilColor name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette: Example = () => (
  <AnvilColorPalette
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
