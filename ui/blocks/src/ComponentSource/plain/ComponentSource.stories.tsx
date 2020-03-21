import React from 'react';
import { ComponentSource } from './ComponentSource';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/Core/ComponentSource/plain',
  component: ComponentSource,
};

export const overview = () => (
  <MockContext>
    <ComponentSource />
  </MockContext>
);
