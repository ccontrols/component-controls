import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Story } from './Story';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Story',
  component: Story,
} as Document;

export const overview: Example = () => <Story id="." />;
overview.decorators = makeDecorators('blocks-core-story-plain--controls');

export const title: Example = () => <Story title="." id="." />;
title.decorators = makeDecorators('blocks-core-story-plain--controls');

export const customTitle: Example = () => (
  <Story title="My Story Title" id="." />
);
customTitle.decorators = makeDecorators('blocks-core-story-plain--controls');

export const notCollapsible: Example = () => (
  <Story title="." collapsible={false} />
);
notCollapsible.decorators = makeDecorators('blocks-core-story-plain--controls');

export const description: Example = () => <Story id="." />;
description.decorators = makeDecorators('id-of-story');

export const iframe: Example = () => <Story id="." wrapper="iframe" />;
iframe.decorators = makeDecorators('blocks-core-story-plain--controls');
