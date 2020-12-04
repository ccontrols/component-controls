import React from 'react';
import { ControlTypes } from '../controls';
import { BooleanControl } from './components/BooleanControl';

export default {
  title: 'Controls/Boolean',
  component: BooleanControl,
};

export const overview = ({ bool }) => <div>{bool ? 'YES' : 'NO'}</div>;

overview.description = 'A simple story that just returns "YES" or "NO"';
overview.controls = {
  bool: {
    type: ControlTypes.BOOLEAN,
    value: true,
    description: 'a boolean control',
  },
};
