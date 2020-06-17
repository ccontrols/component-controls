import React from 'react';
import { ThemeProvider } from '@component-controls/components';
import { MockContext } from '@component-controls/blocks';
import { Header } from './Header';

export default {
  title: 'Application/Header',
  component: Header,
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <Header />
    </MockContext>
  </ThemeProvider>
);
