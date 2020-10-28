import React from 'react';
import { Donut } from 'theme-ui';
import { Example } from '@component-controls/core';
import { PanelContainer } from './PanelContainer';

export default {
  title: 'Components/PanelContainer',
  component: PanelContainer,
};
const actions = [
  {
    node: 'panel-1',
    id: 'panel-1',
    'aria-label': 'display panel 1',
    panel: (
      <div>
        <h2>panel 1</h2>
        <Donut value={1 / 2} size={64} />
      </div>
    ),
  },
  {
    node: 'panel-2',
    id: 'panel-2',
    'aria-label': 'display panel 2',
    panel: (
      <div>
        <h2>panel 2</h2>

        <Donut value={1 / 3} size={64} />
      </div>
    ),
  },
  {
    node: 'action',
    'aria-label': 'some action without panel',
  },
];
export const overview: Example = () => {
  return (
    <PanelContainer actions={actions}>
      <Donut value={1} />
    </PanelContainer>
  );
};

export const openTab: Example = () => {
  return (
    <PanelContainer actions={actions} openTab="panel-1">
      <Donut value={1} />
    </PanelContainer>
  );
};

export const visibleTabs: Example = () => {
  return (
    <PanelContainer actions={actions} visibleTabs={true}>
      <Donut value={1} />
    </PanelContainer>
  );
};
