/* eslint-disable react/display-name */
import React from 'react';
import { CanvasPage } from '@component-controls/pages';
import { DocsContainer } from '@component-controls/storybook';

export default {
  key: 'canvas',
  title: 'Canvas',
  render: ({ active }: { active: boolean }) => (
    <DocsContainer active={active}>
      <CanvasPage />
    </DocsContainer>
  ),
};
