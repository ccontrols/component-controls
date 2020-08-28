/* eslint-disable react/display-name */
import React from 'react';
import { ViewportPage } from '@component-controls/viewport-plugin';
import { DocsContainer } from '@component-controls/storybook/DocsContainer';

export default {
  key: 'viewport',
  title: 'Viewport',
  render: ({ active }) => {
    return (
      <DocsContainer active={active}>
        <ViewportPage />
      </DocsContainer>
    );
  },
};
