# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
-   [API](#api)
    -   [<ins>Store</ins>](#insstoreins)
    -   [<ins>Header</ins>](#insheaderins)
    -   [<ins>Layout</ins>](#inslayoutins)
    -   [<ins>SEO</ins>](#insseoins)
    -   [<ins>Sidebar</ins>](#inssidebarins)
    -   [<ins>pages</ins>](#inspagesins)
    -   [<ins>pages</ins>](#inspagesins-1)
    -   [<ins>StoryPage</ins>](#insstorypageins)

# In action

[Example site](https://components-storybook-6-no-docs.netlify.app/?path=/test/components-actioncontainer--overview)

# Overview

Accessibility testing plugin using the [axe-core](https://github.com/dequelabs/axe-core) library from [deque](https://www.deque.com/axe/)

Some of the design goals:

-   Gatsby theme quick start.
-   Full UI configurability with components shadowing.

# Getting Started

## Install

```sh
yarn add gatsby-theme-stories
```

## Configure

the default options will configure `componnet-controls` to work with react apps,  with `reac-docgen` for prop-types and `react-docgen-typescript` for typescript props information

in `gatsby-config.js`:

```js
  plugins: [
    ...
    {
      resolve: '@component-controls/gatsby-theme-stories',
      options: {
        //path to the configuration files
        configPath: '.config',
      },
    },
    ...
  ],

```

# API

<react-docgen-typescript path="./src" exclude="Store.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>Store</ins>

Store class used to query the stories and exchange information between processes

_Store [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/index.ts)_

## <ins>Header</ins>

_Header [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/Header.tsx)_

### properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `title` | _string_ |             |

## <ins>Layout</ins>

_Layout [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/Layout.tsx)_

### properties

| Name          | Type          | Description |
| ------------- | ------------- | ----------- |
| `title`       | _string_      |             |
| `storyStore*` | _Store_       |             |
| `storyId*`    | _string_      |             |
| `docPath*`    | _string_      |             |
| `pages*`      | _PagesConfig_ |             |

## <ins>SEO</ins>

_SEO [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/SEO.tsx)_

### properties

| Name          | Type     | Description |
| ------------- | -------- | ----------- |
| `title`       | _string_ |             |
| `description` | _string_ |             |
| `pathname`    | _string_ |             |
| `image`       | _string_ |             |

## <ins>Sidebar</ins>

_Sidebar [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/Sidebar.tsx)_

### properties

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| `docPath` | _string_ |             |

## <ins>pages</ins>

_pages [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/config/pages.tsx)_

## <ins>pages</ins>

_pages [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/pages/index.tsx)_

## <ins>StoryPage</ins>

_StoryPage [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/templates/StoryPage.tsx)_

### properties

| Name           | Type                              | Description |
| -------------- | --------------------------------- | ----------- |
| `pathContext*` | _{ title: string; doc: string; }_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
