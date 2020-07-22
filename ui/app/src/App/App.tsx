/** @jsx jsx */
import { FC, Fragment } from 'react';
import { jsx, Box } from 'theme-ui';
import { SkipLinks, SkiLinksItemProps } from '@component-controls/components';
import { useStore, useDocument } from '@component-controls/blocks';
import { SEO } from '../SEO';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useAnalytics } from './useAnalytics';

export interface AppProps {
  /**
   * page title
   */
  title?: string;
}

/**
 * application container component. adds SEO, SkipLinks, Header and Footer.
 *
 */
export const App: FC<AppProps> = ({ title = '', children }) => {
  const store = useStore();
  const doc = useDocument();
  const { toolbar } = store.config || {};
  const items: SkiLinksItemProps[] = [
    {
      target: 'content',
      text: 'skip to main content',
    },
  ];
  if (!doc?.layout?.fullPage) {
    items.push({
      target: 'sidebar',
      text: 'skip to navigation sidebar',
    });
    items.push({
      target: 'contextbar',
      text: 'skip to context sidebar',
    });
  }
  const titleParts = title ? title.split('/') : [''];
  const pageTitle = titleParts[titleParts.length - 1];
  const pageDescription = doc ? store.getDocDescription(doc) : undefined;
  useAnalytics(store);

  return (
    <Fragment>
      <SEO title={pageTitle} description={pageDescription} />
      <SkipLinks items={items} />
      <Box variant="app">
        <Header toolbar={toolbar} />

        {children}
        <Footer />
      </Box>
    </Fragment>
  );
};
