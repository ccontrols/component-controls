import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { ExternalLink } from '../ExternalLink';
import { useGetLinkClass } from './LinkContext';
import { useIsLocalLink } from './useIsLocalLink';

/**
 * Configurable anchor link with a LinkContext. Also checks if the link is intrenal to the site/app or external.
 */
export const Link: FC<LinkProps> = (props: LinkProps) => {
  const { href } = props;
  const isLocal = useIsLocalLink(href);

  const LinkClass = useGetLinkClass();
  if (!isLocal) {
    return <ExternalLink {...props} />;
  }
  return <LinkClass {...props} />;
};
