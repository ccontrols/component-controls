import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from '@component-controls/components';
import { useConfig } from '@component-controls/store';
import { defDocType } from '@component-controls/core';

/**
 * native lonk to the documentation
 */
export const DocsLink: FC<Omit<LinkProps, 'href'>> = ({
  children,
  ...props
}) => {
  const config = useConfig();
  const { basePath = '' } = config.pages?.[defDocType] || {};

  return (
    <Link href={basePath} {...props}>
      {children}
    </Link>
  );
};
