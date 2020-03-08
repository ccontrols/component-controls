import React, { FC } from 'react';
import { Heading, HeadingProps } from 'theme-ui';

export type SubtitleProps = HeadingProps;

export const Subtitle: FC<SubtitleProps> = ({ children, ...rest }) => (
  <Heading as="h3" color="fadedText" css={{ fontWeight: 400 }} {...rest}>
    {children}
  </Heading>
);
