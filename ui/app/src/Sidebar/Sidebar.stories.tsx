import React from 'react';
import { ThemeProvider } from '@component-controls/components';
import { MockContext } from '@component-controls/blocks';
import { Sidebar } from './Sidebar';

export default {
  title: 'Application/Sidebar',
  component: Sidebar,
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <Sidebar title="sidebar" type="story" />
    </MockContext>
  </ThemeProvider>
);
