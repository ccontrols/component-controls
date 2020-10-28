import React from 'react';
import { Example } from '@component-controls/core';
import { Markdown } from './Markdown';
import { ThemeProvider } from '../ThemeContext';

export default {
  title: 'Components/Markdown',
  component: Markdown,
};

export const overview: Example = () => (
  <ThemeProvider>
    <Markdown>{`
# Header H1
## Header H2
### Header H3
#### Header H4
##### Header H5

some text 

\`@theme-ui\`    
`}</Markdown>
  </ThemeProvider>
);

export const image: Example = () => (
  <ThemeProvider>
    <Markdown>
      ![integrated in
      storybook](https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/images/component-controls.gif)
    </Markdown>
  </ThemeProvider>
);
