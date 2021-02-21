# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Usage](#usage)
-   [API](#api)
    -   [<ins>Catalog</ins>](#inscatalogins)
    -   [<ins>ComponentCard</ins>](#inscomponentcardins)
    -   [<ins>ComponentFilter</ins>](#inscomponentfilterins)
    -   [<ins>ComponentList</ins>](#inscomponentlistins)
    -   [<ins>ComponentsCatalog</ins>](#inscomponentscatalogins)
    -   [<ins>ComponentCatalogContextProvider</ins>](#inscomponentcatalogcontextproviderins)

# In action

[Example site](https://component-controls.com/api/components-index)

# Overview

Addon to collect and display a grid-like list of component cards. Each card displays some component statistics - like the dates the component file was created and last committed, the number of commits as well as the component contributors, the number of lines and comments as well as a preview of the first story in the components' document [ESM](https://component-controls.com/tutorial/esmodules-stories) or [MDX](https://component-controls.com/tutorial/esmodules-stories) file.

# Getting Started

## Install

```sh
yarn add @component-controls/addon-catalog --dev
```

## Usage

    ---
    title: Components/index
    ---
    import { Catalog } from '@component-controls/addon-catalog';


    # Components

    <Catalog
      filter={({ doc }) => doc.title.startsWith('Components')} <-- filter which components to display
      group={({ story }) => story.category} <- grouping of the filtered components by the category field of the document
    />

# API

<react-docgen-typescript path="./src" exclude=".stories.tsx$,index.ts"/>

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>Catalog</ins>

_Catalog [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/Catalog/Catalog.tsx)_

### properties

| Name        | Type                                                                   | Description              |
| ----------- | ---------------------------------------------------------------------- | ------------------------ |
| `filter`    | _(props: FilterProps) => boolean_                                      | filter stories/documents |
| `group`     | _(props: FilterProps) => string_                                       | grouping function        |
| `groupSort` | _(groups: string\[]) => string\[]_                                     | group/category sorting   |
| `sx`        | _ThemeUIStyleObject_                                                   |                          |
| `ref`       | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                          |

## <ins>ComponentCard</ins>

Table to display the components usage, with a % progress indicator

_ComponentCard [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/ComponentCard/ComponentCard.tsx)_

### properties

| Name  | Type                                                                   | Description |
| ----- | ---------------------------------------------------------------------- | ----------- |
| `id`  | _string_                                                               | story id    |
| `sx`  | _ThemeUIStyleObject_                                                   |             |
| `ref` | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |             |

## <ins>ComponentFilter</ins>

_ComponentFilter [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/ComponentFilter/ComponentFilter.tsx)_

### properties

| Name  | Type                                                                   | Description |
| ----- | ---------------------------------------------------------------------- | ----------- |
| `sx`  | _ThemeUIStyleObject_                                                   |             |
| `ref` | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |             |

## <ins>ComponentList</ins>

Grid display of component cards

_ComponentList [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/ComponentList/ComponentList.tsx)_

### properties

| Name       | Type                                                                   | Description                                     |
| ---------- | ---------------------------------------------------------------------- | ----------------------------------------------- |
| `minWidth` | _number_                                                               | minimum card width in pixels. defaults to 420px |
| `stories*` | _string\[]_                                                            | story ids                                       |
| `sx`       | _ThemeUIStyleObject_                                                   |                                                 |
| `ref`      | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                 |

## <ins>ComponentsCatalog</ins>

Selection of components from stories, to be displayed in a ComponentList

_ComponentsCatalog [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/ComponentsCatalog/ComponentsCatalog.tsx)_

### properties

| Name        | Type                               | Description              |
| ----------- | ---------------------------------- | ------------------------ |
| `filter`    | _(props: FilterProps) => boolean_  | filter stories/documents |
| `group`     | _(props: FilterProps) => string_   | grouping function        |
| `groupSort` | _(groups: string\[]) => string\[]_ | group/category sorting   |

## <ins>ComponentCatalogContextProvider</ins>

_ComponentCatalogContextProvider [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/context/ComponentCatalogContext.tsx)_

### properties

| Name     | Type                    | Description |
| -------- | ----------------------- | ----------- |
| `sort`   | _ComponentCatalogOrder_ |             |
| `search` | _string_                |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->

```

```
