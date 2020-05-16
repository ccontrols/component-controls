import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { BooleanControl } from './components/BooleanControl';

export default {
  title: 'Controls/BOOLEAN',
  component: BooleanControl,
};

export const overview = ({ bool }) => <div>{bool ? 'YES' : 'NO'}</div>;

overview.story = {
  description: 'A simple story that just returns "YES" or "NO"',
  controls: {
    bool: {
      type: ControlTypes.BOOLEAN,
      value: true,
      description: 'a boolean control',
    },
  },
};
