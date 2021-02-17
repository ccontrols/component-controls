import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ThemeProvider } from '../ThemeContext';
import { ColorMode } from '.';

export default {
  title: 'Components/ColorMode',
  component: ColorMode,
  category: 'Utilities',
} as Document;

export const overview: Example = () => (
  <ThemeProvider>
    <ColorMode />
  </ThemeProvider>
);
