import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';

export default {
  title: 'ESM/Doc',
  author: 'atanasster',
  order: 1,
  controls: {
    name: {
      type: ControlTypes.TEXT,
      label: 'Name',
      value: 'Mark',
      order: 9999,
    },
  },
} as Document;

interface DocsControlsTable {
  name?: string;
  age?: number;
}
export const docsControlsTable: Example<DocsControlsTable> = ({
  name,
  age,
} = {}) => {
  return (
    <>
      <h2>{`Hello, my name is ${name}, and I am ${age} years old.`}</h2>
    </>
  );
};

docsControlsTable.controls = {
  age: {
    type: ControlTypes.NUMBER,
    label: 'Age',
    value: 19,
    min: 10,
    max: 75,
    step: 5,
  },
};
