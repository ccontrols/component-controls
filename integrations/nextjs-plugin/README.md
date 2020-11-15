# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [API](#api)
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

[Getting started with nextjs](https://component-controls.com/tutorial/getting-started/nextjs)

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>getHomePagesPaths</ins>

_getHomePagesPaths [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts)_

### properties

| Name              | Type                                      | Description                                                                                     |
| ----------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `error`           | _string_                                  | build-time error string                                                                         |
| `config*`         | _RunConfiguration_                        | global configuration for config file                                                            |
| `docs*`           | _Record&lt;string, Document&lt;unknown>>_ | list of documents (pages)                                                                       |
| `stories*`        | _Record&lt;string, Story&lt;unknown>>_    | list of stories                                                                                 |
| `components*`     | _Record&lt;string, Component>_            | list of components used in stories and documents                                                |
| `packages*`       | _Record&lt;string, PackageInfo>_          | list of package.json files and their data used by the components and the stories of the project |
| `addObserver*`    | _(observer: StoreObserver) => void_       | storybook integration notifiers                                                                 |
| `removeObserver*` | _(observer: StoreObserver) => void_       |                                                                                                 |
| `updateStory*`    | _(story: Story&lt;unknown>) => void_      | update store, for example controls or state                                                     |

## <ins>getDocPagesPaths</ins>

_getDocPagesPaths [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/nextjs-plugin/src/page-links.ts)_

### properties

| Name              | Type                                      | Description                                                                                     |
| ----------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `error`           | _string_                                  | build-time error string                                                                         |
| `config*`         | _RunConfiguration_                        | global configuration for config file                                                            |
| `docs*`           | _Record&lt;string, Document&lt;unknown>>_ | list of documents (pages)                                                                       |
| `stories*`        | _Record&lt;string, Story&lt;unknown>>_    | list of stories                                                                                 |
| `components*`     | _Record&lt;string, Component>_            | list of components used in stories and documents                                                |
| `packages*`       | _Record&lt;string, PackageInfo>_          | list of package.json files and their data used by the components and the stories of the project |
| `addObserver*`    | _(observer: StoreObserver) => void_       | storybook integration notifiers                                                                 |
| `removeObserver*` | _(observer: StoreObserver) => void_       |                                                                                                 |
| `updateStory*`    | _(story: Story&lt;unknown>) => void_      | update store, for example controls or state                                                     |

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
