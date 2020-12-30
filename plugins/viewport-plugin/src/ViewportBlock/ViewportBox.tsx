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
    <HoverBox label={sizeLabel} sx={{ width: size, pb: 2 }}>
      <Story id={storyId} sx={{ mb: 0, width: size }} />
    </HoverBox>
  );
};
