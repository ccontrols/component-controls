import React from 'react';
import { addParameters } from '@storybook/react';
import { ThemeProvider } from '@component-controls/storybook';

export const decorators = [story => <ThemeProvider>{story()}</ThemeProvider>];

const categories = [
  'ESM',
  'MDX',
  'Components',
  'Blocks',
  'Design Tokens',
  'Plugins',
  'Controls',
  'Editors',
  'Application',
];
addParameters({
  options: {
    storySort: (a, b) => {
      const aKind = a[1].kind.split('/')[0];
      const aIndex = categories.findIndex(c => c === aKind);
      const bKind = b[1].kind.split('/')[0];
      const bIndex = categories.findIndex(c => c === bKind);
      return aIndex - bIndex;
    },
  },
});
