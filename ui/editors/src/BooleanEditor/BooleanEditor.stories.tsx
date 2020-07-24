import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { BooleanEditor } from './BooleanEditor';

export default {
  title: 'Editors/BooleanEditor',
  component: BooleanEditor,
};

export const overview = () => {
  const [state, setState] = React.useState(false);
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.BOOLEAN, value: state },
    },
    (name, newVal) => setState(newVal),
  );
  return <BooleanEditor name="prop" selector={selector} />;
};
