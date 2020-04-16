/* eslint-disable react/display-name */
import React from 'react';
import { future } from '@theme-ui/presets';
import { PageContainer } from '.';
import { Title } from '../Title';
import { PropsTable } from '../PropsTable';
import { Playground } from '../Playground';
import { Story } from '../Story';

import { storyStore } from '../test/storyStore';

export default {
  title: 'Blocks/PageContainer',
  component: PageContainer,
};

export const overview = () => (
  <PageContainer mockStore={storyStore} storyId="id-of-story">
    <Title />
  </PageContainer>
);

export const dark = () => (
  <PageContainer dark={true} mockStore={storyStore} storyId="id-of-story">
    <Title />
    <Playground title="Custom playground title" openTab="source">
      <Story id="." />
    </Playground>
    <PropsTable />
  </PageContainer>
);

export const theme = () => (
  <PageContainer theme={future} mockStore={storyStore} storyId="id-of-story">
    <Title />
    <Playground title="Custom playground title" openTab="source">
      <Story id="." />
    </Playground>
    <PropsTable />
  </PageContainer>
);

export const components = () => (
  <PageContainer
    mockStore={storyStore}
    storyId="mdx-story"
    components={{ h1: props => <div {...props} /> }}
  >
    <Title />
  </PageContainer>
);
