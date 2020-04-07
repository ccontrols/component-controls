/* eslint-disable react/display-name */
import * as React from 'react';
import addons from '@storybook/addons';
import { ControlsPanel } from './panel/ControlsPanel';
import { ADDON_ID, PANEL_ID } from './panel/constants';

addons.register(ADDON_ID, api => {
  addons.addPanel(PANEL_ID, {
    title: 'Controls',
    render: ({ active, key }) => (
      <ControlsPanel key={key} active={active} api={api} />
    ),
  });
});
