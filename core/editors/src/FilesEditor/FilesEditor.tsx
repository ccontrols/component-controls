import { FileReader } from 'global';
import React, { ChangeEvent } from 'react';
import { styled } from '@storybook/theming';
import { ComponentControlFiles } from '@component-controls/specification';
import { Form } from '@storybook/components';
import { PropertyControlProps, PropertyEditor } from '../types';

const FileInput = styled(Form.Input)({
  paddingTop: 4,
});

function fileReaderPromise(file: File) {
  return new Promise<string>(resolve => {
    const fileReader = new FileReader();
    fileReader.onload = (e: Event) =>
      resolve((e.currentTarget as FileReader).result as string);
    fileReader.readAsDataURL(file);
  });
}

interface FilesEditorProps extends PropertyControlProps {
  prop: ComponentControlFiles;
}

export const FilesEditor: PropertyEditor<FilesEditorProps> = ({
  prop,
  name,
  onChange,
}) => (
  <FileInput
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
    size="flex"
  />
);
