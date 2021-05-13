import React from 'react';
import { Document, Example } from '@component-controls/core';
import { StoryData, StoryDataProps } from './StoryData';
import { makeDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/StoryData',
  component: StoryData,
  category: 'Story',
  decorators: makeDecorators('blocks-core-story-plain--controls'),
} as Document;

export const overview: Example = () => <StoryData id="." />;

export const pagination: Example<StoryDataProps['pagination']> = props => (
  <StoryData id="." title="Test Data" pagination={props} />
);

pagination.smartControls = { smart: false };
pagination.controls = { pageSize: 4, pageVisible: true };
