import React from 'react';
import { Markdown } from './Markdown';

export default {
  title: 'Components/Markdown',
  component: Markdown,
};

export const simple = () => (
  <Markdown>{`
# Header H1
## Header H2
### Header H3
#### Header H4
##### Header H5

some text 
`}</Markdown>
);
