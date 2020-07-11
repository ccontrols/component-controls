import React from 'react';
import { Button } from 'theme-ui';
import { ControlTypes } from '../controls';
import { ButtonControl } from './components/ButtonControl';

export default {
  title: 'Controls/Button',
  component: ButtonControl,
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
