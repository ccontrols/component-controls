/* eslint-disable react/display-name */
import React from 'react';
import { PageTypeTag } from '.';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/PageTypeTag',
  component: PageTypeTag,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <PageTypeTag type="story" />
  </MockContext>
);
