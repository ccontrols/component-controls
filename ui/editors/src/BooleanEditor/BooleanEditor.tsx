import React from 'react';
import { Toggle } from '@component-controls/components';
import { ComponentControlBoolean } from '@component-controls/specification';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';

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
