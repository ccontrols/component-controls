import React, { FC } from 'react';
import {
  ThemeProvider as ComponentsThemeProvider,
  ThemeProviderProps as ComponentsThemeProviderProps,
} from '@component-controls/components';
import { useTheme } from '@component-controls/store';

export type ThemeProviderProps = Omit<ComponentsThemeProviderProps, 'theme'>;
export const ThemeProvider: FC<ThemeProviderProps> = props => {
  const theme = useTheme();
  return <ComponentsThemeProvider theme={theme} {...props} />;
};
