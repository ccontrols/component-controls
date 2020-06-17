import React, { ChangeEvent } from 'react';
import { ControlTypes } from '@component-controls/core';
import { PropertyEditor } from './types';
import { ConrolsContextProvider, useControlContext } from './context';
import { addPropertyEditor, getPropertyEditor } from './prop-factory';

export default {
  title: 'Editors/prop-factory',
};

const CheckboxEditor: PropertyEditor = ({ name }) => {
  const { control, onChange } = useControlContext({ name });
  return (
    <input
      type="checkbox"
      id={name}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(name, e.target.checked);
      }}
      checked={control.value ?? false}
    />
  );
};

addPropertyEditor(ControlTypes.BOOLEAN, CheckboxEditor);
export const overview = () => {
  const [state, setState] = React.useState(false);
  const Component = getPropertyEditor(ControlTypes.BOOLEAN);
  return (
    <ConrolsContextProvider
      onChange={(name: any, newVal: React.SetStateAction<boolean>) =>
        setState(newVal)
      }
      controls={{
        prop: { type: ControlTypes.BOOLEAN, value: state },
      }}
    >
      <Component name="prop" />
    </ConrolsContextProvider>
  );
};
