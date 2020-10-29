import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { PatternFlyColor, PatternFlyColorPalette } from './PatternFlyColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/PatternFlyColor',
  component: PatternFlyColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <PatternFlyColor name={name} color={color} />
);

overview.controls = {
  color: {
    type: ControlTypes.OBJECT,
    value: {
      value: { type: ControlTypes.COLOR, value: '#1d70b8' },
      css: '--pf-global--link--Color',
      description:
        'This color is used as a standard text and icon color as well as a hover state color for icon buttons. It is most commonly used as a text color for many components and application screens.',
    },
  },
};

export const palette: Example = () => (
  <PatternFlyColorPalette
    palette={{
      hover: {
        css: '--pf-global--primary-color--200',
        name: 'Hover',
        value: '#004080',
        description:
          'This color is most commonly used as the hover or focus state for components that use the default primary color, such as buttons and dropdowns.',
      },
      link: {
        css: '--pf-global--primary-color--100',
        value: '#0066CC',
        description:
          'This color is most commonly used as a link text and icon color for many components, such as navigation and accordions. Blue icons use the same primary color variable as the blue text.',
      },
      dangerAlertIcon: {
        css: '--pf-global--primary-color--100',
        name: 'alert icon',
        value: '#470000',
        description:
          'This color is used as the icon color for the danger alert component.',
      },
      dangerAlertTitle: {
        css: '--pf-global--danger-color--200',
        name: 'alert title',
        value: '#A30000',
        description:
          'This color is used as the title color for the danger alert as well as the background color for the danger button.',
      },
      dangerAlertIconBackground: {
        css: '--pf-global--danger-color--100',
        name: 'alert icon background',
        value: '#C9190B',
        description:
          'This color is most commonly used as an indication of danger or error for components, such as alerts and form inputs.',
      },
    }}
  />
);
