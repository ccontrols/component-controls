import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Heading } from 'theme-ui';

const StyledHeading = styled(Heading)(() => ({
  fontWeight: 500,
  paddingBottom: '15px',
}));

export const Subtitle: FC = ({ children }) => (
  <StyledHeading as="h3">{children}</StyledHeading>
);
