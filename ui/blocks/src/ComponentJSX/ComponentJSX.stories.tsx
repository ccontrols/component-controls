import React from 'react';
import { Example } from '@component-controls/core';
import { ComponentJSX } from './ComponentJSX';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentJSX',
  component: ComponentJSX,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <ComponentJSX />
  </MockContext>
);
