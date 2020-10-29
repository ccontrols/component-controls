import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { GovUKColor, GovUKColorPalette } from './GovUKColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/GovUKColor',
  component: GovUKColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <GovUKColor name={name} color={color} />
);

overview.controls = {
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#1d70b8' },
      sass: '$govuk-brand-colour',
    },
  },
};

export const palette: Example = () => (
  <GovUKColorPalette
    palette={{
      'brand-colour': {
        sass: '$govuk-brand-colour',
        value: '#1d70b8',
      },
      'hover-colour': {
        sass: '$govuk-link-hover-colour',
        value: '#003078',
      },
      'visited-colour': {
        sass: '$govuk-link-visited-colour',
        value: '#4c2c92',
      },
      red: {
        varName: 'govuk-colour("red")',
        value: '#d4351c',
      },
    }}
  />
);
