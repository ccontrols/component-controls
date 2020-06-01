/** @jsx jsx */
import { FC } from 'react';
import { jsx, LinkProps, Theme } from 'theme-ui';

import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { StoriesKind } from '@component-controls/specification';
import { Sidebar as AppSidebar } from '@component-controls/app';

import { useSiteMetadata } from '../hooks/use-site-metadata';

const Link: FC<LinkProps> = props => (
  //@ts-ignore
  <GatsbyLink
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
export interface SidebarProps {
  kindPath?: string;
}

export const Sidebar: FC<SidebarProps> = ({ kindPath }) => {
  const { siteTitle } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query {
      allStoryKind {
        edges {
          node {
            title
          }
        }
      }
    }
  `);
  const kinds = data.allStoryKind.edges.map(
    ({ node }: { node: StoriesKind }) => node,
  );

  return (
    <AppSidebar
      title={siteTitle}
      kinds={kinds}
      kindPath={kindPath}
      buttonClass={Link}
    />
  );
};
