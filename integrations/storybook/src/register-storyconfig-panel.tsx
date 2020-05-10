/* eslint-disable react/display-name */
import * as React from 'react';
import addons from '@storybook/addons';
import { StoryConfigPanel } from './panel/StoryConfigPanel';
import { STORYCONFIG_PANEL_ID } from './panel/constants';

addons.register(STORYCONFIG_PANEL_ID, api => {
  addons.addPanel(`${STORYCONFIG_PANEL_ID}_panel`, {
    title: 'Story config',
    render: ({ active, key }) => (
      <StoryConfigPanel key={key} active={active} api={api} />
    ),
  });
});
