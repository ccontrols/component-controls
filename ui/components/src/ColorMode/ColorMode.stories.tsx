import React from 'react';
import { ThemeProvider } from '../ThemeContext';
import { ColorMode } from '.';

export default {
  title: 'Components/ColorMode',
  component: ColorMode,
};

export const overview = () => (
  <ThemeProvider>
    <ColorMode />
  </ThemeProvider>
);
