import React, { FC, useContext } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from '@component-controls/app-components';
import { BlockContext } from '@component-controls/blocks';

export interface DocLinkProps {
  id: string;
}
/**
 * native lonk to a documentation page
 */
export const DocLink: FC<DocLinkProps & Omit<LinkProps, 'href'>> = ({
  children,
  id,
  ...props
}) => {
  const { storeProvider } = useContext(BlockContext);
  const href = storeProvider.getDocPath(id);
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
