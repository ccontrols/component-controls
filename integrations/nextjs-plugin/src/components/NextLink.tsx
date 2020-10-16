import React, { FC, useMemo } from 'react';
import { LinkProps } from 'theme-ui';
import Link from 'next/link';
import { getHomePath, ensureTrailingSlash } from '@component-controls/core';
import { useStore } from '@component-controls/store';

export const NextLink: FC<LinkProps & { to?: string }> = ({
  href = '',
  children,
  ...props
}) => {
  const store = useStore();
  const homePath = useMemo(() => getHomePath(store), [store]);
  const homePathParts = homePath === '/' ? 1 : homePath.split('/').length;
  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  const urlparts = href.split('/');
  const isHomePage = href === homePath;
  const isDocTypeHome =
    (!isHomePage && urlparts.length === 1 + homePathParts) ||
    (urlparts.length === 2 + homePathParts &&
      urlparts[1 + homePathParts] === '');

  const homePagePrefix = ensureTrailingSlash(homePath);
  const dynamicHref = isHomePage
    ? homePath
    : isDocTypeHome
    ? `${homePagePrefix}[doctype]`
    : `${homePagePrefix}[doctype]/[...docid]`;
  return (
    <Link href={dynamicHref} as={`${href}`}>
      <a {...props}>{children}</a>
    </Link>
  );
};
