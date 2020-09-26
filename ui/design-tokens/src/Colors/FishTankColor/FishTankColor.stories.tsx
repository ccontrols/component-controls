import React from 'react';
import { FishTankColor, FishTankColorPalette } from './FishTankColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/FishTankColor',
  component: FishTankColor,
};

export const overview = ({ name, color }: ColorProps) => (
  <FishTankColor name={name} color={color} />
);

overview.controls = {
  color: {
    type: 'object',
    value: {
      value: { type: 'color', value: '#0A7DAF' },
      sass: { type: 'color', value: '$color-selected-darkest' },
    },
  },
};

export const palette = () => (
  <FishTankColorPalette
    palette={{
      'highlight-1': {
        sass: '$color-highlight-1',
        value: '#FFF8B0',
      },
      'highlight-2': {
        sass: '$color-highlight-2',
        value: '#E3F7FF',
      },
      'highlight-3': {
        sass: '$color-highlight-3',
        value: '#E0FFE0',
      },
      action: {
        sass: '$color-action',
        value: '#3DA774',
      },
      warning: {
        sass: '$color-warning',
        value: '#FFB511',
      },
      error: {
        sass: '$color-error',
        value: '#E1483E',
      },
    }}
  />
);
