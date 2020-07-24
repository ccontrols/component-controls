import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { DateEditor } from './DateEditor';

export default {
  title: 'Editors/DateEditor',
  component: DateEditor,
};

export const overview = () => {
  const [state, setState] = React.useState(new Date());
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.DATE, value: state },
    },
    (name, newVal) => setState(newVal),
  );

  return <DateEditor name="prop" selector={selector} />;
};

export const onlyDatePicker = () => {
  const [state, setState] = React.useState(new Date());
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.DATE, value: state, timePicker: false },
    },
    (name, newVal) => setState(newVal),
  );

  return <DateEditor name="prop" selector={selector} />;
};

export const onlyTimePicker = () => {
  const [state, setState] = React.useState(new Date());
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.DATE, value: state, datePicker: false },
    },
    (name, newVal) => setState(newVal),
  );

  return <DateEditor name="prop" selector={selector} />;
};
