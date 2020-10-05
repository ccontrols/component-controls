/** @jsx jsx */
import { FC } from 'react';
import { jsx, LinkProps } from 'theme-ui';
import Link from 'next/link';

export const NextLink: FC<LinkProps & { to?: string }> = ({
  href = '',
  children,
  ...props
}) => {
  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  const urlparts = href.split('/');
  const isHomePage =
    urlparts.length === 2 && urlparts[0] === '' && urlparts[1] === '';
  const isDocTypeHome =
    (!isHomePage && urlparts.length === 2) ||
    (urlparts.length === 3 && urlparts[2] === '');
  const dynamicHref = isHomePage
    ? '/'
    : isDocTypeHome
    ? '/[doctype]'
    : '/[doctype]/[...docid]';
  return (
    <Link href={dynamicHref} as={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};
