import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { VariantButton, VariantButtonProps } from './VariantButton';
import design_notes from './design-assets/design-notes.md';
import design_img from './design-assets/design-img.jpg';

export default {
  title: 'ESM/Starter',
  author: 'atanasster',
  order: 0,
  component: VariantButton,
  plugins: {
    figma: [
      {
        url: 'https://www.figma.com/file/vgf0guEmC5IKtjHJKkRVSr',
        title: 'figma design file',
      },
    ],
    notes: {
      title: 'Design brief',
      items: [design_notes],
    },
    images: {
      title: 'Screenshots',
      items: [{ src: design_img, 'aria-label': 'design resource image' }],
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
