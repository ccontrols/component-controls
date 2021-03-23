import React from 'react';
import { Document, Example } from '@component-controls/core';
import { VariantButton, VariantButtonProps } from './VariantButton';

export default {
  title: 'VariantButton',
  component: VariantButton,
} as Document;

export const overview: Example<VariantButtonProps> = props => (
  <VariantButton {...props} />
);

overview.controls = {
  text: 'Button',
  icon: 'search',
};

export const primary: Example = () => (
  <VariantButton variant="primary" text="Primary" />
);

export const accent: Example = () => (
  <VariantButton variant="accent" text="Accent" />
);

export const disabled: Example = () => (
  <VariantButton variant="disabled" text="Disabled" />
);

export const success: Example = () => (
  <VariantButton variant="success" text="Success" />
);

export const error: Example = () => (
  <VariantButton variant="error" text="Error" />
);

export const warning: Example = () => (
  <VariantButton variant="error" text="Warning" />
);
