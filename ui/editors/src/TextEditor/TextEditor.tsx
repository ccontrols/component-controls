import React, { ChangeEvent } from 'react';
import { Input, Textarea } from 'theme-ui';
import { ComponentControlText, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

/**
 * Text control editor.
 */

export const TextEditor: PropertyEditor = ({ name }) => {
  const [control, onChange] = useControl<ComponentControlText>(name);

  const { rows = 1 } = control;
  return rows > 1 ? (
    <Textarea
      id={name}
      name={name}
      value={control.value}
      rows={rows}
      placeholder={control.placeholder}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        onChange(value);
      }}
    />
  ) : (
    <Input
      id={name}
      name={name}
      value={control.value}
      placeholder={control.placeholder}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChange(value);
      }}
    />
  );
};
addPropertyEditor(ControlTypes.TEXT, TextEditor);
