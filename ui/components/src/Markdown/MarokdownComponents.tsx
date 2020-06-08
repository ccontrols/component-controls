/* eslint-disable react/display-name */
/** @jsx jsx */
import { ComponentType } from 'react';
import { jsx, Box, Image } from 'theme-ui';
import { SyntaxHighlighter } from '../SyntaxHighlighter';

export interface MarkdownComponentType {
  [key: string]: ComponentType<any>;
}
export const markdownComponents: MarkdownComponentType = {
  code: SyntaxHighlighter,
  p: ({ children }) => (
    <Box as="p" sx={{ my: 2 }}>
      {children}
    </Box>
  ),
  img: props => {
    return <Image {...props} />;
  },
};
