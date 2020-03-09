/* eslint-disable react/display-name */
import React, { FC } from 'react';
import MarkdownToJSX, { MarkdownOptions } from 'markdown-to-jsx';
import { SyntaxHighlighter } from '../SyntaxHighlighter';

export interface MarkdownProps {
  /**
   * the markdown code is passed as a children prop
   */
  children: string;
  /**
   * components to customize the markdown display
   */
  components?: MarkdownOptions['overrides'];
}

const defaultComponents: MarkdownOptions['overrides'] = {
  code: SyntaxHighlighter,
};

/**
 * MDX display component that works at run time
 * uses `markdown-to-jsx` to compile MDX
 */
export const Markdown: FC<MarkdownProps> = ({ children, components }) => (
  <MarkdownToJSX
    options={{
      forceBlock: true,
      overrides: { ...defaultComponents, ...components },
    }}
  >
    {children}
  </MarkdownToJSX>
);
