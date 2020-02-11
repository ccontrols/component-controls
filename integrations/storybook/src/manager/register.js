import * as React from 'react';
import addons from '@storybook/addons';
import { PropsPanel } from './Panel.tsx';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from '../shared/shared';

addons.register(ADDON_ID, api => {
  addons.addPanel(PANEL_ID, {
    title: 'Controls',
    // eslint-disable-next-line react/display-name
    render: ({ active, key }) => (
      <PropsPanel api={api} key={key} active={active} />
    ),
    paramKey: PARAM_KEY,
  });
});
