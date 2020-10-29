import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { SolidColor, SolidColorPalette } from './SolidColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/SolidColor',
  component: SolidColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <SolidColor name={name} color={color} />
);

overview.controls = {
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#ee3322' },
      sass: '$fill-red',
      css: '.fill-red',
    },
  },
};
export const palette: Example = () => (
  <SolidColorPalette
    palette={{
      fillRed: { value: '#ee3322', sass: '$fill-red', css: '.fill-red' },
      fillRedLighter: {
        value: '#feebe9',
        sass: '$fill-red-lighter',
        css: '.fill-red-lighter',
      },
      fillPink: { value: '#e40c78', sass: '$fill-pink', css: '.fill-pink' },
      fillBlue: { value: '#0f65ef', sass: '$fill-blue', css: '.fill-blue' },
      fillPurple: {
        value: '#6645dd',
        sass: '$fill-purple',
        css: '.fill-purple',
      },
      fillYellow: {
        value: '#ffee00',
        sass: ' $fill-yellow',
        css: '.fill-promoted-orange',
      },
      fillTwitter: {
        value: '#55acee',
        sass: '$fill-twitter',
        css: '.fill-twitter',
      },
    }}
  />
);
