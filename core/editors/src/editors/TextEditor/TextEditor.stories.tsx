import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { TextEditor } from './TextEditor';

export default {
  title: 'Editors/TextEditor',
  component: TextEditor,
};

export const simple = () => {
  const [state, setState] = React.useState('Hello');
  return (
    <TextEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.TEXT, value: state }}
    />
  );
};

export const placeholder = () => {
  const [state, setState] = React.useState();
  return (
    <TextEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{
        type: ControlTypes.TEXT,
        value: state,
        placeholder: 'Enter some text',
      }}
    />
  );
};

export const textArea = () => {
  const [state, setState] = React.useState();
  return (
    <TextEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{
        type: ControlTypes.TEXT,
        value: state,
        rows: 4,
        placeholder: 'Enter multiple lines of text',
      }}
    />
  );
};
