import React from 'react';
import { polaris as theme } from '@theme-ui/presets';
import { ThemeProvider as ThemeUIProvider } from 'theme-ui';
import { lighten } from 'polished';

export const ThemeProvider: React.FC = ({ children }) => (
  <ThemeUIProvider
    theme={{
      ...theme,
      styles: {
        ...theme.styles,
        table: {
          margin: 0,
          borderCollapse: 'collapse',
          fontSize: '14px',
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          borderSpacing: '0px',
        },
        td: {
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '20px',
        },
        tr: {
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
      buttons: {
        primary: {
          color: '#333',
          bg: '#f3f3f3',
          borderRadius: 5,
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset',
        },
        secondary: {
          bg: 'highlight',
        },
      },
      colors: {
        ...theme.colors,
        accent: '#1EA7FD',
        fadedText: lighten(0.25, theme.colors.text),
        lightenPrimary: '#F6F9FC',
      },
    }}
  >
    {children}
  </ThemeUIProvider>
);
