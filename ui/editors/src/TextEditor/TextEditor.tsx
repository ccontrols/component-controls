/** @jsx jsx */
import { ChangeEvent } from 'react';
import { jsx, Input, Textarea } from 'theme-ui';
import { ComponentControlText, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

/**
 * Text control editor.
 */

export const TextEditor: PropertyEditor = ({ name, ...rest }) => {
  const [control, onChange] = useControl<ComponentControlText>(name);

  const { rows = 1 } = control;
  return rows > 1 ? (
    <Textarea
      id={name}
      name={name}
      value={control.value}
      rows={rows}
      placeholder={control.placeholder}
      aria-label={`enter a value for ${name}`}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        onChange(value);
      }}
      {...rest}
    />
  ) : (
    <Input
      id={name}
      name={name}
      value={control.value}
      placeholder={control.placeholder}
      aria-label={`enter a value for ${name}`}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChange(value);
      }}
      {...rest}
    />
  );
};
addPropertyEditor(ControlTypes.TEXT, TextEditor);
