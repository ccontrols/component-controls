/* eslint-disable react/display-name */
import * as React from 'react';
import addons from '@storybook/addons';
import { ControlsPanel } from './panel/ControlsPanel';
import { CONTROLS_PANEL_ID } from './panel/constants';

addons.register(CONTROLS_PANEL_ID, api => {
  addons.addPanel(`${CONTROLS_PANEL_ID}_panel`, {
    title: 'Controls',
    render: ({ active, key }) => (
      <ControlsPanel key={key} active={active} api={api} />
    ),
  });
});
