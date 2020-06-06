import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { useGetLinkClass } from './LinkContext';
export const Link: FC<LinkProps> = props => {
  const LinkClass = useGetLinkClass();
  return <LinkClass {...props} />;
};
