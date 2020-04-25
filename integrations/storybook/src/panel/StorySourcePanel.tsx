import React from 'react';
import { StorySource } from '@component-controls/blocks';
import { AddonPanel, AddonPanelProps } from './AddonPanel';

export const StorySourcePanel: React.FC<AddonPanelProps> = props => (
  <AddonPanel {...props}>
    <StorySource id="." />
  </AddonPanel>
);
