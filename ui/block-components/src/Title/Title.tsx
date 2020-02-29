import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Heading } from 'theme-ui';

const StyledHeading = styled(Heading)(() => ({
  fontWeight: 900,
  paddingBottom: '25px',
}));

export const Title: FC = ({ children }) => (
  <StyledHeading as="h1">{children}</StyledHeading>
);
