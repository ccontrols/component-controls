import React from 'react';
import { CanvasColor, CanvasColorPalette } from './CanvasColor';
import { ColorProps } from '../types';

export default {
  title: 'Design Tokens/Colors/CanvasColor',
  component: CanvasColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <CanvasColor name={name} color={color} />
);

overview.controls = {
  name: { type: 'text', value: 'Primary' },
  color: {
    type: 'object',
    value: {
      name: { type: 'text', value: 'LORAX' },
      sass: { type: 'text', value: '$color-lorax' },
      value: { type: 'color', value: '#ff7a59' },
    },
  },
};

export const palette = () => (
  <CanvasColorPalette
    palette={{
      Primary: { value: '#ff8f59', name: 'SORBET', sass: '$color-sorbet' },
      Shade: {
        value: '#e68250',
        name: 'SORBET_DARK',
        sass: '$color-sorbet-dark',
      },
      'Medium Tint': {
        value: '#ffc7ac',
        name: 'SORBET_MEDIUM',
        sass: '$color-sorbet-medium',
      },
      'Light Tint': {
        value: '#fff3ee',
        name: 'SORBET_LIGHT',
        sass: '$color-sorbet-light',
      },
    }}
  />
);
