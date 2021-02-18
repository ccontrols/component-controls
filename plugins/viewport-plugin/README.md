# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure route](#configure-route)
    -   [Configure page display](#configure-page-display)
-   [API](#api)
    -   [<ins>ViewportBlock</ins>](#insviewportblockins)
    -   [<ins>ViewportBox</ins>](#insviewportboxins)
    -   [<ins>overview</ins>](#insoverviewins)
    -   [<ins>sizes</ins>](#inssizesins)

# In action

[Example site](https://component-controls.com/api/components-actioncontainer--overview/viewport)

# Overview

inspired by the [playroom](https://github.com/seek-oss/playroom) project, this addon contains a `ViewportBlock` that you can integrate into any page, as well as a standalone `ViewportPage`

# Getting Started

## Install

```sh
yarn add @component-controls/viewport-plugin --dev
```

## Configure route

in `.config/buildtime.js`

        const { defaultBuildConfig } = require('@component-controls/core');

        module.exports = {
          stories: [
            ...
          ],
          pages: {
            story: {
              tabs: [
                ...defaultBuildConfig.pages.story.tabs,
                { route: 'viewport' },
              ],
            },
          },
        }  

## Configure page display

in `.config/runtime.tsx`

        import React from 'react';
        import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
        import { ViewportPage } from "@component-controls/viewport-plugin";

        const config: RunOnlyConfiguration = {
          pages: {
            story: {
              tabs: [
                ...defaultRunConfig.pages.story.tabs,
                { title: 'Viewport', render: () => <ViewportPage /> },
              ],
            },
          },

        };

        export default config;

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ViewportBlock</ins>

_ViewportBlock [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-stats/src/ViewportBlock/ViewportBlock.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sizes`       | _Record&lt;string, number>_                                            |                                                                                                                 |
| `sxContainer` | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant or plain                                                                                |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |
| `name`        | _string_                                                               |                                                                                                                 |

## <ins>ViewportBox</ins>

_ViewportBox [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-stats/src/ViewportBlock/ViewportBox.tsx)_

### properties

| Name         | Type     | Description |
| ------------ | -------- | ----------- |
| `storyId`    | _string_ |             |
| `size*`      | _number_ |             |
| `sizeLabel*` | _string_ |             |

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-stats/src/stories/ViewportBlock.stories.tsx)_

## <ins>sizes</ins>

_sizes [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-stats/src/stories/ViewportBlock.stories.tsx)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
