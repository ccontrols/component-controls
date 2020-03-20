/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
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
  p: ({ children }) => (
    <Box as="p" sx={{ my: 2 }}>
      {children}
    </Box>
  ),
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
