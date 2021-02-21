import React, { FC, ComponentType } from 'react';
import {
  ensureTrailingSlash,
  removeStartingSlash,
  RunConfiguration,
  Document,
  getStoryPath,
} from '@component-controls/core';
import {
  useActiveTab,
  useCurrentStory,
  useDocDescription,
  useStore,
} from '@component-controls/store';
import { useIsLocalLink, useTheme } from '@component-controls/components';
import { defaultLinks } from './defaultLinks';

export interface SEOProps {
  Helmet?: ComponentType;
  doc?: Document;
  config?: RunConfiguration;
}
export const SEO: FC<SEOProps> = ({ Helmet, doc, config }) => {
  const story = useCurrentStory();
  const store = useStore();
  const tab = useActiveTab();
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
  const isLocalImage = useIsLocalLink(pageImage);
  const theme = useTheme();
  const imageUrl =
    isLocalImage && pageImage
      ? ensureTrailingSlash(siteUrl) + removeStartingSlash(pageImage)
      : pageImage;
  const pageDescription = ((typeof story?.description === 'string'
    ? story.description
    : undefined) ||
    docDescription ||
    description) as string | undefined;
  const url =
    typeof window === 'undefined'
      ? getStoryPath(story?.id, doc, store, tab)
      : window.location.href;
  const author = doc?.author || siteAuthor;

  return Helmet ? (
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

      <meta name="twitter:card" content="summary" />

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
      {typeof theme.colors?.primary === 'string' && (
        <meta name="msapplication-TileColor" content={theme.colors.primary} />
      )}
      <meta name="application-name" content={title} />
      {typeof theme.colors?.background === 'string' && (
        <meta name="theme-color" content={theme.colors.background} />
      )}
    </Helmet>
  ) : null;
};
