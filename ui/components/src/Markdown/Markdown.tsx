/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import MarkdownToJSX, { MarkdownOptions } from 'markdown-to-jsx';
import { SyntaxHighlighter } from '../SyntaxHighlighter';

export interface MarkdownProps {
  /**
   * the markdown source code is passed as a children pro.
   */
  children: string;
  /**
   * components to customize the markdown display.
   */
  components?: MarkdownOptions['overrides'];
}

const defaultComponents: MarkdownOptions['overrides'] = {
  code: SyntaxHighlighter,
  p: ({ children }) => (
    <Box as="p" sx={{ my: 2 }}>
      {children}
    </Box>
  ),
};

/**
 * Markdown display component to compile and display markdown at run-time.
 * Uses `markdown-to-jsx` to compile the markdown.
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
