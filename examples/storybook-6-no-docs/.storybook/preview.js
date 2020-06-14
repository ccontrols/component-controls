import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { ThemeProvider } from '@component-controls/storybook';

addDecorator(story => (
  <ThemeProvider>{story()}</ThemeProvider>
));
const categories = ['Introduction', 'Application','Controls','Blocks', 'Editors', 'Components', 'App components', 'Plugins']
addParameters({
  dependencies: { hideEmpty: true },
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