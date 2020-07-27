import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { DateEditor } from './DateEditor';

export default {
  title: 'Editors/DateEditor',
  component: DateEditor,
};

export const overview = () => {
  const [state, setState] = React.useState(new Date());
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.DATE, value: state },
      }}
    >
      <DateEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const onlyDatePicker = () => {
  const [state, setState] = React.useState(new Date());
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.DATE, value: state, timePicker: false },
      }}
    >
      <DateEditor name="prop" />
    </ControlsStateProvider>
  );
};

export const onlyTimePicker = () => {
  const [state, setState] = React.useState(new Date());
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: { type: ControlTypes.DATE, value: state, datePicker: false },
      }}
    >
      <DateEditor name="prop" />
    </ControlsStateProvider>
  );
};
