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
import { Layout } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
}

const HomePage: FC<PageListProps> = ({ type = defDocType, docId }) => {
  return (
    <Layout docId={docId} type={type}>
      <DocPage type={type} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { store } = require('@component-controls/nextjs-plugin');
  const { docId = null, type = null } = store.getIndexPage() || {};
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
import { Layout, store } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
}

const DocHomeTemplate: FC<PageListProps> = ({ type = defDocType, docId }) => {
  return (
    <Layout docId={docId} type={type}>
      <DocumentHomePage type={type} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = store.getHomePaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype: basepath } = params as { doctype: string };
  const { type = null, docId = null } =
    store.getHomePage(`/${basepath}/`) || {};
  return { props: { docId, type } };
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
import { Layout, store } from '@component-controls/nextjs-plugin';

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
  activeTab,
  category,
}) => {
  return (
    <Layout docId={docId} storyId={storyId} type={type}>
      <DocPage activeTab={activeTab} type={type} category={category} />
    </Layout>
  );
};

export default DocPageTemplate;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = store.getDocPaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype, docid } = params as { doctype: string; docid: string[] };
  const {
    type = null,
    docId = null,
    storyId = null,
    category = null,
    activeTab = null,
  } = store.getDocPage(`/${doctype}/${docid.join('/')}/`) || {};
  return { props: { docId, type, storyId, category, activeTab } };
};
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

## <ins>Layout</ins>

_Layout [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/components/Layout.tsx)_

### properties

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| `docId`   | _string_ |             |
| `storyId` | _string_ |             |
| `type`    | _string_ |             |

## <ins>NextLink</ins>

_NextLink [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/components/NextLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `to`  | _string_                                                                     |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
