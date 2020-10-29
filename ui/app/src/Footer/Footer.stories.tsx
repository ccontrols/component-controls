import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { Footer } from './Footer';

export default {
  title: 'Application/Footer',
  component: Footer,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <Footer />
  </MockContext>
);
