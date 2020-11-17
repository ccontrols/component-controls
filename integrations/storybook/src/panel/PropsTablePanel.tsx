import React, { FC } from 'react';
import { PropsTable } from '@component-controls/blocks';
import { AddonPanel, AddonPanelProps } from './AddonPanel';

export const PropsTablePanel: FC<AddonPanelProps> = props => (
  <AddonPanel {...props}>
    <PropsTable />
  </AddonPanel>
);
