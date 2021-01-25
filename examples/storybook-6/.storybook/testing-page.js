/* eslint-disable react/display-name */
import React from 'react';
import testingPage from '@component-controls/pages/TestingPage';
import { DocsContainer } from '@component-controls/storybook/DocsContainer';

export default {
  key: 'docs-test',
  title: testingPage.title,
  render: ({ active }) => {
    return (
      <DocsContainer active={active}>
        <testingPage.component />
      </DocsContainer>
    );
  },
};
