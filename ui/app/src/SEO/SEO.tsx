import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { BlockContext } from '@component-controls/blocks';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
}

export const SEO = ({
  title,
  description,
  pathname,
  image: propImage,
  children,
}: SEOProps) => {
  const { storeProvider } = useContext(BlockContext);
  const config = storeProvider.config;
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = config || {};
  const image = propImage || defaultImage;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: image ? `${siteUrl}${image}` : undefined,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      {/* <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix(`/favicon-32x32.png`)}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix(`/favicon-16x16.png`)}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix(`/apple-touch-icon.png`)}
      /> */}
      {children}
    </Helmet>
  );
};
