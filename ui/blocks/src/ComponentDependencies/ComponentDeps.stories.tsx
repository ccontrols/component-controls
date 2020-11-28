import React from 'react';
import { Example } from '@component-controls/core';
import {
  ComponentExternalDependencies,
  ComponentLocalDependencies,
} from './ComponentDependencies';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentDependencies',
  component: ComponentExternalDependencies,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <ComponentExternalDependencies />
  </MockContext>
);

export const localDependencies: Example = () => (
  <MockContext storyId="id-of-story">
    <ComponentLocalDependencies />
  </MockContext>
);
