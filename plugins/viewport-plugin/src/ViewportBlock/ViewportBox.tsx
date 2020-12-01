import React, { FC } from 'react';
import { Story } from '@component-controls/blocks';
import { HoverBox } from '@component-controls/components';

export interface ViewportBoxProps {
  storyId?: string;
  size: number;
  sizeLabel: string;
}
export const ViewportBox: FC<ViewportBoxProps> = ({
  storyId,
  size,
  sizeLabel,
}) => {
  return (
    <HoverBox label={sizeLabel}>
      <Story id={storyId} sx={{ mb: 0, minWidth: size }} />
    </HoverBox>
  );
};
