/** @jsx jsx */
import { FC } from 'react';
import { jsx, LinkProps, Theme } from 'theme-ui';
import { Link } from 'gatsby';

export const GatsbyLink: FC<LinkProps & { to?: string }> = ({
  href,
  to,
  ...props
}) => (
  //@ts-ignore
  <Link
    to={href || to || ''}
    {...props}
    activeClassName="active"
    sx={{
      color: 'inherit',
      '&.active': {
        borderLeft: (t: Theme) => `4px solid ${t?.colors?.accent}`,
        color: 'white',
      },
      ':hover': {
        backgroundColor: 'shadow',
      },
    }}
  />
);
