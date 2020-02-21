import React from 'react';

import { Source, SourceProps, themes } from './Source';

export default {
  title: 'Blocks/Source',
  component: Source,
};

export const simpleSource = ({ language, children, theme }: SourceProps) => {
  return (
    <Source language={language} theme={theme}>
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
  parameters: {
    controls: {
      language: { type: 'options', options: languages, value: 'jsx' },
      children: {
        type: 'text',
        rows: 10,
        value: `
export const sample = () => {
  const [state, setState] = React.useState(false);
  return (
    <BooleanEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.BOOLEAN, value: state }}
    />
  );
};      
      `,
      },
      theme: { type: 'options', options: Object.keys(themes) },
    },
  },
};
