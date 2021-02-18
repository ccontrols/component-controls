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
    -   [<ins>overview</ins>](#insoverviewins)
    -   [<ins>overview</ins>](#insoverviewins-1)
    -   [<ins>overview</ins>](#insoverviewins-2)
    -   [<ins>overview</ins>](#insoverviewins-3)
    -   [<ins>overview</ins>](#insoverviewins-4)

# In action

[Example site](https://component-controls.com/api/components-actioncontainer--overview/viewport)

# Overview

Addon to collect and display statistics for component-controls

# Getting Started

## Install

```sh
yarn add @component-controls/addon-stats --dev
```

## Usage

```
import { ComponentUsage, AttributeUsage, ComponentUsageList, AttributesUsageList } from '@component-controls/addon-stats';


## Attributes usage summary

Attributes usage - how many times an attribute is being set on a component, and on which component it is being set

<AttributeUsage />

## Components usage details

How many times a component is being used from another component, with a list of the components using it

<ComponentUsageList />

## Attributes usage details

How many times an attribute is being used on a component, with a list of those components

<AttributesUsageList />

```

# API

<react-docgen-typescript path="./src" />

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

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/stories/Catalog.stories.tsx)_

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/stories/ComponentCard.stories.tsx)_

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/stories/ComponentFilter.stories.tsx)_

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/stories/ComponentList.stories.tsx)_

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-catalog/src/stories/ComponentsCatalog.stories.tsx)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
