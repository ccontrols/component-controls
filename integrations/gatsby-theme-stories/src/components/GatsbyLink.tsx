import React, { FC, useMemo } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from 'gatsby';
import { getHomePath } from '@component-controls/core';
import { useStore } from '@component-controls/store';

export const GatsbyLink: FC<LinkProps & { to?: string }> = ({
  href,
  to,
  ...props
}) => {
  const store = useStore();
  const homePath = useMemo(() => getHomePath(store), [store]);
  const link = href || to || homePath;
  //
  return link ? <Link to={link} {...props} activeClassName="active" /> : null;
};
