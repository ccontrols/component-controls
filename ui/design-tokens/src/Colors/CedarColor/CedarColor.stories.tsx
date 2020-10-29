import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { CedarColor, CedarColorPalette } from './CedarColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/CedarColor',
  component: CedarColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <CedarColor name={name} color={color} />
);

overview.controls = {
  name: 'cobalt400',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#225c4e' },
      name: 'cdr-color-text-button-primary-hover',
      description: 'Text color for the hover state of primary buttons',
    },
  },
};

export const palette: Example = () => (
  <CedarColorPalette
    palette={{
      primary: {
        name: 'cdr-color-text-primary',
        value: 'rgba(12, 11, 8, 0.75)',
        description: 'The default, primary text color',
      },
      secondary: {
        name: 'cdr-color-text-secondary',
        value: 'rgba(66, 59, 47, 0.75)',
        description: 'The secondary text color',
      },
      brand: {
        name: 'cdr-color-text-brand',
        value: '#113731',
        description: 'Text set in our primary brand color',
      },
      sale: {
        name: 'cdr-color-text-sale',
        value: '#cc0000',
        description: 'The color of sale text',
      },
      inverse: {
        name: 'cdr-color-text-inverse',
        value: '#f9f8f6',
        description: 'Text color on dark background',
      },
      disabled: {
        name: 'cdr-color-text-disabled',
        value: '#d1cbbd',
        description: 'The color of text when it is disabled',
      },
      success: {
        name: 'cdr-color-text-success',
        value: '#2e6b34',
        description: 'Color of success messages',
      },
      warning: {
        name: 'cdr-color-text-warning',
        value: '#854714',
        description: 'Color of warning messages',
      },
    }}
  />
);
