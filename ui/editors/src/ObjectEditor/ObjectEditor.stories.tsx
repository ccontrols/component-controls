import React from 'react';
import { ControlTypes, ComponentControls } from '@component-controls/core';
import { useControlSelector } from '../state';
import { ObjectEditor } from './ObjectEditor';

export default {
  title: 'Editors/ObjectEditor',
  component: ObjectEditor,
};

export const overview = () => {
  const [state, setState] = React.useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.OBJECT, value: state },
    },
    (name, newVal) => setState(newVal),
  );

  return <ObjectEditor name="prop" selector={selector} />;
};

export const editLabel = () => {
  const [state, setState] = React.useState<ComponentControls>({
    border: { type: ControlTypes.TEXT, value: '2px dashed silver' },
    borderRadius: { type: ControlTypes.NUMBER, value: 10 },
    padding: { type: ControlTypes.NUMBER, value: 10 },
  });
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.OBJECT, value: state },
    },
    (name, newVal) => setState(newVal),
  );

  return (
    <ObjectEditor name="prop" selector={selector} editLabel="Click to edit" />
  );
};
