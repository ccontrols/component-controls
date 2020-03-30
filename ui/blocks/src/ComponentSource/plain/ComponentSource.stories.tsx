import React from 'react';
import { ComponentSource } from './ComponentSource';
import { MockContext } from '../../test/MockContext';

export default {
  title: 'Blocks/ComponentSource/plain',
  component: ComponentSource,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <ComponentSource />
  </MockContext>
);
