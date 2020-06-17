import React from 'react';
import { MockContext } from '@component-controls/blocks';
import { SidebarsPage } from './SidebarsPage';

export default {
  title: 'Application/SidebarsPage',
  component: SidebarsPage,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <SidebarsPage type="story" />
  </MockContext>
);
