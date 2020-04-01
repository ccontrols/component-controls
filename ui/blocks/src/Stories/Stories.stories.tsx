import React from 'react';
import { Stories } from './Stories';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Stories',
  component: Stories,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <Stories id="." />
  </MockContext>
);

export const customTitle = () => (
  <MockContext storyId="id-of-story">
    <Stories title="My Story Title" id="." />
  </MockContext>
);
export const notCollapsible = () => (
  <MockContext storyId="id-of-story">
    <Stories collapsible={false} />
  </MockContext>
);

export const darkTheme = () => (
  <MockContext storyId="id-of-story">
    <Stories dark={true} />
  </MockContext>
);
