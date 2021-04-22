import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ComponentTests, ComponentTestsProps } from './ComponentTests';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentTests',
  component: ComponentTests,
  category: ' Component',
  decorators: makeDecorators('blocks-core-story-plain--controls'),
} as Document;

export const overview: Example = () => <ComponentTests id="." name="Commits" />;

export const pagination: Example<ComponentTestsProps['pagination']> = props => (
  <ComponentTests id="." name="Tests" pagination={props} />
);

pagination.smartControls = { smart: false };
pagination.controls = { pageSize: 10, pageVisible: true };
