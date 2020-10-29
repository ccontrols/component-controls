import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { CometColor, CometColorPalette } from './CometColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/CometColor',
  component: CometColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <CometColor name={name} color={color} />
);

overview.controls = {
  name: 'emerald-40',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      name: '40',
      sass: '$comet-color-emerald-40',
      value: { type: ControlTypes.COLOR, value: '#2F9D89' },
    },
  },
};

export const palette: Example = () => (
  <CometColorPalette
    palette={{
      'midnight-05': {
        name: '05',
        value: '#020D17',
        sass: '$comet-color-midnight-05',
      },
      'midnight-10': {
        name: '10',
        value: '#041B2F',
        sass: '$comet-color-midnight-10',
      },
      'midnight-20': {
        name: '20',
        value: '#08365E',
        sass: '$comet-color-midnight-20',
      },
      'midnight-30': {
        name: '30',
        value: '#0C518D',
        sass: '$comet-color-midnight-30',
      },
      'midnight-40': {
        name: '40',
        value: '#106CBC',
        sass: '$comet-color-midnight-40',
      },
      'midnight-50': {
        name: '50',
        value: '#1487EB',
        sass: '$comet-color-midnight-50',
      },
      'midnight-60': {
        name: '60',
        value: '#439FEF',
        sass: '$comet-color-midnight-60',
      },
      'midnight-70': {
        name: '70',
        value: '#72B7F3',
        sass: '$comet-color-midnight-70',
      },
      'midnight-80': {
        name: '80',
        value: '#A1CFF7',
        sass: '$comet-color-midnight-80',
      },
      'midnight-90': {
        name: '90',
        value: '#D0E7FB',
        sass: '$comet-color-midnight-90',
      },
    }}
  />
);
