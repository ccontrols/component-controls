import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { Title, Subtitle, Description, Story, Props, Stories } from '@storybook/addon-docs/blocks';
import { ControlsEditorsTable } from '../../dist/preview/blocks';

export default {
  title: 'Docs/PropEditors/ControlsEditorsTable',
  parameters: {
    component: ControlsEditorsTable,
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Story id="." />
          <ControlsEditorsTable id="." />
          <Props />
          <Stories />
        </>
      ),
    },
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
    name: { type: ControlTypes.TEXT, label: 'Name', value: 'Mark' },
    age: { type: ControlTypes.NUMBER, label: 'Age', value: 19 },
    clickMe: {
      type: ControlTypes.BUTTON,
      label: 'button click',
      onClick: () => {},
    },
  },
};
