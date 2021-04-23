import React from 'react';
import { Document, Example } from '@component-controls/core';
import { TestsCoverage, TestsCoverageProps } from './TestsCoverage';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/TestsCoverage',
  component: TestsCoverage,
  category: ' Component',
  decorators: makeDecorators('blocks-core-story-plain--controls'),
} as Document;

export const overview: Example = () => (
  <TestsCoverage id="." name="Test results" />
);

export const pagination: Example<TestsCoverageProps['pagination']> = props => (
  <TestsCoverage id="." name="Test results" pagination={props} />
);

pagination.smartControls = { smart: false };
pagination.controls = { pageSize: 4, pageVisible: true };
