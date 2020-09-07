/** @jsx jsx */
import { FC } from 'react';
import { jsx, LinkProps } from 'theme-ui';
import { Link } from 'gatsby';

export const GatsbyLink: FC<LinkProps & { to?: string }> = ({
  href,
  to,
  ...props
}) => {
  const link = href || to || '/';
  //@ts-ignore
  return link ? <Link to={link} {...props} activeClassName="active" /> : null;
};
