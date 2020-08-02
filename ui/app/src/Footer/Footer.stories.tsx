import React from 'react';
import { MockContext } from '@component-controls/blocks';
import { Footer } from './Footer';

export default {
  title: 'Application/Footer',
  component: Footer,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <Footer />
  </MockContext>
);
