/* eslint-disable react/display-name */
import React from 'react';
import { AllyPage } from '@component-controls/axe-plugin';
import { DocsContainer } from '@component-controls/storybook/DocsContainer';

export default {
  key: 'test',
  title: 'Testing',
  render: ({ active }) => {
    return (
      <DocsContainer active={active}>
        <AllyPage />
      </DocsContainer>
    );
  },
};
