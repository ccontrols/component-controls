import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useConfig } from '@component-controls/store';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
}
import * as appleTouchIcon from './media/apple-touch-icon.png';
import * as favIcon32 from './media/favicon-32x32.png';
import * as favIcon16 from './media/favicon-16x16.png';
import * as favIcon192 from './media/android-chrome-192x192.png';
import * as favIcon512 from './media/android-chrome-512x512.png';
import * as pinnedTab from './media/safari-pinned-tab.svg';

export const SEO: FC<SEOProps> = ({
  title,
  description,
  pathname,
  image: propImage,
  children,
}) => {
  const config = useConfig();
  const {
    siteTitle,
    siteUrl = '',
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
    siteMap,
  } = config || {};
  const image = propImage || defaultImage;
  const seo = {
    title: title || siteTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: image ? `${siteUrl}${image}` : undefined,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      {siteMap && (
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      )}
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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={appleTouchIcon.default}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={favIcon32.default}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={favIcon16.default}
      />
      <link rel="icon" sizes="192x192" href={favIcon192.default} />
      <link rel="icon" sizes="512x512" href={favIcon512.default} />
      <link rel="mask-icon" color="#5bbad5" href={pinnedTab.default} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {children}
    </Helmet>
  );
};
