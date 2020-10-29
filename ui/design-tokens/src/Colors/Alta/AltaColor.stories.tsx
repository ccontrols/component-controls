import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { AltaColor, AltaColorPalette } from './AltaColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/AltaColor',
  component: AltaColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <AltaColor name={name} color={color} />
);

overview.controls = {
  name: { type: ControlTypes.TEXT },
  color: { type: ControlTypes.COLOR, value: '#fbce4a' },
};

export const name: Example = () => <AltaColor name="brand" color="#e95b54" />;

export const rgb: Example = () => (
  <AltaColor name="text" color="rgb(0, 0, 0)" />
);

export const rgba: Example = () => (
  <AltaColor name="shadow" color="rgba(0, 0, 0, 0.1)" />
);

export const hsl: Example = () => (
  <AltaColor name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla: Example = () => (
  <AltaColor name="accent" color="hsl(12, 10%, 50%, .3)" />
);

export const palette: Example = () => (
  <AltaColorPalette
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
