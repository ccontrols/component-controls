import React, { FC, useMemo } from 'react';

import { StoriesStore } from '@component-controls/specification';
import { loadStoryStore, Store } from '@component-controls/store';
import * as bundle from '@component-controls/webpack-compile/bundle';

import { Layout } from '../components/Layout';
import { pages } from '../config/pages';

interface SitePageProps {
  pathContext: {
    title: string;
    storyId: string;
  };
}

const SitePage: FC<SitePageProps> = ({ pathContext: { title, storyId } }) => {
  const storyStore = useMemo(
    () =>
      new Store({
        store: loadStoryStore(bundle),
        updateLocalStorage: false,
      }),
    [],
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
