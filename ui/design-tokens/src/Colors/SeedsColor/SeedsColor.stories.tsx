import React from 'react';
import { Example, ControlTypes } from '@component-controls/core';
import { SeedsColor, SeedsColorPalette } from './SeedsColor';
import { ColorProps } from '../../types';

export default {
  title: 'Design Tokens/Colors/SeedsColor',
  component: SeedsColor,
};

export const overview: Example = ({ name, color }: ColorProps) => (
  <SeedsColor name={name} color={color} />
);

overview.controls = {
  name: 'green.700',
  color: {
    type: ControlTypes.OBJECT,

    value: {
      variants: {
        type: ControlTypes.OPTIONS,
        display: 'inline-check',
        options: ['green.700', 'green.800'],
        value: ['green.700', 'green.800'],
      },
      value: { type: ControlTypes.COLOR, value: '#0ca750' },
      description:
        'Green 700 is the core of our brand identity. Use Green 700 for primary actions and buttons, links, for indicating progress and representing authentication.',
    },
  },
};

export const palette: Example = () => (
  <SeedsColorPalette
    palette={{
      'Purple.700': {
        value: '#6f5ed3',
        variants: ['purple.700'],
        description:
          'Use Purple 700 to highlight or draw attention to important information that has no interaction. When using our primary purple with our primary green, green should always be the dominant color of the two.',
      },

      'Aqua.1100': {
        value: '#002838',
        variants: ['aqua.1100'],
        description:
          'Use Aqua 1100 for dark backgrounds and solid drop shadows. Aqua 1100 should not be used on text.',
      },
      'Aqua.600': {
        value: '#0797ae',
        variants: ['aqua.600'],
        description:
          'Use Aqua 600 for in-app text links and to highlight or draw attention to important information that has no interaction. Aqua is also the primary spot illustration color and is used for color blocking.',
      },
      Primary: {
        value: '#2079c3',
        name: 'Primary CTA',
        variants: ['cta.primary', 'blue.700'],
      },
      Secondary: {
        value: '#364141',
        name: 'Secondary CTA',
        variants: ['cta.scondary', 'neutral.800'],
      },
    }}
  />
);
