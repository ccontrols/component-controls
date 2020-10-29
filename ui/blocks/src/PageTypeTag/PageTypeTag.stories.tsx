import React from 'react';
import { Example } from '@component-controls/core';
import { PageTypeTag } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/PageTypeTag',
  component: PageTypeTag,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <PageTypeTag type="story" />
  </MockContext>
);
