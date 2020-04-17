/* eslint-disable react/display-name */
import React from 'react';
import { DocsContainer } from './DocsContainer';
import { ControlsPage } from './ControlsPage';

export default {
  key: 'page',
  title: 'Page',
  render: ({ active, storyId }: { active: boolean; storyId: string }) => {
    return (
      <DocsContainer active={active} storyId={storyId}>
        <ControlsPage />
      </DocsContainer>
    );
  },
};
