import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Heading, HeadingProps, Theme } from 'theme-ui';

const StyledHeading = styled(Heading)<{ theme?: Theme }>(({ theme }) => ({
  fontWeight: 400,
  paddingBottom: `${theme?.space?.[3]}px`,
}));

export type SubtitleProps = HeadingProps;

export const Subtitle: FC<SubtitleProps> = ({ children, ...rest }) => (
  <StyledHeading as="h3" color="fadedText" {...rest}>
    {children}
  </StyledHeading>
);
