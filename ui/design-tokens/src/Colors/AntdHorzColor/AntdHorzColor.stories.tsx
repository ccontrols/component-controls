import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { AntdHorzColor, AntdHorzColorPalette } from './AntdHorzColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/AntdHorzColor',
  component: AntdHorzColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <AntdHorzColor name={name} color={color} />
);

overview.controls = {
  name: { type: ControlTypes.TEXT },
  color: { type: ControlTypes.COLOR, value: '#cf1322' },
};

export const name: Example = () => (
  <AntdHorzColor name="brand" color="#e95b54" />
);

export const rgb: Example = () => (
  <AntdHorzColor name="text" color="rgb(0, 0, 0)" />
);

export const rgba: Example = () => (
  <AntdHorzColor name="shadow" color="rgba(0, 0, 0, 0.5)" />
);

export const hsl: Example = () => (
  <AntdHorzColor name="accent" color="hsl(12, 10%, 50%)" />
);

export const hsla: Example = () => (
  <AntdHorzColor name="accent" color="hsl(12, 10%, 50%, .6)" />
);

export const palette: Example = () => (
  <AntdHorzColorPalette
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
