import React from 'react';
import { ControlTypes } from '@component-controls/specification';
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

export const props = () => {
  return (
    <Source
      args={[{ value: 'props' }]}
    >{`export const story = props => (<Source {...props} />)`}</Source>
  );
};

const code = `
export const story = ({ height, weight, style: { border, color }}) => (
  <Source
    height={height}
    weight={weight}
    border={border}
    color={color}
  />);
`;

export const multiProps = () => {
  return (
    <Source
      args={[
        { value: 'height' },
        { value: 'weight' },
        { value: 'border' },
        { value: 'color' },
      ]}
    >
      {code}
    </Source>
  );
};

export const noPrettier = () => {
  return (
    <Source
      prettier={null}
      args={[
        { value: 'height' },
        { value: 'weight' },
        { value: 'border' },
        { value: 'color' },
      ]}
    >
      {code}
    </Source>
  );
};

export const prettierFormatting = () => {
  return (
    <Source
      prettier={{
        tabWidth: 4,
        bracketSpacing: false,
        printWidth: 40,
      }}
      args={[
        { value: 'height' },
        { value: 'weight' },
        { value: 'border' },
        { value: 'color' },
      ]}
    >
      {code}
    </Source>
  );
};

export const controlsValues = () => {
  return (
    <Source
      prettier={null}
      args={[
        {
          loc: {
            end: {
              column: 43,
              line: 0,
            },
            start: {
              column: 30,
              line: 0,
            },
          },
          name: undefined,
          value: [
            {
              loc: {
                end: {
                  column: 36,
                  line: 0,
                },
                start: {
                  column: 32,
                  line: 0,
                },
              },
              name: 'name',
              usage: [
                {
                  loc: {
                    end: {
                      column: 65,
                      line: 0,
                    },
                    start: {
                      column: 61,
                      line: 0,
                    },
                  },
                },
              ],
              value: 'name',
            },
            {
              loc: {
                end: {
                  column: 41,
                  line: 0,
                },
                start: {
                  column: 38,
                  line: 0,
                },
              },
              name: 'age',
              usage: [
                {
                  loc: {
                    end: {
                      column: 75,
                      line: 0,
                    },
                    start: {
                      column: 72,
                      line: 0,
                    },
                  },
                },
              ],
              value: 'age',
            },
          ],
        },
      ]}
      controls={{
        name: { type: ControlTypes.TEXT, value: 'Sam', defaultValue: 'Tom' },
        age: { type: ControlTypes.NUMBER, value: 19, defaultValue: 18 },
      }}
    >
      {`      export const myStory = ({ name, age }) => <Story name={name} age={age} />;`}
    </Source>
  );
};
