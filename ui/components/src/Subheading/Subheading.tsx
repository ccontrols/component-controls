import React, { FC } from 'react';
import { Heading, HeadingProps } from 'theme-ui';

export type SubheadingProps = Omit<HeadingProps, 'as'>;

/**
 * `h3` level headings
 */
export const Subheading: FC<SubheadingProps> = ({ children, ...rest }) => {
  return (
    <Heading as="h3" variant="subheading" {...rest}>
      {children}
    </Heading>
  );
};
