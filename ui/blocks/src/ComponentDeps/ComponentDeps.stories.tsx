import React from 'react';
import { ComponentDeps } from './ComponentDeps';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentDeps',
  component: ComponentDeps,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <ComponentDeps />
  </MockContext>
);
