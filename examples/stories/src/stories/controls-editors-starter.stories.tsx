import React from 'react';
import { Button } from 'theme-ui';
import { ControlTypes } from '@component-controls/specification';

export default {
  title: 'Introduction/Starter',
  component: Button,
};

interface DocsControlsTable {
  name: string;
  age: number;
}

export const overview = ({ name, age }: DocsControlsTable) => (
  <h2>{`Hello, my name is ${name}, and I am ${age} years old.`}</h2>
);

overview.story = {
  description:
    'Story with two dynamic control values: `name` and `age`. You can use the controls to edit the story properties at run-time.',

  controls: {
    name: {
      type: ControlTypes.TEXT,
      label: 'Name',
      value: 'Mark',
      description: `
## name of the person

any text is allowed
`,
    },
    age: {
      type: ControlTypes.NUMBER,
      description: `
## age of the person

numeric, values between 10 and 75 allowed
`,
      label: 'Age',
      value: 19,
      defaultValue: null,
      min: 10,
      max: 75,
    },
  },
};
