# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
    -   [Configure emotion ssr](#configure-emotion-ssr)
    -   [Create routes](#create-routes)
        -   [Create home page](#create-home-page)
        -   [Create document type pages](#create-document-type-pages)
        -   [Create document and story pages](#create-document-and-story-pages)
-   [API](#api)
    -   [<ins>build</ins>](#insbuildins)
    -   [<ins>\_\_type</ins>](#ins__typeins)
    -   [<ins>getHomePagesPaths</ins>](#insgethomepagespathsins)
    -   [<ins>getDocPagesPaths</ins>](#insgetdocpagespathsins)
    -   [<ins>Layout</ins>](#inslayoutins)
    -   [<ins>NextLink</ins>](#insnextlinkins)

# In action

[Live site](https://nextjs.component-controls.com)

# Overview

Next.js plugin for documenting your projects with component controls

-   Exports building and store interfaces.
-   Exports generic Layout component.

# Getting Started

## Install

```sh
yarn add @component-controls/nextjs-plugin
```

## Configure

the default options will configure `component-controls` to work with react apps,  with `react-docgen` for prop-types and `react-docgen-typescript` for typescript props information

in `next.config.js`:

```js
const withStories = require('@component-controls/nextjs-plugin/build');

module.exports = withStories({ configPath: '.config', ....other options });
```

## Configure emotion ssr

[`_app.js and _document.js`](https://github.com/vercel/next.js/tree/canary/examples/with-emotion/pages)

## Create routes

### Create home page

in `pages/index.tsx`:

```jsx
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { DocType, defDocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout, store, getIndexPage } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
}

const HomePage: FC<PageListProps> = ({ type = defDocType, docId }) => {
  return (
    <Layout docId={docId}>
      <DocPage type={type} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homePage = getIndexPage(store);
  const { docId = null, type = null } = homePage;
  return { props: { docId, type } };
};

export default HomePage;
```

### Create document type pages

in `pages/[doctype].tsx`:

```jsx
import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DocType, defDocType } from '@component-controls/core';
import { DocumentHomePage } from '@component-controls/app';
import {
  Layout,
  store,
  getHomePagesPaths,
  getDocHomePage,
} from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
  storyId?: string;
}

const DocHomeTemplate: FC<PageListProps> = ({
  type = defDocType,
  docId,
  storyId,
}) => {
  return (
    <Layout docId={docId} storyId={storyId}>
      <DocumentHomePage type={type} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getHomePagesPaths(store), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype: basepath } = params as { doctype: string };
  const page = getDocHomePage(store, basepath);
  const { type = null, docId = null, storyId = null } = page || {};
  return { props: { docId, storyId, type } };
};

export default DocHomeTemplate;

```

### Create document and story pages

in `pages/[doctype]/[...docid].tsx`:

```jsx
import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DocPage } from '@component-controls/app';
import { DocType } from '@component-controls/core';
import {
  Layout,
  store,
  getDocPagesPaths,
  getDocPage,
} from '@component-controls/nextjs-plugin';

interface DocPageProps {
  docId?: string;
  storyId?: string;
  type: DocType;
  activeTab?: string;
  category?: string;
}

const DocPageTemplate: FC<DocPageProps> = ({
  docId,
  storyId,
  type,
  category,
}) => {
  return (
    <Layout docId={docId} storyId={storyId}>
      <DocPage type={type} category={category} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getDocPagesPaths(store), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype, docid } = params as { doctype: string; docid: string[] };
  const page = getDocPage(store, doctype, docid);
  const {
    type = null,
    docId = null,
    storyId = null,
    category = null,
    activeTab = null,
  } = page || {};
  return { props: { docId, type, storyId, category, activeTab } };
};

export default DocPageTemplate;
```

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>build</ins>

_build [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/build.ts)_

### properties

| Name           | Type            | Description                                                           |
| -------------- | --------------- | --------------------------------------------------------------------- |
| `webPack`      | _Configuration_ | webpack configuration object                                          |
| `presets`      | _RuleTypes_     | a list of webpack configuration presets from webpack-configs packages |
| `configPath`   | _string_        | path to the configuration file e.g : '.storybook'                     |
| `distFolder`   | _string_        | public output folder for the bundle                                   |
| `bundleName`   | _string_        | public file name the bundle, by default 'component-controls.js'       |
| `staticFolder` | _string_        | public output folder for the assets like images                       |

## <ins>\_\_type</ins>

_\_\_type [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts)_

### properties

| Name              | Type                                | Description                                                                                     |
| ----------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `config`          | _RunConfiguration_                  | global configuration for config file                                                            |
| `docs*`           | _Documents_                         | list of story files, or groups                                                                  |
| `stories*`        | _StoreStories_                      | list of stories                                                                                 |
| `components*`     | _StoreComponents_                   | list of components used in stories                                                              |
| `packages*`       | _StorePackages_                     | list of package.json files and their data used by the components and the stories of the project |
| `addObserver*`    | _(observer: StoreObserver) => void_ | storybook integration notifiers                                                                 |
| `removeObserver*` | _(observer: StoreObserver) => void_ |                                                                                                 |
| `updateStory*`    | _(story: Story) => void_            | update store, for example controls or state                                                     |

## <ins>getHomePagesPaths</ins>

_getHomePagesPaths [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts)_

### properties

| Name              | Type                                | Description                                                                                     |
| ----------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `config`          | _RunConfiguration_                  | global configuration for config file                                                            |
| `docs*`           | _Documents_                         | list of story files, or groups                                                                  |
| `stories*`        | _StoreStories_                      | list of stories                                                                                 |
| `components*`     | _StoreComponents_                   | list of components used in stories                                                              |
| `packages*`       | _StorePackages_                     | list of package.json files and their data used by the components and the stories of the project |
| `addObserver*`    | _(observer: StoreObserver) => void_ | storybook integration notifiers                                                                 |
| `removeObserver*` | _(observer: StoreObserver) => void_ |                                                                                                 |
| `updateStory*`    | _(story: Story) => void_            | update store, for example controls or state                                                     |

## <ins>getDocPagesPaths</ins>

_getDocPagesPaths [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts)_

### properties

| Name              | Type                                | Description                                                                                     |
| ----------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `config`          | _RunConfiguration_                  | global configuration for config file                                                            |
| `docs*`           | _Documents_                         | list of story files, or groups                                                                  |
| `stories*`        | _StoreStories_                      | list of stories                                                                                 |
| `components*`     | _StoreComponents_                   | list of components used in stories                                                              |
| `packages*`       | _StorePackages_                     | list of package.json files and their data used by the components and the stories of the project |
| `addObserver*`    | _(observer: StoreObserver) => void_ | storybook integration notifiers                                                                 |
| `removeObserver*` | _(observer: StoreObserver) => void_ |                                                                                                 |
| `updateStory*`    | _(story: Story) => void_            | update store, for example controls or state                                                     |

## <ins>Layout</ins>

_Layout [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/components/Layout.tsx)_

### properties

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| `docId`     | _string_ |             |
| `storyId`   | _string_ |             |
| `activeTab` | _string_ |             |

## <ins>NextLink</ins>

_NextLink [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/components/NextLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `to`  | _string_                                                                     |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
