import React from 'react';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { SyntaxHighlighter, SyntaxHighlighterProps } from './SyntaxHighlighter';

export default {
  title: 'Components/SyntaxHighlighter',
  component: SyntaxHighlighter,
};

const source = `import { Button } from 'theme-ui';`;
export const overview = ({ children, dark }: SyntaxHighlighterProps) => (
  <SyntaxHighlighter dark={dark}>{children}</SyntaxHighlighter>
);

overview.story = {
  controls: {
    children: {
      type: 'text',
      rows: 10,
      value: source,
      data: null,
    },
    dark: { type: 'boolean' },
  },
};

export const theme = () => (
  <SyntaxHighlighter theme={shadesOfPurple}>{source}</SyntaxHighlighter>
);
