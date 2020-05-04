import React, { ChangeEvent } from 'react';
import { Textarea } from 'theme-ui';
import { ComponentControlArray } from '@component-controls/specification';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';

const formatArray = (value: string, separator: string) => {
  if (value === '') {
    return [];
  }
  return value.split(separator);
};

const deserialize = (value: string[]) => {
  if (Array.isArray(value)) return value;
  return Object.keys(value)
    .sort()
    .reduce((array, key) => [...array, value[key]], []);
};

/**
 * Array control editor.
 *
 */
export const ArrayEditor: PropertyEditor = ({ name }) => {
  const { control, onChange } = useControlContext<ComponentControlArray>({
    name,
  });
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target as HTMLTextAreaElement;
    const newVal = formatArray(value, control.separator || ',');
    onChange(name, newVal);
  };

  const value =
    control.value && deserialize(control.value).join(control.separator);

  return (
    <>
      <Textarea id={name} name={name} value={value} onChange={handleChange} />
    </>
  );
};
