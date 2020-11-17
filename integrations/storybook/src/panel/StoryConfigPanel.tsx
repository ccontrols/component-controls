import React, { FC } from 'react';
import { StoryConfig } from '@component-controls/blocks';
import { AddonPanel, AddonPanelProps } from './AddonPanel';

export const StoryConfigPanel: FC<AddonPanelProps> = props => (
  <AddonPanel {...props}>
    <StoryConfig id="." />
  </AddonPanel>
);
