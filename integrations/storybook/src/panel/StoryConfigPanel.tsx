import React from 'react';
import { StoryConfig } from '@component-controls/blocks';
import { AddonPanel, AddonPanelProps } from './AddonPanel';

export const StoryConfigPanel: React.FC<AddonPanelProps> = props => (
  <AddonPanel {...props}>
    <StoryConfig id="." />
  </AddonPanel>
);
