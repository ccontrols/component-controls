import React from 'react';
import { Donut } from 'theme-ui';
import { Playground } from './Playground';
import { Story } from '../Story';
import { MockContext } from '../test/MockContext';
export default {
  title: 'Blocks/Playground',
  component: Playground,
};

export const overview = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const defaultOpenSource = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground openTab="source">
      <Story id="." />
    </Playground>
  </MockContext>
);

export const disableZoomPan = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground
      transform={{
        options: {
          disabled: true,
        },
      }}
    >
      <Story id="." />
    </Playground>
  </MockContext>
);
export const multiStories = () => (
  <MockContext storyId="id-of-story">
    <Playground id=".">
      <Story id="id-of-single" />
      <Story id="blocks-core-story-plain--controls" />
    </Playground>
  </MockContext>
);

export const title = () => (
  <MockContext storyId="id-of-story">
    <Playground title=".">
      <Story id="." />
    </Playground>
  </MockContext>
);

export const customTitle = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="Custom playground title">
      <Story id="." />
    </Playground>
  </MockContext>
);
export const notCollapsible = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="." collapsible={false} id=".">
      <Story id="." />
    </Playground>
  </MockContext>
);

export const extraPanel = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground
      actions={[
        {
          title: 'custom panel',
          panel: <Donut value={1 / 2} />,
        },
      ]}
    >
      <Story id="." />
    </Playground>
  </MockContext>
);

export const child = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="My donut example ">
      <Donut value={1 / 2} />
    </Playground>
  </MockContext>
);

export const multiChild = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground title="Multiple donuts">
      <Donut value={1 / 2} />
      <Donut value={1 / 2} />
      <Donut value={1 / 2} />
    </Playground>
  </MockContext>
);

export const darkTheme = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground dark={true}>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const scale = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground scale={2}>
      <Story id="." />
    </Playground>
  </MockContext>
);

export const zoomDisabled = () => (
  <MockContext storyId="blocks-core-story-plain--controls">
    <Playground scale={0}>
      <Story id="." />
    </Playground>
  </MockContext>
);
