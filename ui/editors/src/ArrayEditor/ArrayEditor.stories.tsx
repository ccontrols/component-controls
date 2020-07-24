import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { ArrayEditor } from './ArrayEditor';

export default {
  title: 'Editors/ArrayEditor',
  component: ArrayEditor,
};

export const overview = () => {
  const [state, setState] = React.useState([
    { name: 'Laptop' },
    { name: 'Book' },
    { name: 'Whiskey' },
  ]);
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.ARRAY,
        rowType: { name: { type: ControlTypes.TEXT } },
        value: state,
      },
    },
    (name, newVal) => setState(newVal),
  );
  return (
    <div>
      <ArrayEditor name="prop" selector={selector} />
      <ul>
        {state && state.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    </div>
  );
};
