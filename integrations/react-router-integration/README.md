# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [API](#api)
    -   [ControlsPage](#controlspage)
    -   [useRoutes](#useroutes)

# In action

[Live site](https://webpack5.component-controls.com)

# Overview

react-router integration plugin for webpack sites documenting your projects with component controls

-   Exports list of routes with their components.
-   Exports post-build routine to generate sitemaps and search indexes.

[Getting started with webpack](https://component-controls.com/tutorial/getting-started/webpack)

# API

<api-readme />

<!-- START-API-README -->

## ControlsPage

**`function`**

_defined in [@component-controls/react-router-integration/integrations/react-router-integration/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/index.tsx#L10)_

**parameters**

| Name      | Type                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props*`  | <details><summary>`Omit`</summary><blockquote>`type`: `"story"` \| `"blog"` \| `"page"` \| `"tags"` \| `"author"` \| `string`<br />`docId`: `string`<br />`storyId`: `string`<br />`lastModified`: `string`<br />`docIndex`: `boolean`<br />`query`: `string`<br />`category`: `string`<br />`activeTab`: `string`<br />`userData`: `Record`&lt;`string`, `any`></blockquote></details> |
| `returns` | <details><summary>`FC`&lt;></summary><blockquote>`propTypes`: `WeakValidationMap`&lt;> \| `undefined`<br />`contextTypes`: `ValidationMap`&lt;> \| `undefined`<br />`defaultProps`: `Partial`&lt;`P`> \| `undefined`<br />`displayName`: `string` \| `undefined`</blockquote></details>                                                                                                 |

## useRoutes

**`function`**

_defined in [@component-controls/react-router-integration/integrations/react-router-integration/src/index.tsx](https://github.com/ccontrols/component-controls/tree/master/integrations/react-router-integration/src/index.tsx#L24)_

**parameters**

| Name      | Type                     |
| --------- | ------------------------ |
| `returns` | (`ReactElement`&lt;>)\[] |

<!-- END-API-README -->
