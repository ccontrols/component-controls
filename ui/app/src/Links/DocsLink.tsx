import React, { FC, useContext } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from '@component-controls/app-components';
import { BlockContext } from '@component-controls/blocks';

/**
 * native lonk to the documentation
 */
export const DocsLink: FC<Omit<LinkProps, 'href'>> = ({
  children,
  ...props
}) => {
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const { basePath = '' } = config?.pages?.['story'] || {};

  return (
    <Link href={basePath} {...props}>
      {children}
    </Link>
  );
};
