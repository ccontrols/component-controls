/** @jsx jsx */
import { FC, Fragment } from 'react';
import { jsx, Box } from 'theme-ui';
import { SkipLinks, SkipLinksItemProps } from '@component-controls/components';
import {
  useStore,
  useCurrentDocument,
  useConfig,
} from '@component-controls/store';
import { SEO, SEOProps } from '../SEO';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useAnalytics } from './useAnalytics';
import { AppError } from '../AppError';
export interface AppProps {
  Helmet?: SEOProps['Helmet'];
  type?: string;
}

/**
 * application container component. adds SEO, SkipLinks, Header and Footer.
 *
 */
export const App: FC<AppProps> = ({ children, Helmet, type = '' }) => {
  const store = useStore();
  const doc = useCurrentDocument();
  const config = useConfig();
  const { toolbar } = config;
  const items: SkipLinksItemProps[] = [
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
  const { app } = config || {};
  const Wrapper = app || Fragment;
  return (
    <Fragment>
      <SEO doc={doc} config={config} title={type} Helmet={Helmet} />
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
