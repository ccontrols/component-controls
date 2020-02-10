import { FileReader } from 'global';
import React, { ChangeEvent } from 'react';
import { ComponentControlFiles } from '@component-controls/specification';
import { Input } from 'theme-ui';
import { PropertyControlProps, PropertyEditor } from '../../types';

function fileReaderPromise(file: File) {
  return new Promise<string>(resolve => {
    const fileReader = new FileReader();
    fileReader.onload = (e: Event) =>
      resolve((e.currentTarget as FileReader).result as string);
    fileReader.readAsDataURL(file);
  });
}

export interface FilesEditorProps extends PropertyControlProps {
  prop: ComponentControlFiles;
}

export const FilesEditor: PropertyEditor<FilesEditorProps> = ({
  prop,
  name,
  onChange,
}) => (
  <Input
    type="file"
    name={name}
    multiple
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        Promise.all(
          Array.from(e.target.files).map(fileReaderPromise),
        ).then(files => onChange(name, files));
      }
    }}
    accept={prop.accept}
  />
);
