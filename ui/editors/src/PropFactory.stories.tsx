import React, { ChangeEvent } from 'react';
import {
  ControlTypes,
  ComponentControlBoolean,
  Example,
} from '@component-controls/core';
import { useControl, ControlsStateProvider } from '@component-controls/store';
import {} from '@component-controls/store';
import { PropertyEditor } from './types';

import { addPropertyEditor, getPropertyEditor } from './prop-factory';

export default {
  title: 'Editors/Custom Control',
};

const CheckboxEditor: PropertyEditor = ({ name }) => {
  const [control, onChange] = useControl<ComponentControlBoolean>(name);
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
export const overview: Example = () => {
  const [state, setState] = React.useState(false);
  const Component = getPropertyEditor(ControlTypes.BOOLEAN);
  return (
    <ControlsStateProvider
      onChange={(name: any, newVal: React.SetStateAction<boolean>) =>
        setState(newVal)
      }
      controls={{
        prop: { type: ControlTypes.BOOLEAN, value: state },
      }}
    >
      <Component name="prop" />
    </ControlsStateProvider>
  );
};
