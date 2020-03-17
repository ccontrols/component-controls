import React from 'react';
import { Description } from './Description';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Core/Description',
  component: Description,
};

export const simple = () => (
  <MockContext>
    <Description of="." />
  </MockContext>
);
