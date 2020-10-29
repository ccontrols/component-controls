import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { Sidebar } from './Sidebar';

export default {
  title: 'Application/Sidebar',
  component: Sidebar,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <Sidebar title="sidebar" type="story" />
  </MockContext>
);
