import React from 'react';
import { ThemeProvider as ThemeUIProvider } from '@component-controls/blocks';

export const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeUIProvider>{children}</ThemeUIProvider>;
};
