import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { getRoutePath } from '@component-controls/core';
import {
  MarkdownComponentType,
  Link,
  useIsLocalLink,
} from '@component-controls/components';
import { useStore } from '@component-controls/store';

const AnchorElement: FC<LinkProps> = props => {
  const { href, ...rest } = props;
  const isLocal = useIsLocalLink(href);
  const store = useStore();
  const link = isLocal ? getRoutePath(store, href) : href;
  return <Link href={link} {...rest} />;
};
export const mdxComponents: MarkdownComponentType = {
  a: AnchorElement,
};
