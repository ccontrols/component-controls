import React from 'react';
import { Toggle } from '@component-controls/components';
import {
  ComponentControlBoolean,
  ControlTypes,
} from '@component-controls/specification';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';
import { addPropertyEditor } from '../prop-factory';

/**
 * Boolean control editor. Uses the Toggle component.
 *
 */
export const BooleanEditor: PropertyEditor = ({ name }) => {
  const { control, onChange } = useControlContext<ComponentControlBoolean>({
    name,
  });
  return (
    <Toggle
      id={name}
      onChange={checked => onChange(name, checked)}
      checked={control.value ?? false}
    />
  );
};

addPropertyEditor(ControlTypes.BOOLEAN, BooleanEditor);
