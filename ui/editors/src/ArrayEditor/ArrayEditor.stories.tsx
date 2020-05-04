import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ConrolsContextProvider } from '../context';
import { ArrayEditor } from './ArrayEditor';

export default {
  title: 'Editors/ArrayEditor',
  component: ArrayEditor,
};

export const overview = () => {
  const [state, setState] = React.useState(['Laptop', 'Book', 'Whiskey']);
  return (
    <ConrolsContextProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.ARRAY, value: state },
      }}
    >
      <ArrayEditor name="prop" />
      <ul>{state && state.map(item => <li key={item}>{item}</li>)}</ul>
    </ConrolsContextProvider>
  );
};
