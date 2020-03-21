import React, { ChangeEvent } from 'react';
import { ComponentControlText } from '@component-controls/specification';
import { Input, Textarea } from 'theme-ui';
import { PropertyControlProps, PropertyEditor } from '../types';

export interface TextEditorProps extends PropertyControlProps {
  /**
   * the text property that is being edited.
   */
  prop: ComponentControlText;
}

/**
 * Text control editor.
 */

export const TextEditor: PropertyEditor<TextEditorProps> = ({
  prop,
  name,
  onChange,
}) => {
  const { rows = 1 } = prop;
  return rows > 1 ? (
    <Textarea
      id={name}
      name={name}
      value={prop.value}
      rows={rows}
      placeholder={prop.placeholder}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        onChange(name, value);
      }}
    />
  ) : (
    <Input
      id={name}
      name={name}
      value={prop.value}
      placeholder={prop.placeholder}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChange(name, value);
      }}
    />
  );
};
