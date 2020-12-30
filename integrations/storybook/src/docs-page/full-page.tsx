/* eslint-disable react/display-name */
import React from 'react';
import page from '@component-controls/pages/ClassicPage';
import { DocsContainer } from './DocsContainer';

module.exports = {
  key: 'docs-page',
  title: 'Page',
  render: ({ active }: { active: boolean }) => {
    const ClassicPage = page.component;
    return (
      <DocsContainer active={active}>
        <ClassicPage />
      </DocsContainer>
    );
  },
};
