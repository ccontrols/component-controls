import React from 'react';
import { ColorBlock, ColorBlockProps } from './ColorBlock';

export default {
  title: 'Design Tokens/ColorBlock',
  component: ColorBlock,
};

export const overview = ({ color, name }: ColorBlockProps) => (
  <ColorBlock name={name} color={color} />
);

overview.colors = {
  name: { type: 'text' },
  color: { type: 'color', value: 'blue' },
};
