import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Description } from '.';

export default {
  title: 'Components/Description',
  component: Description,
  category: 'Typography',
} as Document;

export const overview: Example = () => (
  <Description>Some **description** markdown</Description>
);
