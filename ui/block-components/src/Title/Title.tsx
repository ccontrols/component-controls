import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Heading, HeadingProps } from 'theme-ui';

const StyledHeading = styled(Heading)(() => ({
  fontWeight: 900,
  paddingBottom: '25px',
}));

export type TitleProps = HeadingProps;

export const Title: FC<TitleProps> = ({ children, ...rest }) => (
  <StyledHeading as="h1" {...rest}>
    {children}
  </StyledHeading>
);
