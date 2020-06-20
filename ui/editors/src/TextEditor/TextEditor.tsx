import React, { ChangeEvent } from 'react';
import { Input, Textarea } from 'theme-ui';
import { ComponentControlText, ControlTypes } from '@component-controls/core';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';
import { addPropertyEditor } from '../prop-factory';

/**
 * Text control editor.
 */

export const TextEditor: PropertyEditor = ({ name }) => {
  const { control, onChange } = useControlContext<ComponentControlText>({
    name,
  });
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
        onChange(name, value);
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
        onChange(name, value);
      }}
    />
  );
};
addPropertyEditor(ControlTypes.TEXT, TextEditor);
