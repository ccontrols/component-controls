import React from 'react';
import { Button } from '@theme-ui/components';
import { ControlTypes } from '@component-controls/specification';

export default {
  title: 'Controls/BUTTON',
};

export const overview = ({ onClick }) => (
  <Button onClick={onClick}>click me!</Button>
);

overview.story = {
  description: 'A simple story with a clickable button',
  controls: {
    onClick: {
      type: ControlTypes.BUTTON,
      value: () => console.log('clicked'),
      description: 'a button control',
    },
  },
};
