/* eslint-disable react/display-name */
import React, { FC } from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import { MDXProvider, Components } from '@mdx-js/react';

export interface MarkdownProps {
  children: string;
  components?: Components;
}
export const Markdown: FC<MarkdownProps> = ({ children, components }) => (
  <MDXProvider components={components}>
    <MarkdownToJSX>{children}</MarkdownToJSX>
  </MDXProvider>
);
