# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Usage](#usage)
-   [API](#api)
    -   [<ins>useComponentUsageAggregate</ins>](#insusecomponentusageaggregateins)
    -   [<ins>useAttributesUsageAggregate</ins>](#insuseattributesusageaggregateins)
    -   [<ins>AttributeUsage</ins>](#insattributeusageins)
    -   [<ins>AttributesUsageDetails</ins>](#insattributesusagedetailsins)
    -   [<ins>AttributesUsageList</ins>](#insattributesusagelistins)
    -   [<ins>ComponentUsage</ins>](#inscomponentusageins)
    -   [<ins>ComponentUsageDetails</ins>](#inscomponentusagedetailsins)
    -   [<ins>ComponentUsageList</ins>](#inscomponentusagelistins)

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

## <ins>useComponentUsageAggregate</ins>

_useComponentUsageAggregate [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/hooks/components.ts)_

### properties

| Name      | Type          | Description |
| --------- | ------------- | ----------- |
| `filter*` | _StatsFilter_ |             |

## <ins>useAttributesUsageAggregate</ins>

_useAttributesUsageAggregate [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/hooks/components.ts)_

### properties

| Name      | Type          | Description |
| --------- | ------------- | ----------- |
| `filter*` | _StatsFilter_ |             |

## <ins>AttributeUsage</ins>

_AttributeUsage [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ui/AttributeUsage/AttributeUsage.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `filter*`     | _StatsFilter_                                                          |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant. default to 'inner' to display a border and shadow                                      |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |

## <ins>AttributesUsageDetails</ins>

_AttributesUsageDetails [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ui/AttributesUsageDetails/AttributesUsageDetails.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `stats*`      | _AttributeAggregateRow_                                                |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant. default to 'inner' to display a border and shadow                                      |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |

## <ins>AttributesUsageList</ins>

_AttributesUsageList [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ui/AttributesUsageList/AttributesUsageList.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `filter*`     | _StatsFilter_                                                          |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant. default to 'inner' to display a border and shadow                                      |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |

## <ins>ComponentUsage</ins>

_ComponentUsage [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ui/ComponentUsage/ComponentUsage.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `filter*`     | _StatsFilter_                                                          |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant. default to 'inner' to display a border and shadow                                      |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |

## <ins>ComponentUsageDetails</ins>

_ComponentUsageDetails [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ui/ComponentUsageDetails/ComponentUsageDetails.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `stats*`      | _ComponentStats_                                                       |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant. default to 'inner' to display a border and shadow                                      |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |

## <ins>ComponentUsageList</ins>

_ComponentUsageList [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ui/ComponentUsageList/ComponentUsageList.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `filter*`     | _StatsFilter_                                                          |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant. default to 'inner' to display a border and shadow                                      |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
