import React, { ChangeEvent } from 'react';
import { ComponentControlText } from '@component-controls/specification';
import { Form } from '@storybook/components';
import { PropertyControlProps, PropertyEditor } from '../types';

export interface TextEditorProps extends PropertyControlProps {
  prop: ComponentControlText;
}

export const TextEditor: PropertyEditor<TextEditorProps> = ({
  prop,
  name,
  onChange,
}) => {
  const { maxRows = 1, minRows = 1 } = prop;
  return minRows > 1 || maxRows > 1 ? (
    <Form.Textarea
      id={name}
      name={name}
      value={prop.value}
      minRows={minRows}
      maxRows={maxRows}
      placeholder={prop.placeholder}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        onChange(name, value);
      }}
      size="flex"
    />
  ) : (
    <Form.Input
      id={name}
      name={name}
      value={prop.value}
      placeholder={prop.placeholder}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChange(name, value);
      }}
      size="flex"
    />
  );
};
