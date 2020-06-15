import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { ExternalLink } from '@component-controls/components';
import { useGetLinkClass } from './LinkContext';
export const Link: FC<LinkProps> = props => {
  const { href } = props;
  if (typeof href === 'string' && !/\/$/.test(href)) {
    //@ts-ignore
    return <ExternalLink {...props} />;
  }
  const LinkClass = useGetLinkClass();
  return <LinkClass {...props} />;
};
