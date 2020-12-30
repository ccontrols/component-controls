import React, { FC } from 'react';
import { ThemeProvider as ThemeUIProvider } from '@component-controls/blocks';

export const ThemeProvider: FC = ({ children }) => {
  return <ThemeUIProvider>{children}</ThemeUIProvider>;
};
