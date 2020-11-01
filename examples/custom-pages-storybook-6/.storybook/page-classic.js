import React from 'react';
import { ClassicPage } from '@component-controls/pages';
import { DocsContainer } from '@component-controls/storybook';
export default {
  key: 'docs-page',
  title: 'Page',
  render: ({ active }) => active ? (
    <DocsContainer active={active}>
      <ClassicPage />
    </DocsContainer>
  ): null,
};