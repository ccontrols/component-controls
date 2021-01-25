/* eslint-disable react/display-name */
import React from 'react';
import designPage from '@component-controls/pages/DesignPage';
import { DocsContainer } from '@component-controls/storybook/DocsContainer';

export default {
  key: 'docs-design',
  title: designPage.title,
  render: ({ active }) => {
    return (
      <DocsContainer active={active}>
        <designPage.component />
      </DocsContainer>
    );
  },
};
