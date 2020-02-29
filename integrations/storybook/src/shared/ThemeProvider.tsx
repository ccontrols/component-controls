import React from 'react';
import { getLuminance } from 'polished';
import { ThemeContext, Theme } from '@storybook/theming';
import { ThemeProvider as ThemeUIProvider } from '@component-controls/blocks';

export const ThemeProvider: React.FC = ({ children }) => {
  const { background: { content = '#ffffff' } = {} } = React.useContext<Theme>(
    ThemeContext as any,
  );
  return (
    <ThemeUIProvider dark={getLuminance(content) < 0.5}>
      {children}
    </ThemeUIProvider>
  );
};
