import React from 'react';
import { ThemeProvider } from '@component-controls/components';
import { ColorMode } from '.';

export default {
  title: 'App components/ColorMode',
  component: ColorMode,
};

export const overview = () => (
  <ThemeProvider>
    <ColorMode />
  </ThemeProvider>
);
