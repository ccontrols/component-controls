/* eslint-disable react/display-name */
import React from 'react';
import { PageContainer } from '.';
import { MockContext } from '../test/MockContext';
import { Title } from '../Title';

export default {
  title: 'Blocks/PageContainer',
  component: PageContainer,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <Title />
  </MockContext>
);

export const components = () => (
  <MockContext
    storyId="mdx-story"
    components={{ h1: (props: any) => <div {...props} /> }}
  >
    <Title />
  </MockContext>
);
