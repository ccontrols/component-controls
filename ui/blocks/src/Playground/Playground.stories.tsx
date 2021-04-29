import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Donut } from '@component-controls/components';
import { Playground } from './index';
import { Story } from '../Story';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Playground/ESM',
  component: Playground,
  category: 'Stories',
} as Document;

export const overview: Example = () => (
  <Playground>
    <Story id="." />
  </Playground>
);
overview.decorators = makeDecorators('blocks-core-story-plain--controls');

export const defaultOpenSource: Example = () => (
  <Playground openTab="source">
    <Story id="." />
  </Playground>
);
defaultOpenSource.decorators = makeDecorators(
  'blocks-core-story-plain--controls',
);

export const disableZoomPan: Example = () => (
  <Playground scale={0}>
    <Story id="." />
  </Playground>
);
disableZoomPan.decorators = makeDecorators('blocks-core-story-plain--controls');

export const multiStories: Example = () => (
  <Playground id=".">
    <Story id="id-of-single" />
    <Story id="blocks-core-story-plain--controls" />
  </Playground>
);
multiStories.decorators = makeDecorators();

export const title: Example = () => (
  <Playground title=".">
    <Story id="." />
  </Playground>
);
title.decorators = makeDecorators();

export const customTitle: Example = () => (
  <Playground title="Custom playground title">
    <Story id="." />
  </Playground>
);
customTitle.decorators = makeDecorators('blocks-core-story-plain--controls');

export const notCollapsible: Example = () => (
  <Playground collapsible={false} id=".">
    <Story id="." />
  </Playground>
);
notCollapsible.decorators = makeDecorators('blocks-core-story-plain--controls');

export const extraPanel: Example = () => (
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
);
extraPanel.decorators = makeDecorators('blocks-core-story-plain--controls');

export const child: Example = () => (
  <Playground title="My donut example ">
    <Donut value={1 / 2} />
  </Playground>
);
child.decorators = makeDecorators('blocks-core-story-plain--controls');

export const multiChild: Example = () => (
  <Playground title="Multiple donuts">
    <Donut value={1 / 2} />
    <Donut value={1 / 2} />
    <Donut value={1 / 2} />
  </Playground>
);
multiChild.decorators = makeDecorators('blocks-core-story-plain--controls');

export const darkTheme: Example = () => (
  <Playground dark={true}>
    <Story id="." />
  </Playground>
);
darkTheme.decorators = makeDecorators('blocks-core-story-plain--controls');

export const scale: Example = () => (
  <Playground scale={2}>
    <Story id="." />
  </Playground>
);
scale.decorators = makeDecorators('blocks-core-story-plain--controls');

export const zoomDisabled: Example = () => (
  <Playground scale={0}>
    <Story id="." />
  </Playground>
);
zoomDisabled.decorators = makeDecorators('blocks-core-story-plain--controls');

export const visibleTabs: Example = () => (
  <Playground visibleTabs={true}>
    <Story id="." />
  </Playground>
);
visibleTabs.decorators = makeDecorators('blocks-core-story-plain--controls');
