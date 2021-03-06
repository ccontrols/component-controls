import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ComponentCommits, ComponentCommitsProps } from './ComponentCommits';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentCommits',
  component: ComponentCommits,
  category: ' Component',
  decorators: makeDecorators('blocks-core-story-plain--controls'),
} as Document;

export const overview: Example = () => (
  <ComponentCommits id="." name="Commits" />
);

export const pagination: Example<ComponentCommitsProps['pagination']> = props => (
  <ComponentCommits id="." name="Commits" pagination={props} />
);

pagination.smartControls = { smart: false };
pagination.controls = { pageSize: 10, pageVisible: true };
