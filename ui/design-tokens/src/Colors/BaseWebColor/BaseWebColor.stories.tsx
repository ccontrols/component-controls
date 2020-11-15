import React from 'react';
import { Example, ControlTypes, Document } from '@component-controls/core';
import { BaseWebColor, BaseWebColorPalette } from './BaseWebColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/BaseWebColor',
  component: BaseWebColor,
} as Document;

export const overview: Example<ColorProps> = ({ name, color }) => (
  <BaseWebColor name={name} color={color} />
);

overview.controls = {
  name: 'cobalt400',
  color: { type: ControlTypes.COLOR, value: '#0E1FC1' },
};

export const palette: Example = () => (
  <BaseWebColorPalette
    palette={{
      yellow50: '#FFFAF0',
      yellow100: '#FFF2D9',
      yellow200: '#FFE3AC',
      yellow300: '#FFCF70',
      yellow400: '#FFC043',
      yellow500: '#BC8B2C',
      yellow600: '#997328',
      yellow700: '#674D1B',
    }}
  />
);
