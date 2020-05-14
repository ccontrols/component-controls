import React from 'react';
import { polaris } from '@theme-ui/presets';
import { get } from '@theme-ui/css';
import { merge } from '@theme-ui/core';

import { ThemeProvider as ThemeUIProvider, Theme } from 'theme-ui';

import { transparentize } from 'polished';

export interface ThemeContextProps {
  theme?: Theme;
  dark?: boolean;
}
export const ThemeContext = React.createContext<ThemeContextProps>({});

export interface ThemeProviderProps {
  dark?: boolean;
  theme?: Theme;
}

const applyColorMode = (theme: Theme, dark?: boolean) => {
  if (!dark) {
    return theme;
  }
  const modes = get(theme, 'colors.modes', {});
  return merge.all({}, theme, {
    colors: get(modes, 'dark', {}),
  });
};
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: customTheme,
  children,
  dark,
}) => {
  const theme = React.useMemo(() => {
    const defTheme = customTheme || polaris;
    return applyColorMode(
      {
        ...defTheme,
        initialColorModeName: dark ? 'dark' : 'default',
        forms: {
          checkbox: {
            cursor: 'pointer',
            border: (t: Theme) => `1px solid ${t?.colors?.text}`,
            '&:focus': {
              backgroundColor: 'transarent',
              boxShadow: (t: Theme) => `0 0 0 2px ${t?.colors?.primary}`,
              outline: 'none',
            },
          },
        },
        styles: {
          ...defTheme.styles,
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
            backgroundColor: 'header',
            color: 'text',
          },
          td: {
            padding: '16px 20px',
            borderBottom: 0,
          },
          tdgroup: {
            lineHeight: '24px',
            background: '#fafbfc',
            whiteSpace: 'nowrap',
            padding: '16px 20px',
            fontWeight: 700,
            fontFamily: 'monospace',
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
            bg: 'action',
          },
        },
        colors: {
          ...polaris.colors,
          gray: '#f6f6f6',
          header: '#edebe8',
          highlight: '#b3e6e4',
          action: '#3B817D',
          selected: '#027AC5',
          fadedText: '#69768C',
          shadow: transparentize(0.9, defTheme.colors.text),
          modes: {
            dark: {
              ...(defTheme.colors.modes ? defTheme.colors.modes.dark : {}),
              background: '#38404a',
              text: '#d3d4db',
              header: '#111111',
              fadedText: '#b3b4ba',
              shadow: transparentize(0.9, '#d3d4db'),
            },
          },
        },
      },
      dark,
    );
  }, [dark, customTheme]);
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
