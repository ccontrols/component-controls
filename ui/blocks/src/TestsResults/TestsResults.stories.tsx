import React from 'react';
import { Document, Example } from '@component-controls/core';
import { TestsResults, TestsResultsProps } from './TestsResults';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/TestsResults',
  component: TestsResults,
  category: ' Component',
  decorators: makeDecorators('blocks-core-story-plain--controls'),
} as Document;

export const overview: Example = () => (
  <TestsResults id="." name="Test results" />
);

export const pagination: Example<TestsResultsProps['pagination']> = props => (
  <TestsResults id="." name="Test results" pagination={props} />
);

pagination.smartControls = { smart: false };
pagination.controls = { pageSize: 4, pageVisible: true };
