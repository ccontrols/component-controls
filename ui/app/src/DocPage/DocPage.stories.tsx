import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { DocPage } from './DocPage';

export default {
  title: 'Application/DocPage',
  component: DocPage,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <DocPage type="story" />
  </MockContext>
);
