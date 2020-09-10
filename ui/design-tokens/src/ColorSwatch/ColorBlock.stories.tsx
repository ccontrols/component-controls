import React from 'react';
import { ColorSwatch, ColorBlockProps } from './ColorSwatch';

export default {
  title: 'Design Tokens/ColorSwatch',
  component: ColorSwatch,
};

export const overview = ({ name, color }: ColorBlockProps) => (
  <ColorSwatch name={name} color={color} />
);

overview.controls = {
  name: { type: 'text' },
  color: { type: 'color', value: '#fbce4a' },
};
