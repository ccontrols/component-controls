import React, { FC } from 'react';
import { Heading, HeadingProps } from 'theme-ui';

interface SubtitleOwnProps {
  /**
   * text to be displayed in the component.
   */
  children?: string;
  /**
   * DOM node type to render as. By default h3.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export type SubtitleProps = SubtitleOwnProps &
  Omit<HeadingProps, 'children' | 'as'>;

/**
 * `h2` level heading with faded text and font-weight 400.
 */
export const Subtitle: FC<SubtitleProps> = ({ children, ...rest }) => {
  return (
    <Heading as="h2" variant="subtitle" {...rest}>
      {children}
    </Heading>
  );
};
