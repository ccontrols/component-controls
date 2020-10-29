import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { ETradeColor, ETradeColorPalette } from './ETradeColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/ETradeColor',
  component: ETradeColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <ETradeColor name={name} color={color} />
);

overview.controls = {
  name: 'Negative red',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#cc0000' },
      name: 'Error state',
      description: 'Data trending down',
      sass: '$negative',
    },
  },
};

export const palette: Example = () => (
  <ETradeColorPalette
    palette={{
      Purple: {
        value: '#5627d8',
        description: 'Text links and other interactive elements',
        sass: '$link-color',
      },
      'Negative red': {
        value: '#cc0000',
        name: 'Error state',
        description: 'Data trending down',
        sass: '$negative',
      },
      'Positive green': {
        value: '#107a1b',
        name: 'Success state',
        description: 'Data trending up',
        sass: '$positive',
        css: '.text-positive',
      },
      'Body gray': {
        value: '#242424',
        description: 'Headers and body text',
        sass: '$body-text-color',
        css: '.body-text-color',
      },
      'Background accent color': {
        value: '#f1ecff',
        description: 'Background color',
        sass: '$background-accent-color-1',
        css: '.background-accent-color-1',
      },
    }}
  />
);
