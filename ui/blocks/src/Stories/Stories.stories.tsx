import React from 'react';
import { Example } from '@component-controls/core';
import { Stories } from './Stories';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Stories',
  component: Stories,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <Stories id="." />
  </MockContext>
);

export const customTitle: Example = () => (
  <MockContext storyId="id-of-story">
    <Stories title="My Story Title" id="." />
  </MockContext>
);
export const notCollapsible: Example = () => (
  <MockContext storyId="id-of-story">
    <Stories collapsible={false} />
  </MockContext>
);

export const darkTheme: Example = () => (
  <MockContext storyId="id-of-story">
    <Stories dark={true} />
  </MockContext>
);
