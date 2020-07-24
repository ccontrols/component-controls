import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from '@component-controls/components';
import { useConfig } from '@component-controls/blocks';

/**
 * native lonk to the documentation
 */
export const DocsLink: FC<Omit<LinkProps, 'href'>> = ({
  children,
  ...props
}) => {
  const config = useConfig();
  const { basePath = '' } = config?.pages?.['story'] || {};

  return (
    <Link href={basePath} {...props}>
      {children}
    </Link>
  );
};
