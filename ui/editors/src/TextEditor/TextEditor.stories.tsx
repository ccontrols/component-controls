import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { TextEditor } from './TextEditor';

export default {
  title: 'Editors/TextEditor',
  component: TextEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('Hello');
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.TEXT, value: state },
      }}
    >
      <TextEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const placeholder = () => {
  const [state, setState] = React.useState();
  return (
    <ControlsStateProvider
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
    </ControlsStateProvider>
  );
};

export const textArea = () => {
  const [state, setState] = React.useState();
  return (
    <ControlsStateProvider
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
    </ControlsStateProvider>
  );
};
