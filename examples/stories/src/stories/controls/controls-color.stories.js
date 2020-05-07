import React from 'react';
import { ControlTypes } from '@component-controls/specification';

export default {
  title: 'Controls/COLOR',
};

export const overview = ({ color }) => (
  <div style={{ width: 50, height: 50, backgroundColor: color }} />
);

overview.story = {
  description: 'A simple story that draws a colored rectangle box',
  controls: {
    color: {
      type: ControlTypes.COLOR,
      value: 'red',
      description: 'a color control',
    },
  },
};
