import React from 'react';
import { Example } from '@component-controls/core';
import { ThemeProvider } from '../ThemeContext';
import { ColorMode } from '.';

export default {
  title: 'Components/ColorMode',
  component: ColorMode,
};

export const overview: Example = () => (
  <ThemeProvider>
    <ColorMode />
  </ThemeProvider>
);
