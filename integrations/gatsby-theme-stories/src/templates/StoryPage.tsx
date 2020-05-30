import React, { FC, useMemo } from 'react';

import { StoriesStore } from '@component-controls/specification';
import { Store } from '@component-controls/store';

import { Layout } from '../components/Layout';
import { pages } from '../config/pages';

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
    <Layout
      title={title}
      storyStore={storyStore}
      storyId={storyId}
      pages={pages}
    />
  );
};

export default SitePage;
