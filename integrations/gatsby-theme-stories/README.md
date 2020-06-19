# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
-   [API](#api)
    -   [<ins>Store</ins>](#insstoreins)
    -   [<ins>GatsbyLink</ins>](#insgatsbylinkins)
    -   [<ins>Layout</ins>](#inslayoutins)
    -   [<ins>CategoryList</ins>](#inscategorylistins)
    -   [<ins>CategoryPage</ins>](#inscategorypageins)
    -   [<ins>DocPage</ins>](#insdocpageins)
    -   [<ins>PageList</ins>](#inspagelistins)

# In action

[Example site](https://components-storybook-6-no-docs.netlify.app/?path=/test/components-actioncontainer--overview)

# Overview

Gatsby theme for documenting your projects with component controls

-   Gatsby theme quick start.
-   Full UI configurability with components shadowing.

Special thanks for the inspiration drawn from [Gatsby themes](https://github.com/LekoArts/gatsby-themes).

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

_Store [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/index.ts)_

## <ins>GatsbyLink</ins>

_GatsbyLink [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/GatsbyLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `to`  | _string_                                                                     |             |

## <ins>Layout</ins>

_Layout [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/components/Layout.tsx)_

### properties

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| `docId` | _string_   |             |
| `type`  | _PageType_ |             |

## <ins>CategoryList</ins>

_CategoryList [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/templates/CategoryList.tsx)_

### properties

| Name           | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| `pathContext*` | _{ type: PageType; doc: string; }_ |             |

## <ins>CategoryPage</ins>

_CategoryPage [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/templates/CategoryPage.tsx)_

### properties

| Name           | Type                                                 | Description |
| -------------- | ---------------------------------------------------- | ----------- |
| `pathContext*` | _{ type: PageType; category: string; doc: string; }_ |             |

## <ins>DocPage</ins>

_DocPage [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/templates/DocPage.tsx)_

### properties

| Name           | Type                                                   | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| `pathContext*` | _{ doc: string; type: PageType; activeTab?: string; }_ |             |

## <ins>PageList</ins>

_PageList [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/gatsby-theme-stories/src/templates/PageList.tsx)_

### properties

| Name           | Type                  | Description |
| -------------- | --------------------- | ----------- |
| `pathContext*` | _{ type: PageType; }_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
