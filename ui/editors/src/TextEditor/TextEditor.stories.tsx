import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { TextEditor } from './TextEditor';

export default {
  title: 'Editors/TextEditor',
  component: TextEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('Hello');
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.TEXT, value: state },
    },
    (name, newVal) => setState(newVal),
  );

  return <TextEditor name="prop" selector={selector} />;
};

export const placeholder = () => {
  const [state, setState] = React.useState();
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.TEXT,
        value: state,
        placeholder: 'Enter some text',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <TextEditor name="prop" selector={selector} />;
};

export const textArea = () => {
  const [state, setState] = React.useState();
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.TEXT,
        value: state,
        rows: 4,
        placeholder: 'Enter multiple lines of text',
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <TextEditor name="prop" selector={selector} />;
};
