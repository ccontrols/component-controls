import React from 'react';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { Source, SourceProps } from './Source';

export default {
  title: 'Components/Source',
  component: Source,
};

const source = `export const sample = () => {
  const [state, setState] = React.useState(false);
  return (
    <BooleanEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.BOOLEAN, value: state }}
    />
  );
};`;
export const simpleSource = ({ language, children, dark }: SourceProps) => {
  return (
    <Source language={language} dark={dark}>
      {children}
    </Source>
  );
};

const languages: string[] = [
  'markup',
  'bash',
  'clike',
  'c',
  'cpp',
  'css',
  'javascript',
  'jsx',
  'coffeescript',
  'actionscript',
  'css-extr',
  'diff',
  'git',
  'go',
  'graphql',
  'handlebars',
  'json',
  'less',
  'makefile',
  'markdown',
  'objectivec',
  'ocaml',
  'python',
  'reason',
  'sass',
  'scss',
  'sql',
  'stylus',
  'tsx',
  'typescript',
  'wasm',
  'yaml',
];

simpleSource.story = {
  controls: {
    language: { type: 'options', options: languages, value: 'jsx' },
    dark: { type: 'boolean' },
    children: {
      type: 'text',
      rows: 10,
      value: source,
      data: null,
    },
  },
};

export const theme = () => <Source theme={shadesOfPurple}>{source}</Source>;
