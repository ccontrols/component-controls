import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { DocumentHomePage } from './DocumentHomePage';

export default {
  title: 'Application/DocumentHomePage',
  component: DocumentHomePage,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <DocumentHomePage type="blog" />
  </MockContext>
);
