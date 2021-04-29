import { FileReader } from 'global';
import React, { ChangeEvent } from 'react';
import { Input } from 'theme-ui';
import { ComponentControlFiles, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

function fileReaderPromise(file: File) {
  return new Promise<string>(resolve => {
    const fileReader = new FileReader();
    fileReader.onload = (e: Event) =>
      resolve((e.currentTarget as FileReader).result as string);
    fileReader.readAsDataURL(file);
  });
}

/**
 * Files control editor.
 */

export const FilesEditor: PropertyEditor = ({ name, ...rest }) => {
  const [control, onChange] = useControl<ComponentControlFiles>(name);
  return (
    <Input
      type="file"
      name={name}
      multiple
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          Promise.all(
            Array.from(e.target.files).map(fileReaderPromise),
          ).then(files => onChange(files));
        }
      }}
      accept={control.accept}
      aria-label="select files"
      {...rest}
    />
  );
};

addPropertyEditor(ControlTypes.FILES, FilesEditor);
