import React from 'react';
import { MockContext } from '@component-controls/blocks';
import { DocPage } from './DocPage';

export default {
  title: 'Application/DocPage',
  component: DocPage,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <DocPage type="story" />
  </MockContext>
);
