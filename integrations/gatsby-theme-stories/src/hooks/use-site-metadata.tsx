import { graphql, useStaticQuery } from 'gatsby';

interface UseSiteMetadataProps {
  site: {
    siteMetadata: {
      siteTitle: string;
      siteTitleAlt: string;
      siteHeadline: string;
      siteUrl: string;
      siteDescription: string;
      siteLanguage: string;
      siteImage: string;
      author: string;
      graphiQLUrl: string;
    };
  };
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<UseSiteMetadataProps>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
