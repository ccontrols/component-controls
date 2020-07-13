/** @jsx jsx */
import { FC } from 'react';
import { jsx, LinkProps } from 'theme-ui';
import Link from 'next/link';

export const NextLink: FC<LinkProps & { to?: string }> = ({
  href,
  to,
  ...props
}) => (
  //@ts-ignore
  <Link to={href || to || ''} {...props} activeClassName="active" />
);
