import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { ConrolsContextProvider } from '../context';
import { TextEditor } from './TextEditor';

export default {
  title: 'Editors/TextEditor',
  component: TextEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('Hello');
  return (
    <ConrolsContextProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.TEXT, value: state },
      }}
    >
      <TextEditor name="prop" />
    </ConrolsContextProvider>
  );
};

export const placeholder = () => {
  const [state, setState] = React.useState();
  return (
    <ConrolsContextProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.TEXT,
          value: state,
          placeholder: 'Enter some text',
        },
      }}
    >
      <TextEditor name="prop" />
    </ConrolsContextProvider>
  );
};

export const textArea = () => {
  const [state, setState] = React.useState();
  return (
    <ConrolsContextProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.TEXT,
          value: state,
          rows: 4,
          placeholder: 'Enter multiple lines of text',
        },
      }}
    >
      <TextEditor name="prop" />
    </ConrolsContextProvider>
  );
};
