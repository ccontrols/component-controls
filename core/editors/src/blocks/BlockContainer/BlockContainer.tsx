import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledBlockContainer = styled.div<{}>(() => ({
  position: 'relative',
  marginBottom: '25px',
  boxSadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
  borderRadius: 4,
  border: '1px solid rgba(0, 0, 0, 0.1)',
}));

export const BlockContainer: FC = ({ children }) => (
  <StyledBlockContainer> {children}</StyledBlockContainer>
);
