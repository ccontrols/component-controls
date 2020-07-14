/** @jsx jsx */
import { FC } from 'react';
import { jsx, LinkProps } from 'theme-ui';
import Link from 'next/link';

export const NextLink: FC<LinkProps & { to?: string }> = ({
  href,
  to,
  children,
  ...props
}) => (
  <Link href={href || to || ''}>
    <a {...props}>{children}</a>
  </Link>
);
