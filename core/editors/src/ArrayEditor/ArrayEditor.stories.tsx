import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ArrayEditor } from './ArrayEditor';

export default {
  title: 'Basics/PropEditors/ArrayEditor',
  component: ArrayEditor,
};

export const sample = () => {
  const [state, setState] = React.useState(['Laptop', 'Book', 'Whiskey']);
  return (
    <>
      <ArrayEditor
        name="prop"
        onChange={(name, newVal) => setState(newVal)}
        prop={{ type: ControlTypes.ARRAY, value: state }}
      />
      <ul>{state && state.map(item => <li key={item}>{item}</li>)}</ul>
    </>
  );
};
