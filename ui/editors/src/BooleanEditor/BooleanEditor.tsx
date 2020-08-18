import React from 'react';
import { Toggle } from '@component-controls/components';
import {
  ComponentControlBoolean,
  ControlTypes,
} from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

/**
 * Boolean control editor. Uses the Toggle component.
 *
 */
export const BooleanEditor: PropertyEditor = ({ name }) => {
  const [control, onChange] = useControl<ComponentControlBoolean>(name);
  return (
    <Toggle
      id={name}
      onChange={checked => onChange(checked)}
      checked={control.value ?? false}
    />
  );
};

addPropertyEditor(ControlTypes.BOOLEAN, BooleanEditor);
