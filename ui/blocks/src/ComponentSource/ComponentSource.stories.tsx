import React from 'react';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { ComponentSource } from './ComponentSource';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentSource',
  component: ComponentSource,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <ComponentSource />
  </MockContext>
);

export const theme = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <ComponentSource theme={shadesOfPurple} />
  </MockContext>
);
export const title = () => (
  <MockContext storyId="id-of-story">
    <ComponentSource title="." />
  </MockContext>
);

export const customTitle = () => (
  <MockContext storyId="id-of-story">
    <ComponentSource title="My Story Title" id="." />
  </MockContext>
);
export const notCollapsible = () => (
  <MockContext storyId="id-of-story">
    <ComponentSource title="." collapsible={false} />
  </MockContext>
);
export const noComponent = () => (
  <MockContext storyId="id-no-component">
    <ComponentSource title="Component" id="." />
  </MockContext>
);
