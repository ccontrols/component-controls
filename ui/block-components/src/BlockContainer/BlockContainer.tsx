import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Subtitle } from '../Subtitle';
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
   * optional section title for the block
   */
  title?: string;
  /**
   * additional actions provided to the component
   */
  actions?: ActionItem[];
}
export const BlockContainer: FC<BlockContainerProps> = ({
  children,
  title,
  actions,
}) => (
  <SpacedBlockContainer>
    {title && <Subtitle>{title}</Subtitle>}
    {actions && <ActionBar actionItems={actions} />}
    <FramedBlockContainer>{children}</FramedBlockContainer>
  </SpacedBlockContainer>
);
