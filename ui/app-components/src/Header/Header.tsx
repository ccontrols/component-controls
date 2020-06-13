/** @jsx jsx */
import { FC } from 'react';
import { jsx, Flex, BoxProps } from 'theme-ui';

/**
 * A page header component
 */
export const Header: FC<BoxProps> = ({ children, ...rest }) => (
  <Flex as="header" variant="header" {...rest}>
    {children}
  </Flex>
);
