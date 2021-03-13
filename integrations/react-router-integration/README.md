# Table of contents

- [In action](#in-action)
- [Overview](#overview)
- [API](#api)
  - [<ins>Layout</ins>](#inslayoutins)
  - [<ins>ReactRouterLink</ins>](#insreactrouterlinkins)
  - [<ins>DocHomeTemplate</ins>](#insdochometemplateins)
  - [<ins>DocPageTemplate</ins>](#insdocpagetemplateins)

# In action

[Live site](https://webpack5.component-controls.com)

# Overview

react-router integration plugin for webpack sites documenting your projects with component controls

- Exports list of routes with their components.
- Exports post-build routine to generate sitemaps and search indexes.

[Getting started with webpack](https://component-controls.com/tutorial/getting-started/webpack)

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>Layout</ins>

_Layout [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/components/Layout.tsx)_

### properties

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| `docId`     | _string_ |             |
| `storyId`   | _string_ |             |
| `activeTab` | _string_ |             |

## <ins>ReactRouterLink</ins>

_ReactRouterLink [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/components/ReactRouterLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `to`  | _string_                                                                     |             |

## <ins>DocHomeTemplate</ins>

_DocHomeTemplate [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/templates/DocHome.tsx)_

### properties

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| `type`    | _string_ |             |
| `docId`   | _string_ |             |
| `storyId` | _string_ |             |

## <ins>DocPageTemplate</ins>

_DocPageTemplate [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/templates/DocPage.tsx)_

### properties

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| `docId`     | _string_ |             |
| `storyId`   | _string_ |             |
| `type*`     | _string_ |             |
| `activeTab` | _string_ |             |
| `category`  | _string_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
