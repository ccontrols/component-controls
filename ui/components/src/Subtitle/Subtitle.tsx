import React, { FC } from 'react';
import { Heading, HeadingProps } from 'theme-ui';

interface SubtitleOwnProps {
  /**
   * text to be displayed in the component.
   */
  children?: string;
}

export type SubtitleProps = SubtitleOwnProps & Omit<HeadingProps, 'children'>;

/**
 * `h3` level heading with faded text and font-weight 400.
 */
export const Subtitle: FC<SubtitleProps> = ({ children, ...rest }) => (
  <Heading as="h3" color="fadedText" css={{ fontWeight: 400 }} {...rest}>
    {children}
  </Heading>
);
