/** @jsx jsx */
import { FC, Fragment, useContext, useEffect } from 'react';
import { jsx, Box } from 'theme-ui';
import { SkipLinks, SkiLinksItemProps } from '@component-controls/components';
import { BlockContext } from '@component-controls/blocks';
import { SEO } from '../SEO';
import { Header } from '../Header';
import { Footer } from '../Footer';

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
  const { storeProvider, docId } = useContext(BlockContext);
  const doc = docId ? storeProvider.getStoryDoc(docId) : undefined;
  const { toolbar } = storeProvider.config || {};
  const items: SkiLinksItemProps[] = [
    {
      target: 'content',
      text: 'skip to main content',
    },
  ];
  if (!doc || !doc.fullPage) {
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
  const pageDescription = doc
    ? storeProvider.getDocDescriotion(doc)
    : undefined;
  useEffect(() => {
    storeProvider.visitPage();
  }, [storeProvider]);

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
