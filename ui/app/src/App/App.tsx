/** @jsx jsx */
import { FC, Fragment } from 'react';
import { jsx, Box } from 'theme-ui';
import { Helmet } from 'react-helmet';
import { SkipLinks, SkiLinksItemProps } from '@component-controls/components';
import {
  useStore,
  useCurrentDocument,
  useConfig,
} from '@component-controls/store';
import { SEO } from '../SEO';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useAnalytics } from './useAnalytics';
import { AppError } from '../AppError';
export interface AppProps {}

/**
 * application container component. adds SEO, SkipLinks, Header and Footer.
 *
 */
export const App: FC<AppProps> = ({ children }) => {
  const store = useStore();
  const doc = useCurrentDocument();
  const config = useConfig();
  const { toolbar } = config;
  const items: SkiLinksItemProps[] = [
    {
      target: 'content',
      text: 'skip to main content',
    },
  ];
  if (!doc?.fullPage) {
    items.push({
      target: 'sidebar',
      text: 'skip to navigation sidebar',
    });
    items.push({
      target: 'contextbar',
      text: 'skip to context sidebar',
    });
  }
  useAnalytics();
  const titleParts = doc?.title ? doc.title.split('/') : [''];
  const docTitle = titleParts[titleParts.length - 1];
  const { title, language, siteMap, seo, app } = config || {};
  const Wrapper = app || Fragment;
  return (
    <Fragment>
      <Helmet
        title={docTitle}
        defaultTitle={title}
        titleTemplate={`%s | ${title}`}
      >
        <html lang={language} />
        {siteMap && (
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        )}
      </Helmet>
      {seo || <SEO doc={doc} config={config} />}
      <SkipLinks items={items} />
      <Wrapper>
        <Box variant="app">
          <Header toolbar={toolbar} />
          <AppError error={store.error} />
          {children}
          <Footer />
        </Box>
      </Wrapper>
    </Fragment>
  );
};
