import React from 'react';
import { Donut } from 'theme-ui';
import { Example } from '@component-controls/core';
import { Playground } from './index';
import { Story } from '../Story';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Playground',
  component: Playground,
};

export const overview: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const defaultOpenSource: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground openTab="source">
      <Story id="." />
    </Playground>
  </MockContext>
);

export const disableZoomPan: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground scale={0}>
      <Story id="." />
    </Playground>
  </MockContext>
);
export const multiStories: Example = () => (
  <MockContext storyId="id-of-story">
    <Playground id=".">
      <Story id="id-of-single" />
      <Story id="blocks-core-story-plain--controls" />
    </Playground>
  </MockContext>
);

export const title: Example = () => (
  <MockContext storyId="id-of-story">
    <Playground title=".">
      <Story id="." />
    </Playground>
  </MockContext>
);

export const customTitle: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="Custom playground title">
      <Story id="." />
    </Playground>
  </MockContext>
);
export const notCollapsible: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="." collapsible={false} id=".">
      <Story id="." />
    </Playground>
  </MockContext>
);

export const extraPanel: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground
      actions={[
        {
          node: 'custom panel',
          panel: <Donut value={1 / 2} />,
        },
      ]}
    >
      <Story id="." />
    </Playground>
  </MockContext>
);

export const child: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="My donut example ">
      <Donut value={1 / 2} />
    </Playground>
  </MockContext>
);

export const multiChild: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="Multiple donuts">
      <Donut value={1 / 2} />
      <Donut value={1 / 2} />
      <Donut value={1 / 2} />
    </Playground>
  </MockContext>
);

export const darkTheme: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground dark={true}>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const scale: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground scale={2}>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const zoomDisabled: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground scale={0}>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const visibleTabs: Example = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground visibleTabs={true}>
      <Story id="." />
    </Playground>
  </MockContext>
);
