import React, { ChangeEvent } from 'react';
import {
  ControlTypes,
  ComponentControlBoolean,
} from '@component-controls/core';
import { PropertyEditor } from './types';
import { useControl, useControlSelector } from './state';
import { addPropertyEditor, getPropertyEditor } from './prop-factory';

export default {
  title: 'Editors/prop-factory',
};

const CheckboxEditor: PropertyEditor = ({ name, selector }) => {
  const [control, onChange] = useControl<ComponentControlBoolean>(
    name,
    selector,
  );
  return (
    <input
      type="checkbox"
      id={name}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
      }}
      checked={control.value ?? false}
    />
  );
};

addPropertyEditor(ControlTypes.BOOLEAN, CheckboxEditor);
export const overview = () => {
  const [state, setState] = React.useState(false);
  const Component = getPropertyEditor(ControlTypes.BOOLEAN);
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.BOOLEAN, value: state },
    },
    (name: any, newVal: React.SetStateAction<boolean>) => setState(newVal),
  );

  return <Component name="prop" selector={selector} />;
};
