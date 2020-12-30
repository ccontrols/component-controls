import React from 'react';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { Document, Example } from '@component-controls/core';
import { ComponentSource } from './ComponentSource';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentSource',
  component: ComponentSource,
} as Document;

export const overview: Example = () => <ComponentSource />;
overview.decorators = makeDecorators();

export const theme: Example = () => <ComponentSource theme={shadesOfPurple} />;
theme.decorators = makeDecorators('blocks-core-story-plain--controls');

export const title: Example = () => <ComponentSource title="." />;
title.decorators = makeDecorators();

export const customTitle: Example = () => (
  <ComponentSource title="My Story Title" id="." />
);
customTitle.decorators = makeDecorators();

export const notCollapsible: Example = () => (
  <ComponentSource title="." collapsible={false} />
);
notCollapsible.decorators = makeDecorators();

export const noComponent: Example = () => (
  <ComponentSource title="Component" id="." />
);
noComponent.decorators = makeDecorators();
