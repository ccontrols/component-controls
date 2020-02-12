import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ControlsEditorsTable } from '@component-controls/storybook';

export default {
  title: 'Storybook/Kind',
  component: ControlsEditorsTable,
  parameters:{ 
    controls: {
      name: { type: ControlTypes.TEXT, label: 'Name', value: 'Mark', order: 9999 },
    },
  },  
};

interface DocsControlsEditorsTable {
  name: string;
  age: number;
}
export const docsControlsEditorsTable = ({ props: { name, age } } : { props: DocsControlsEditorsTable }) => {
  return (
    <>
      <h2>{`Hello, my name is ${name}, and I am ${age} years old.`}</h2>
    </>
  );
};

docsControlsEditorsTable.story = {
  parameters: {
    controls: {
      age: { type: ControlTypes.NUMBER, label: 'Age', value: 19, order: 2 },
    },
  },  
};
