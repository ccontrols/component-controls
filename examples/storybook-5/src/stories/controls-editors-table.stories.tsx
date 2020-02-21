import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ControlsTable } from '@component-controls/storybook';

export default {
  title: 'Storybook/Blocks/ControlsTable',
  parameters: {
    component: ControlsTable,
    addonControls: {
      smart: false,
    }
  },
};

interface DocsControlsTable {
  name: string;
  age: number;
}
export const docsControlsTable = ({ name, age }: DocsControlsTable) => {
  return (
    <>
      <h2>{`Hello, my name is ${name}, and I am ${age} years old.`}</h2>
    </>
  );
};

docsControlsTable.story = {
  parameters: {
    controls: {
      name: { type: ControlTypes.TEXT, label: 'Name', value: 'Mark' },
      age: { type: ControlTypes.NUMBER, label: 'Age', value: 19, min: 10, max: 75 },
      clickMe: {
        type: ControlTypes.BUTTON,
        label: 'button click',
        onClick: () => {console.log('log')},
      },
    },
  }
};
