import React, { ChangeEvent } from 'react';
import {
  ControlTypes,
  ComponentControlBoolean,
} from '@component-controls/specification';
import { PropertyControlProps, PropertyEditor } from './types';
import { addPropertyEditor, getPropertyEditor } from './prop-factory';

export default {
  title: 'Editors/prop-factory',
};

interface CheckBoxEditorProps extends PropertyControlProps {
  prop: ComponentControlBoolean;
}

const CheckboxEditor: PropertyEditor<CheckBoxEditorProps> = ({
  prop,
  name,
  onChange,
}) => (
  <input
    type="checkbox"
    id={name}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      onChange(name, e.target.checked);
    }}
    checked={prop.value ?? false}
  />
);

addPropertyEditor(ControlTypes.BOOLEAN, CheckboxEditor);
export const overview = () => {
  const [state, setState] = React.useState(false);
  const Component = getPropertyEditor(ControlTypes.BOOLEAN);
  return (
    <Component
      name="prop"
      onChange={(name: any, newVal: React.SetStateAction<boolean>) =>
        setState(newVal)
      }
      prop={{ type: ControlTypes.BOOLEAN, value: state }}
    />
  );
};
