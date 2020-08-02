import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { BlockContextProvider } from './BlockContext';

export const ControlsProvider: React.FC = ({ children }) => {
  return (
    <BlockContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </BlockContextProvider>
  );
};
