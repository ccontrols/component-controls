import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { DateEditor } from './DateEditor';

export default {
  title: 'Basics/PropEditors/DateEditor',
  component: DateEditor,
};

export const sample = () => {
  const [state, setState] = React.useState(new Date());
  return (
    <DateEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.DATE, value: state }}
    />
  );
};

export const onlyDatePicker = () => {
  const [state, setState] = React.useState(new Date());
  return (
    <DateEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.DATE, value: state, timePicker: false }}
    />
  );
};

export const onlyTimePicker = () => {
  const [state, setState] = React.useState(new Date());
  return (
    <DateEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.DATE, value: state, datePicker: false }}
    />
  );
};
