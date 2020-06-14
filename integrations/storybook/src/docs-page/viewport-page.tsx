/* eslint-disable react/display-name */
import React from 'react';
import { ViewportPage } from '@component-controls/pages';
import { DocsContainer } from './DocsContainer';

export default {
  key: 'viewport',
  title: 'Viewport',
  render: ({ active }: { active: boolean }) => {
    return (
      <DocsContainer active={active}>
        <ViewportPage />
      </DocsContainer>
    );
  },
};
