import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ConrolsContextProvider } from '../context';
import { NumberEditor } from './NumberEditor';

export default {
  title: 'Editors/NumberEditor',
  component: NumberEditor,
};

export const overview = () => {
  const [value, setValue] = React.useState(10);
  return (
    <ConrolsContextProvider
      onChange={(nama, newValue) => setValue(newValue)}
      controls={{
        prop: { type: ControlTypes.NUMBER, value, min: 3, max: 22 },
      }}
    >
      <NumberEditor name="prop" />
    </ConrolsContextProvider>
  );
};

export const range = () => {
  const [value, setValue] = React.useState(10);
  return (
    <ConrolsContextProvider
      onChange={(nama, newValue) => setValue(newValue)}
      controls={{
        prop: {
          type: ControlTypes.NUMBER,
          value,
          min: 3,
          max: 22,
          range: true,
        },
      }}
    >
      <NumberEditor name="prop" />
    </ConrolsContextProvider>
  );
};

export const step = () => {
  const [value, setValue] = React.useState(10);
  return (
    <ConrolsContextProvider
      onChange={(nama, newValue) => setValue(newValue)}
      controls={{
        prop: { type: ControlTypes.NUMBER, value, min: 3, max: 22, step: 0.5 },
      }}
    >
      <NumberEditor name="prop" />
    </ConrolsContextProvider>
  );
};
