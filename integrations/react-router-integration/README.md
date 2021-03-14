# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [API](#api)
    -   [<ins>withComponentControls</ins>](#inswithcomponentcontrolsins)
    -   [<ins>ReactRouterLink</ins>](#insreactrouterlinkins)

# In action

[Live site](https://webpack5.component-controls.com)

# Overview

react-router integration plugin for webpack sites documenting your projects with component controls

-   Exports list of routes with their components.
-   Exports post-build routine to generate sitemaps and search indexes.

[Getting started with webpack](https://component-controls.com/tutorial/getting-started/webpack)

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>withComponentControls</ins>

_withComponentControls [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/webpack-build.ts)_

### properties

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| `config*` | _any_        |             |
| `options` | _BuildProps_ |             |

## <ins>ReactRouterLink</ins>

_ReactRouterLink [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/components/ReactRouterLink.tsx)_

### properties

| Name  | Type                                                                         | Description |
| ----- | ---------------------------------------------------------------------------- | ----------- |
| `ref` | _((instance: HTMLAnchorElement) => void) \| RefObject&lt;HTMLAnchorElement>_ |             |
| `to`  | _string_                                                                     |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
