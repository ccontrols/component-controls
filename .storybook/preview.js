import React from 'react'
import { addDecorator, addParameters } from '@storybook/react';
import { polaris as theme} from '@theme-ui/presets';
import { ThemeProvider } from 'theme-ui';
import { lighten, darken } from 'polished';


addDecorator((story) => {
  console.log(theme);
  return (
    <ThemeProvider theme={{
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
         }  
      },
      colors: {
        ...theme.colors,
        fadedText: lighten(0.25, theme.colors.text),
        lightenPrimary: lighten(0.4, theme.colors.primary),

      },
    }}>
      {story()}
    </ThemeProvider>
  );
})

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});