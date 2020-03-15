import React from 'react';
import { polaris } from '@theme-ui/presets';
import { ThemeProvider as ThemeUIProvider, Theme } from 'theme-ui';
import { lighten } from 'polished';

export interface ThemeContextProps {
  theme?: Theme;
  dark?: boolean;
}
export const ThemeContext = React.createContext<ThemeContextProps>({});
export interface ThemeProviderProps {
  dark?: boolean;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  dark,
}) => {
  const theme = {
    ...polaris,
    styles: {
      ...polaris.styles,
      table: {
        margin: 0,
        borderCollapse: 'collapse',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'left',
        width: '100%',
        borderSpacing: '0px',
      },
      th: {
        border: 'none',
        padding: '10px 0 10px 20px',
      },
      tbody: {
        'tr:last-of-type': {
          borderBottom: 0,
        },
      },
      thead: {
        borderBottom: '1px solid #999',
        backgroundColor: '#f6f8fa',
      },
      td: {
        padding: '16px 20px',
        borderBottom: 0,
      },
      tdgroup: {
        fontWeight: 400,
        lineHeight: '24px',
        color: 'rgba(51,51,51,0.6)',
        background: '#fafbfc',
        whiteSpace: 'nowrap',
        padding: '16px 20px',
      },
      tr: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
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
      ...polaris.colors,
      highlight: '#339793',
      accent: '#1EA7FD',
      fadedText: lighten(0.25, polaris.colors.text),
      lightenPrimary: '#F6F9FC',
    },
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        dark,
      }}
    >
      <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
    </ThemeContext.Provider>
  );
};
