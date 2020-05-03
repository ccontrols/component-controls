/* eslint-disable react/display-name */
import React from 'react';
import { TestingPage } from '@component-controls/pages';
import { DocsContainer } from './DocsContainer';

export default {
  key: 'test',
  title: 'Testing',
  render: ({ active }: { active: boolean }) => {
    return (
      <DocsContainer active={active}>
        <TestingPage />
      </DocsContainer>
    );
  },
};
