import React from 'react';
import { ThemeProvider } from '@component-controls/components';
import { MockContext } from '@component-controls/blocks';
import { Footer } from './Footer';

export default {
  title: 'Application/Footer',
  component: Footer,
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <Footer />
    </MockContext>
  </ThemeProvider>
);
