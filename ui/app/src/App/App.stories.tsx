import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { App } from './App';

export default {
  title: 'Application/App',
  component: App,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <App />
  </MockContext>
);
