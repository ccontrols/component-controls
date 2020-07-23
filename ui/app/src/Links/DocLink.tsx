import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from '@component-controls/components';
import { useDocumentPath } from '@component-controls/blocks';

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
  const href = useDocumentPath('story', id);
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
