import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Donut, DonutProps } from './Donut';

export default {
  title: 'Components/Donut',
  component: Donut,
  category: 'Display',
} as Document;

export const overview: Example<DonutProps> = props => <Donut {...props} />;

overview.controls = {
  size: 128,
  strokeWidth: 2,
  value: 0.5,
  min: 0,
  max: 1,
  title: 'some text',
};
