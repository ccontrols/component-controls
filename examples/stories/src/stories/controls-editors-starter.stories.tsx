import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { VariantButton, VariantButtonProps } from '../components/VariantButton';
import design_notes from '../sections/design-notes.md';
import image_screenshot from './media/image_screenshot.jpg';

export default {
  title: 'ESM/Starter',
  author: 'atanasster',
  order: 0,
  component: VariantButton,
  plugins: {
    figma: [
      'https://www.figma.com/file/vgf0guEmC5IKtjHJKkRVSr/Button?node-id=0%3A1',
    ],
    notes: {
      title: 'Design brief',
      items: [design_notes],
    },
    images: [image_screenshot],
  },
  description: `This example demonstrates documentiing a hypotethical Button component that supports variants, icons, text, and padding`,
} as Document;

export const overview: Example<VariantButtonProps> = props => (
  <VariantButton {...props} />
);

overview.controls = {
  text: 'Button',
  icon: 'search',
  fontSize: {
    type: ControlTypes.NUMBER,
    data: { name: 'random.number', options: { min: 12, max: 32 } },
  },
};

overview.description =
  'You can play with the Button component by changing some of the properties in the **Controls** table below.';
