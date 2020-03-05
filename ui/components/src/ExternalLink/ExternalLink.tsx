import React, { FC } from 'react';
import { Link, LinkProps } from 'theme-ui';

export type ExternalLinkProps = LinkProps;

export const ExternalLink: FC<ExternalLinkProps> = (props: LinkProps) => (
  <Link {...props} target="_blank" rel="noopener noreferrer" />
);
