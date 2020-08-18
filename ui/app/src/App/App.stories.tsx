import React from 'react';
import { MockContext } from '@component-controls/blocks';
import { App } from './App';

export default {
  title: 'Application/App',
  component: App,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <App />
  </MockContext>
);
