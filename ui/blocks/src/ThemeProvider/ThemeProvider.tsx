import React, { FC } from 'react';
import {
  ThemeProvider as ComponentsThemeProvider,
  ThemeProviderProps,
} from '@component-controls/components';
import { useTheme } from '@component-controls/store';

export const ThemeProvider: FC<Omit<ThemeProviderProps, 'theme'>> = props => {
  const theme = useTheme();
  return <ComponentsThemeProvider theme={theme} {...props} />;
};
