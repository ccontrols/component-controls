/* eslint-disable react/display-name */
import * as React from 'react';
import addons from '@storybook/addons';
import { StorySourcePanel } from './panel/StorySourcePanel';
import { STORYSOURCE_PANEL_ID } from './panel/constants';

addons.register(STORYSOURCE_PANEL_ID, api => {
  addons.addPanel(`${STORYSOURCE_PANEL_ID}_panel`, {
    title: 'Story source',
    render: ({ active, key }) => (
      <StorySourcePanel key={key} active={active} api={api} />
    ),
  });
});
