import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ControlsEditorsTable } from '@component-controls/storybook/blocks';

export default {
  title: 'Addons/Controls/kind',
  component: ControlsEditorsTable,
  controls: {
    name: { type: ControlTypes.TEXT, label: 'Name', value: 'Mark', order: 9999 },
  },
};

interface DocsControlsEditorsTable {
  name: string;
  age: number;
}
export const docsControlsEditorsTable = ({ name, age }: DocsControlsEditorsTable) => {
  return (
    <>
      <h2>{`Hello, my name is ${name}, and I am ${age} years old.`}</h2>
    </>
  );
};

docsControlsEditorsTable.story = {
  controls: {
    age: { type: ControlTypes.NUMBER, label: 'Age', value: 19, order: 2 },
  },
};
