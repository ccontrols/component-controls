import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { NumberEditor } from './NumberEditor';

export default {
  title: 'Editors/NumberEditor',
  component: NumberEditor,
};

export const overview = () => {
  const [value, setState] = React.useState(10);
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.NUMBER, value, min: 3, max: 22 },
    },
    (name, newVal) => setState(newVal),
  );

  return <NumberEditor name="prop" selector={selector} />;
};

export const range = () => {
  const [value, setState] = React.useState(10);
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.NUMBER,
        value,
        min: 3,
        max: 22,
        range: true,
      },
    },
    (name, newVal) => setState(newVal),
  );

  return <NumberEditor name="prop" selector={selector} />;
};

export const step = () => {
  const [value, setState] = React.useState(10);
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.NUMBER, value, min: 3, max: 22, step: 0.5 },
    },
    (name, newVal) => setState(newVal),
  );

  return <NumberEditor name="prop" selector={selector} />;
};
