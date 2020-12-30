import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'ESM/Smart Typescript',
  author: 'atanasster',
  component: Button,
  order: 4,
} as Document;

export const allProps: Example<ButtonProps> = props => <Button {...props} />;

export const onlyColors: Example<ButtonProps> = props => (
  <Button {...props}>Choose colors</Button>
);

onlyColors.smartControls = {
  include: ['color', 'backgroundColor'],
};

export const noColors: Example<ButtonProps> = props => (
  <Button {...props}>Choose colors</Button>
);

noColors.smartControls = {
  exclude: ['color', 'backgroundColor'],
};

// this story does not have parameters, and smart controls will be disabled for it
export const noProps: Example<ButtonProps> = () => (
  <Button>No properties</Button>
);
