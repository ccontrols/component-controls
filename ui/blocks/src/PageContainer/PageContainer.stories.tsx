/* eslint-disable react/display-name */
import React from 'react';
import { Document, Example } from '@component-controls/core';
import { PageContainer } from '.';
import { makeDecorators } from '../test/MockContext';
import { Title } from '../Title';

export default {
  title: 'Blocks/PageContainer',
  component: PageContainer,
} as Document;

export const overview: Example = () => <Title />;
overview.decorators = makeDecorators();

export const components: Example = () => <Title />;
components.decorators = makeDecorators('mdx-story', {
  components: { h1: (props: any) => <div {...props} /> },
});
