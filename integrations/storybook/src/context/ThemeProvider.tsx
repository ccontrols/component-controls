import React from 'react';
import { ThemeProvider as ThemeUIProvider } from '@component-controls/components';
import { useIsDark } from './useIsDark';

export const ThemeProvider: React.FC = ({ children }) => {
  const isDark = useIsDark();
  return <ThemeUIProvider dark={isDark}>{children}</ThemeUIProvider>;
};
