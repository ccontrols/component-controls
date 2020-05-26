import React, { FC, useMemo } from 'react';
import { ClassicPage } from '@component-controls/pages';

import { StoriesStore } from '@component-controls/specification';
import { Store } from '@component-controls/store';
import { Layout } from '../components/Layout';

interface SitePageProps {
  pathContext: {
    title: string;
    loadedStore: StoriesStore;
    storyId: string;
  };
}

const SitePage: FC<SitePageProps> = ({
  pathContext: { title, loadedStore, storyId },
}) => {
  const storyStore = useMemo(
    () =>
      new Store({
        store: loadedStore,
        updateLocalStorage: false,
      }),
    [loadedStore],
  );
  return (
    <Layout title={title} storyStore={storyStore} storyId={storyId}>
      <ClassicPage />
    </Layout>
  );
};

export default SitePage;
