import React from 'react';
import { ColorSwatch } from './ColorSwatch';
import { ColorBlockProps } from '../types';

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

export const name = () => <ColorSwatch name="brand" color="#e95b54" />;

export const rgb = () => <ColorSwatch name="text" color="rgb(0, 0, 0)" />;

/*
export const rgba = () => (
  <ColorSwatch name="shadown" color="rgba(0, 0, 0, 0.1)" />
);
*/
