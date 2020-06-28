/* eslint-disable react/display-name */
/** @jsx jsx */
import { ComponentType } from 'react';
import { preToCodeBlock } from 'mdx-utils';
import { jsx } from 'theme-ui';
import { Label, Button, Image } from 'theme-ui';
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
  JSX: 'jsx',
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
  mdx: 'jsx',
  objectivec: 'objectivec',
  python: 'python',
  scss: 'scss',
  sql: 'sql',
  yaml: 'yaml',
};
export interface MarkdownComponentType {
  [key: string]: ComponentType<any>;
}
const paramsFromClassName = (className: string = ``) => {
  const [lang = ``, params = ``] = className.split(`:`);

  return [
    // @ts-ignore
    lang
      .split(`language-`)
      .pop()
      .split(`{`)
      .shift(),
  ].concat(
    // @ts-ignore
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`);
      // @ts-ignore
      merged[key] = value;
      return merged;
    }, {}),
  );
};
export const markdownComponents: MarkdownComponentType = {
  code: props => {
    return <SyntaxHighlighter {...props} />;
  },
  pre: props => {
    const mdxProps = preToCodeBlock(props);
    if (!mdxProps) {
      return <pre {...props} />;
    }
    const { codeString = '', metastring, className } = mdxProps;
    const [language = 'jsx', ...rest] = paramsFromClassName(className);
    const otherProps = Array.isArray(rest)
      ? rest.reduce(
          (acc, p) =>
            typeof p === 'object' ? { ...acc, ...(p as object) } : acc,
          {},
        )
      : undefined;
    return (
      <Source
        language={mdxLanguageMap[language] || language}
        metastring={metastring}
        {...otherProps}
      >
        {codeString.trimRight()}
      </Source>
    );
  },
  image: Image,
  button: Button,
  label: Label,
};
