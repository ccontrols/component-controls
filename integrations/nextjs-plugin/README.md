# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [API](#api)
    -   [FC](#fc)
    -   [getIndexPage](#getindexpage)
    -   [getHomePagesPaths](#gethomepagespaths)
    -   [getDocHomePage](#getdochomepage)
    -   [getDocPagesPaths](#getdocpagespaths)
    -   [getDocPage](#getdocpage)

# In action

[Live site](https://nextjs.component-controls.com)

# Overview

Next.js plugin for documenting your projects with component controls

-   Exports building and store interfaces.
-   Exports generic Layout component.

[Getting started with nextjs](https://component-controls.com/tutorial/getting-started/nextjs)

# API

<api-readme  />

<!-- START-API-README -->

## FC

**`type`**

_defined in [@types/react/types/react/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react/index.d.ts)_

**properties**

| Name           | Type                                    | Parent              |
| -------------- | --------------------------------------- | ------------------- |
| `propTypes`    | `WeakValidationMap`&lt;> \| `undefined` | `FunctionComponent` |
| `contextTypes` | `ValidationMap`&lt;> \| `undefined`     | `FunctionComponent` |
| `defaultProps` | `Partial`&lt;`P`> \| `undefined`        | `FunctionComponent` |
| `displayName`  | `string` \| `undefined`                 | `FunctionComponent` |

## getIndexPage

**`function`**

_defined in [@component-controls/nextjs-plugin/integrations/nextjs-plugin/src/page-links.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts#L17)_

**parameters**

| Name      | Type              |
| --------- | ----------------- |
| `returns` | `ReturnType`&lt;> |

## getHomePagesPaths

**`function`**

_defined in [@component-controls/nextjs-plugin/integrations/nextjs-plugin/src/page-links.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts#L19)_

**parameters**

| Name      | Type        |
| --------- | ----------- |
| `returns` | `string`\[] |

## getDocHomePage

**`function`**

_defined in [@component-controls/nextjs-plugin/integrations/nextjs-plugin/src/page-links.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts#L24)_

**parameters**

| Name      | Type                                                                                                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path*`   | `string`                                                                                                                                                                                                                                                                                          |
| `returns` | <details><summary>`DocHomePagesPath`</summary><blockquote>`type`: `"story"` \| `"blog"` \| `"page"` \| `"tags"` \| `"author"` \| `string`<br />`path`\*: `string`<br />`docId`: `string`<br />`storyId`: `string`<br />`lastModified`: `string`<br />`docIndex`: `boolean`</blockquote></details> |

## getDocPagesPaths

**`function`**

_defined in [@component-controls/nextjs-plugin/integrations/nextjs-plugin/src/page-links.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts#L31)_

**parameters**

| Name      | Type        |
| --------- | ----------- |
| `returns` | `string`\[] |

## getDocPage

**`function`**

_defined in [@component-controls/nextjs-plugin/integrations/nextjs-plugin/src/page-links.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts#L36)_

**parameters**

| Name       | Type                                                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `docType*` | `"story"` \| `"blog"` \| `"page"` \| `"tags"` \| `"author"` \| `string`                                                                                                                                                                                                        |
| `docId*`   | `string`\[]                                                                                                                                                                                                                                                                    |
| `returns`  | <details><summary>`DocPagesPath`</summary><blockquote>`type`: DocType<br />`path`\*: `string`<br />`query`: `string`<br />`lastModified`: `string`<br />`docId`: `string`<br />`storyId`: `string`<br />`category`: `string`<br />`activeTab`: `string`</blockquote></details> |

<!-- END-API-README -->
