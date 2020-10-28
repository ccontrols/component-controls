import React from 'react';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { Example, ControlTypes } from '@component-controls/core';
import { SyntaxHighlighter, SyntaxHighlighterProps } from './SyntaxHighlighter';

export default {
  title: 'Components/SyntaxHighlighter',
  component: SyntaxHighlighter,
};

const source = `import { Button } from 'theme-ui';`;
export const overview: Example = ({
  children,
  dark,
}: SyntaxHighlighterProps) => (
  <SyntaxHighlighter dark={dark}>{children}</SyntaxHighlighter>
);

overview.controls = {
  children: {
    type: ControlTypes.TEXT,
    rows: 10,
    value: source,
    data: null,
  },
  dark: { type: ControlTypes.BOOLEAN },
};

export const theme: Example = () => (
  <SyntaxHighlighter theme={shadesOfPurple}>{source}</SyntaxHighlighter>
);
