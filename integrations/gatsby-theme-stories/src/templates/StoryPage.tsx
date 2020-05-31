import React, { FC, useMemo } from 'react';
import { loadStoryStore, Store } from '@component-controls/store';
const bundle = require('@component-controls/webpack-compile/bundle');

import { Layout } from '../components/Layout';
import { pages } from '../config/pages';

interface SitePageProps {
  pathContext: {
    title: string;
    kind: string;
  };
}

const SitePage: FC<SitePageProps> = ({ pathContext: { kind } }) => {
  const storyStore = useMemo(
    () =>
      new Store({
        store: loadStoryStore(bundle),
        updateLocalStorage: false,
      }),
    [],
  );
  const docFile = storyStore.getStoryKind(kind);
  return (
    <Layout
      title={kind}
      storyStore={storyStore}
      kindPath={kind}
      storyId={docFile?.stories?.[0] || ''}
      pages={pages}
    />
  );
};

export default SitePage;
