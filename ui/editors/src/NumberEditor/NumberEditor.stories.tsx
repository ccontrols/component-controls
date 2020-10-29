import React from 'react';
import { ControlTypes, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { NumberEditor } from './NumberEditor';

export default {
  title: 'Editors/NumberEditor',
  component: NumberEditor,
};

export const overview: Example = () => {
  const [value, setValue] = React.useState(10);
  return (
    <ControlsStateProvider
      onChange={(nama, newValue) => setValue(newValue)}
      controls={{
        prop: { type: ControlTypes.NUMBER, value, min: 3, max: 22 },
      }}
    >
      <NumberEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const range: Example = () => {
  const [value, setValue] = React.useState(10);
  return (
    <ControlsStateProvider
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
    </ControlsStateProvider>
  );
};

export const step: Example = () => {
  const [value, setValue] = React.useState(10);
  return (
    <ControlsStateProvider
      onChange={(nama, newValue) => setValue(newValue)}
      controls={{
        prop: { type: ControlTypes.NUMBER, value, min: 3, max: 22, step: 0.5 },
      }}
    >
      <NumberEditor name="prop" />
    </ControlsStateProvider>
  );
};
