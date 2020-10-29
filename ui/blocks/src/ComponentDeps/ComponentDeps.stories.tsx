import React from 'react';
import { Example } from '@component-controls/core';
import { ComponentDeps } from './ComponentDeps';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentDeps',
  component: ComponentDeps,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <ComponentDeps />
  </MockContext>
);
