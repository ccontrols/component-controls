/* eslint-disable react/display-name */
import React from 'react';
import { getRoutePath } from '@component-controls/core';
import {
  MarkdownComponentType,
  Link,
  useIsLocalLink,
} from '@component-controls/components';
import { useStore } from '@component-controls/store';

export const mdxComponents: MarkdownComponentType = {
  a: props => {
    const { href, ...rest } = props;
    const isLocal = useIsLocalLink(href);
    const store = useStore();
    const link = isLocal ? getRoutePath(store, href) : href;
    return <Link href={link} {...rest} />;
  },
};
