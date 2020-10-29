import React from 'react';
import { ControlTypes, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { ArrayEditor } from './ArrayEditor';

export default {
  title: 'Editors/ArrayEditor',
  component: ArrayEditor,
};

export const overview: Example = () => {
  const [state, setState] = React.useState([
    { name: 'Laptop' },
    { name: 'Book' },
    { name: 'Whiskey' },
  ]);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.ARRAY,
          rowType: { name: { type: ControlTypes.TEXT } },
          value: state,
        },
      }}
    >
      <ul>
        {state && state.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
      <ArrayEditor name="prop" />
    </ControlsStateProvider>
  );
};
