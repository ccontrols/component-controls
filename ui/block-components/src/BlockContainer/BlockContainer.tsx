import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ActionBar, ActionItem } from '@component-controls/components';

const SpacedBlockContainer = styled.div(() => ({
  position: 'relative',
  margin: '25px 0 40px 0',
}));

const FramedBlockContainer = styled.div(() => ({
  boxSadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
  borderRadius: 4,
  border: '1px solid rgba(0, 0, 0, 0.1)',
}));

export interface BlockContainerProps {
  /**
   * additional actions provided to the component
   */
  actions?: ActionItem[];
}
export const BlockContainer: FC<BlockContainerProps> = ({
  children,
  actions,
}) => (
  <SpacedBlockContainer>
    <FramedBlockContainer>{children}</FramedBlockContainer>
    {actions && <ActionBar actionItems={actions} />}
  </SpacedBlockContainer>
);
