import React from 'react';
import { Toggle } from '@component-controls/components';
import {
  ComponentControlBoolean,
  ControlTypes,
} from '@component-controls/core';
import { PropertyEditor } from '../types';
import { useControl } from '../state';
import { addPropertyEditor } from '../prop-factory';

/**
 * Boolean control editor. Uses the Toggle component.
 *
 */
export const BooleanEditor: PropertyEditor = ({ name, selector }) => {
  const [control, onChange] = useControl<ComponentControlBoolean>(
    name,
    selector,
  );
  return (
    <Toggle
      id={name}
      onChange={checked => onChange(checked)}
      checked={control.value ?? false}
    />
  );
};

addPropertyEditor(ControlTypes.BOOLEAN, BooleanEditor);
