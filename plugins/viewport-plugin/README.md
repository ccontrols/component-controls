# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
-   [API](#api)
    -   [<ins>ViewportBlock</ins>](#insviewportblockins)
    -   [<ins>ViewportBox</ins>](#insviewportboxins)
    -   [<ins>ViewportPage</ins>](#insviewportpageins)

# In action

[Example site](https://components-storybook-6-no-docs.netlify.app/?path=/test/components-actioncontainer--overview)

# Overview

# Getting Started

## Install

## Configure

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ViewportBlock</ins>

_ViewportBlock [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ViewportBlock/ViewportBlock.tsx)_

### properties

| Name          | Type                        | Description                                                                                                     |
| ------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sizes`       | _Record&lt;string, number>_ |                                                                                                                 |
| `title`       | _string_                    | optional section title for the block.                                                                           |
| `description` | _string_                    | optional markdown description.                                                                                  |
| `id`          | _string_                    | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                   | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _ThemeUIStyleObject_        | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_                    | testing id                                                                                                      |
| `name`        | _string_                    |                                                                                                                 |

## <ins>ViewportBox</ins>

_ViewportBox [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ViewportBlock/ViewportBox.tsx)_

### properties

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| `storyId` | _string_ |             |
| `size*`   | _number_ |             |

## <ins>ViewportPage</ins>

_ViewportPage [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/viewport-plugin/src/ViewportPage/ViewportPage.tsx)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
