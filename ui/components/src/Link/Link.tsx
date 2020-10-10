import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { ExternalLink } from '../ExternalLink';
import { useGetLinkClass } from './LinkContext';
import { useIsLocalLink } from './useIsLocalLink';

export const Link: FC<LinkProps> = props => {
  const { href } = props;
  const isLocal = useIsLocalLink(href);

  const LinkClass = useGetLinkClass();
  if (!isLocal) {
    //@ts-ignore
    return <ExternalLink {...props} />;
  }
  return <LinkClass {...props} />;
};
