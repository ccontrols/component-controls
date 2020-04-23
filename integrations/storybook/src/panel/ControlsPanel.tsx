import React from 'react';
import { ControlsTable } from '@component-controls/blocks';
import { AddonPanel, AddonPanelProps } from './AddonPanel';

export const ControlsPanel: React.FC<AddonPanelProps> = props => (
  <AddonPanel {...props}>
    <ControlsTable id="." />
  </AddonPanel>
);
