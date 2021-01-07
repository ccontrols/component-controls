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
    images: {
      title: 'Screenshots',
      items: [image_screenshot],
    },
  },
  description: `This example demonstrates documenting a hypothetical Button component that supports variants, icons, text, and padding`,
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
  'In the Playground, you can view the source code, apply zoom or background...';
