import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from 'react-router-dom';

export const ReactRouterLink: FC<LinkProps & { to?: string }> = ({
  href = '',
  children,
  ...props
}) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};
