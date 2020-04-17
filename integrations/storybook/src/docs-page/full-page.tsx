/* eslint-disable react/display-name */
import React from 'react';
import { PageContainer } from './PageContainer';
import { ControlsPage } from './ControlsPage';

export default {
  key: 'page',
  title: 'Page',
  render: ({ active, storyId }: { active: boolean; storyId: string }) => {
    return (
      <PageContainer active={active} storyId={storyId}>
        <ControlsPage />
      </PageContainer>
    );
  },
};
