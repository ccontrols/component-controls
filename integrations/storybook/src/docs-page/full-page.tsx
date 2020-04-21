/* eslint-disable react/display-name */
import React from 'react';
import { DocsContainer } from './DocsContainer';
import { ControlsPage } from './ControlsPage';

export default {
  key: 'page',
  title: 'Page',
  render: ({ active }: { active: boolean }) => {
    return (
      <DocsContainer active={active}>
        <ControlsPage />
      </DocsContainer>
    );
  },
};
