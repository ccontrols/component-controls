import React from 'react';
import { PropsTable } from '@component-controls/blocks';
import { AddonPanel, AddonPanelProps } from './AddonPanel';

export const PropsTablePanel: React.FC<AddonPanelProps> = props => (
  <AddonPanel {...props}>
    <PropsTable />
  </AddonPanel>
);
