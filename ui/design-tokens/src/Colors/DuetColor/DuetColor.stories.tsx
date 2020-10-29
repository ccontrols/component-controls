import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { DuetColor, DuetColorPalette } from './DuetColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/DuetColor',
  component: DuetColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <DuetColor name={name} color={color} />
);

overview.controls = {
  name: 'Primary Blue Dark',
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#004d80' },
      description:
        'Dark version of primary blue that is accessible with white. Most commonly used to indicate hover and active states of an item with primary blue background.',
      sass: '$color-primary-dark',
      varName: 'var(--color-primary-dark)',
      status: {
        type: ControlTypes.OPTIONS,
        options: ['ok', 'warning', 'error'],
        value: 'ok',
      },
    },
  },
};

export const palette: Example = () => (
  <DuetColorPalette
    palette={{
      'Status Danger': {
        value: '#de2362',
        description:
          'Danger red that is accessible with white. Only used in special cases like form validation and messaging.',
        sass: '$color-danger',
        varName: 'var(--color-danger)',
        status: 'ok',
      },
      'Status Warning': {
        value: '#f7b228',
        description:
          'Warning orange (non-accessible) is only used in special cases like form validation and messaging.',
        sass: '$color-warning',
        varName: 'var(--color-warning)',
        status: 'ok',
      },
      'Status Success': {
        value: '#00875a',
        description:
          'Success green that is accessible with white. Only used in special cases like form validation and messaging.',
        sass: '$color-success',
        varName: 'var(--color-success)',
        status: 'ok',
      },
      'Gray Darker': {
        value: '#657787',
        description:
          'Darker gray that is accessible with white when used for text. Most commonly used as a text color for interface help texts.',
        sass: '$color-gray-darker',
        varName: 'var(--color-gray-darker)',
        status: 'ok',
      },
      'Gray Dark': {
        value: '#909599',
        description:
          'Dark gray is used for form borders that need to pass WCAG Level AA non-text contrast requirements. Please note that this color isn’t accessible when used for text.',
        sass: '$color-gray-dark',
        varName: 'var(--color-gray-dark)',
        status: 'ok',
      },
      'Data 01': {
        value: '#7a01c4',
        description:
          'Data visualization color that is accessible with white. Please note that this color should not be used for any other purpose.',
        sass: '$color-data-01',
        varName: 'var(--color-data-01)',
        status: 'warning',
      },
      'Data 06': {
        value: '#c21565',
        description:
          'Data visualization color that is accessible with white. Please note that this color should not be used for any other purpose.',
        sass: '$color-data-06',
        varName: 'var(--color-data-06)',
        status: 'error',
      },
    }}
  />
);
