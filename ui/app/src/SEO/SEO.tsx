import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import {
  ensureTrailingSlash,
  removeStartingSlash,
  RunConfiguration,
  Document,
} from '@component-controls/core';
import { useCurrentStory, useDocDescription } from '@component-controls/store';
import { useIsLocalLink, useTheme } from '@component-controls/components';
import { defaultLinks } from './defaultLinks';
export { Helmet };
export interface SEOProps {
  doc?: Document;
  config?: RunConfiguration;
}
export const SEO: FC<SEOProps> = ({ doc, config }) => {
  const story = useCurrentStory();
  const titleParts = doc?.title ? doc.title.split('/') : [''];
  const docTitle = titleParts[titleParts.length - 1];
  const docDescription = useDocDescription(doc);
  const keywords = doc?.keywords || doc?.tags;
  const {
    title,
    siteUrl = '',
    description,
    image,
    author: siteAuthor,
    links = defaultLinks,
  } = config || {};
  const pageImage = doc?.image || image;
  const isLocalImage = pageImage && useIsLocalLink(pageImage);
  const theme = useTheme();
  const imageUrl =
    isLocalImage && pageImage
      ? ensureTrailingSlash(siteUrl) + removeStartingSlash(pageImage)
      : 'hello' || pageImage;
  console.log(typeof imageUrl, imageUrl);
  const pageDescription = story?.description || docDescription || description;
  const url = typeof window === 'undefined' ? siteUrl : window.location.href;
  const author = doc?.author || siteAuthor;
  return (
    <Helmet>
      {Array.isArray(keywords) && (
        <meta name="keywords" content={keywords.join(',')} />
      )}
      {pageDescription && <meta name="description" content={pageDescription} />}
      {imageUrl && <meta name="image" content={imageUrl} />}
      <meta property="og:title" content={docTitle} />
      <meta property="og:url" content={url} />
      {pageDescription && (
        <meta property="og:description" content={pageDescription} />
      )}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {pageDescription && (
        <meta property="og:image:alt" content={pageDescription} />
      )}
      <meta property="og:type" content="website" />

      <meta
        name="twitter:card"
        content={imageUrl ? 'summary_large_image' : 'summary'}
      />

      <meta name="twitter:site" content={siteAuthor} />
      <meta name="twitter:title" content={docTitle} />
      <meta name="twitter:url" content={url} />
      {pageDescription && (
        <meta name="twitter:description" content={pageDescription} />
      )}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {pageDescription && (
        <meta name="twitter:image:alt" content={pageDescription} />
      )}
      <meta name="twitter:creator" content={author} />
      {links &&
        links.map((link, idx) => <link key={`meta_key${idx}`} {...link} />)}
      <meta name="msapplication-TileColor" content={theme.colors?.primary} />
      <meta name="application-name" content={title} />
      <meta name="theme-color" content={theme.colors?.background} />
    </Helmet>
  );
};
