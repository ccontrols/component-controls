import React from 'react';
import { ComponentControlBoolean } from '@component-controls/specification';
import { Toggle } from '@component-controls/components';
import { PropertyControlProps, PropertyEditor } from '../types';

export interface BooleanEditorProps extends PropertyControlProps {
  /**
   * the property that is being edited.
   */
  prop: ComponentControlBoolean;
}

/**
 * Boolean control editor. Uses the Toggle component.
 *
 */
export const BooleanEditor: PropertyEditor<BooleanEditorProps> = ({
  prop,
  name,
  onChange,
}) => (
  <Toggle
    id={name}
    onChange={checked => onChange(name, checked)}
    checked={prop.value ?? false}
  />
);
