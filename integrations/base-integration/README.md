# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [API](#api)
    -   [<ins>buildBundle</ins>](#insbuildbundleins)
    -   [<ins>webpackConfig</ins>](#inswebpackconfigins)
    -   [<ins>asyncWebpackConfig</ins>](#insasyncwebpackconfigins)
    -   [<ins>Layout</ins>](#inslayoutins)

# In action

[Live site](https://component-controls.com)

# Overview

react-router integration plugin for webpack sites documenting your projects with component controls

-   Exports list of routes for use in node.js environment
-   Exports react ui components to use in browser environment

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>buildBundle</ins>

_buildBundle [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/base-integration/src/webpack-build.ts)_

### properties

| Name         | Type         | Description |
| ------------ | ------------ | ----------- |
| `options`    | _BuildProps_ |             |
| `onEndBuild` | _OnEndBuild_ |             |

## <ins>webpackConfig</ins>

_webpackConfig [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/base-integration/src/webpack-build.ts)_

### properties

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| `config`  | _any_        |             |
| `options` | _BuildProps_ |             |

## <ins>asyncWebpackConfig</ins>

_asyncWebpackConfig [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/base-integration/src/webpack-build.ts)_

### properties

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| `config`  | _any_        |             |
| `options` | _BuildProps_ |             |

## <ins>Layout</ins>

_Layout [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/base-integration/src/components/Layout.tsx)_

### properties

| Name           | Type                                                                 | Description |
| -------------- | -------------------------------------------------------------------- | ----------- |
| `type`         | _string_                                                             |             |
| `docId`        | _string_                                                             |             |
| `storyId`      | _string_                                                             |             |
| `lastModified` | _string_                                                             |             |
| `docIndex`     | _boolean_                                                            |             |
| `query`        | _string_                                                             |             |
| `category`     | _string_                                                             |             |
| `activeTab`    | _string_                                                             |             |
| `Link*`        | _FC&lt;LinkProps>_                                                   |             |
| `Helmet*`      | _ComponentType&lt;{ htmlAttributes?: Record&lt;string, unknown>; }>_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
