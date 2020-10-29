/* eslint-disable react/display-name */
import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { MorningstarColor, MorningstarColorPalette } from './MorningstarColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/MorningstarColor',
  component: MorningstarColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <MorningstarColor name={name} color={color} />
);

overview.controls = {
  name: 'Informational',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#f2f2f2' },
      sass: '$mds-feedback-color-info',
    },
  },
};

export const palette: Example = () => (
  <MorningstarColorPalette
    palette={{
      Informational: {
        value: '#c9c7c5',
        sass: '$mds-feedback-color-info',
      },
      Error: {
        value: '#ff0000',
        sass: '$mds-feedback-color-error',
      },
      'Error Background': {
        value: '#ffe5e5',
        sass: '$mds-feedback-color-error-background',
      },
      Warning: {
        value: '#f5c400',
        sass: '$mds-feedback-color-warning',
      },
      'Warning Background': {
        value: '#fef9e5',
        sass: '$mds-feedback-color-warning-background',
      },
      Success: {
        value: '#00af41',
        sass: '$mds-feedback-color-success',
      },
      'Success Background': {
        value: '#e5f7eb',
        sass: '$mds-feedback-color-success-background',
      },
      Active: {
        value: '#004376',
        sass: '$mds-interactive-color-primary-active',
      },
    }}
  />
);
