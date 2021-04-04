import React, { useState } from 'react';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { TextEditor } from './TextEditor';

export default {
  title: 'Editors/TextEditor',
  component: TextEditor,
} as Document;

export const overview: Example = () => {
  const [state, setState] = useState('Hello');
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

export const placeholder: Example = () => {
  const [state, setState] = useState();
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

export const textArea: Example = () => {
  const [state, setState] = useState();
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
