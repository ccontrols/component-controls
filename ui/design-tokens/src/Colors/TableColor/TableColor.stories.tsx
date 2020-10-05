import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { TableColor, TableColorPalette, ColorAALegend } from './TableColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/TableColor',
  component: TableColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <TableColor name={name} color={color} />
);

overview.controls = {
  name: 'primary',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#5c6ac4' },
      dark: { type: ControlTypes.COLOR, value: '#efefef' },
    },
  },
};

export const legend = () => <ColorAALegend />;

export const palette = () => (
  <TableColorPalette
    palette={{
      text: { value: '#454f5b', dark: '#d3d4db' },
      background: { value: '#ffffff', dark: '#38404a' },
      primary: { value: '#5c6ac4', dark: '#efefef' },
      secondary: { value: '#006fbb', dark: '#b4e1fa' },
      muted: { value: '#e6e6e6', dark: '#e6e6e6' },
      mutedText: { value: '#69768C', dark: '#c9cacf' },
      accent: '#f49342',
      darken: '#00044c',
      gray: { value: '#f6f6f6', dark: '#4d5866' },
      sidebar: { value: '#f6f6f6', dark: '#000000' },
      highlight: { value: '#d9f2f1', dark: '#b7ecec' },
      action: { value: '#3B817D', dark: '#d9f2f1' },
      selected: { value: '#027AC5', dark: '#b3d9ff' },
      shadow: { value: 'rgba(0, 0, 0, 0.1)', dark: 'rgba(211, 212, 219, 0.1)' },
    }}
  />
);
