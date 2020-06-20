/* eslint-disable react/display-name */
/** @jsx jsx */
import { ComponentType } from 'react';
import { jsx } from 'theme-ui';
import {
  Label,
  Flex,
  Box,
  Heading,
  Button,
  Card,
  Image,
  Avatar,
} from 'theme-ui';
import { Language } from 'prism-react-renderer';
import { SyntaxHighlighter } from '../SyntaxHighlighter';
import { Source } from '../Source';

export interface MDXLanguageType {
  [key: string]: Language;
}
const mdxLanguageMap: MDXLanguageType = {
  bash: 'bash',
  c: 'c',
  cpp: 'cpp',
  'C++': 'cpp',
  css: 'css',
  js: 'javascript',
  jsx: 'jsx',
  'coffee-script': 'coffeescript',
  coffeescript: 'coffeescript',
  coffee: 'coffeescript',
  actionscript3: 'actionscript',
  diff: 'diff',
  go: 'go',
  json: 'json',
  less: 'less',
  make: 'makefile',
  Makefile: 'makefile',
  markdown: 'markdown',
  objectivec: 'objectivec',
  python: 'python',
  scss: 'scss',
  sql: 'sql',
  yaml: 'yaml',
};
export interface MarkdownComponentType {
  [key: string]: ComponentType<any>;
}
export const markdownComponents: MarkdownComponentType = {
  code: props => {
    return <SyntaxHighlighter {...props} />;
  },
  pre: props => {
    const codeProps = props?.children?.props?.children
      ? props.children.props
      : props;
    const { className = '', children } = codeProps || {};
    const arrClass = className.split('-');
    const mdxLanguage = arrClass.length === 2 ? arrClass[1] : 'js';

    const language = mdxLanguageMap[mdxLanguage] || mdxLanguage;
    return <Source language={language}>{children}</Source>;
  },
  avatar: Avatar,
  image: Image,
  box: Box,
  button: Button,
  card: Card,
  flex: Flex,
  heading: Heading,
  label: Label,
};
