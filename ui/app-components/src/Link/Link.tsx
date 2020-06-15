import React, { FC, useMemo } from 'react';
import { LinkProps } from 'theme-ui';
import { ExternalLink } from '@component-controls/components';
import { useGetLinkClass } from './LinkContext';
export const Link: FC<LinkProps> = props => {
  const { href } = props;
  //https://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative/10687158
  const r = useMemo(() => new RegExp('^(?:[a-z]+:)?//', 'i'), []);
  if (typeof href === 'string' && r.test(href)) {
    //@ts-ignore
    return <ExternalLink {...props} />;
  }
  const LinkClass = useGetLinkClass();
  return <LinkClass {...props} />;
};
