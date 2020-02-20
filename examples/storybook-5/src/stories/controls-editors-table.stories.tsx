import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ControlsEditorsTable } from '@component-controls/storybook';

export default {
  title: 'Storybook/Blocks/ControlsEditorsTable',
  parameters: {
    component: ControlsEditorsTable,
    addonControls: {
      smart: false,
    }
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
