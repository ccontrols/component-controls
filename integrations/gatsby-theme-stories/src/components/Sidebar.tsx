/** @jsx jsx */
import { Sidenav } from '@theme-ui/sidenav';
import { jsx, useColorMode } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { StoriesKind } from '@component-controls/specification';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { ColorMode } from './ColorMode';

export const Sidebar = () => {
  const { siteTitle } = useSiteMetadata();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

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
  const kinds = data.allStoryKind.edges;
  return (
    <div>
      <div
        data-testid="Title"
        sx={{
          backgroundColor: `primary`,
          p: 3,
          color: `background`,
          fontWeight: `bold`,
          fontSize: 1,
        }}
      >
        {siteTitle}
      </div>
      <ColorMode isDark={isDark} toggle={toggleColorMode} />
      <Sidenav
        sx={{
          a: {
            fontWeight: `normal !important`,
            '&:hover': {
              textDecoration: `none !important`,
            },
          },
          ul: {
            position: `sticky`,
            top: 2,
          },
          'ul > li': { fontWeight: `bold`, a: { px: 0 } },
          'ul > li > ul > li': { paddingLeft: 3 },
          p: 3,
          pt: 2,
          overflowY: [`auto`, `auto`, `initial`],
          width: `initial`,
        }}
      >
        {kinds.map(({ node: kind }: { node: StoriesKind }) => (
          //@ts-ignore
          <li key={kind.title} mdxType="li">
            <a href={`/${kind.title.toLowerCase()}`}>{kind.title}</a>
          </li>
        ))}
      </Sidenav>
    </div>
  );
};
