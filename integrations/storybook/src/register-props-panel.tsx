/* eslint-disable react/display-name */
import * as React from 'react';
import addons from '@storybook/addons';
import { PropsTablePanel } from './panel/PropsTablePanel';
import { PROPS_PANEL_ID } from './panel/constants';

addons.register(PROPS_PANEL_ID, api => {
  addons.addPanel(`${PROPS_PANEL_ID}_panel`, {
    title: 'Props',
    render: ({ active, key }) => (
      <PropsTablePanel key={key} active={active} api={api} />
    ),
  });
});
