# Table of contents

-   [In action](#in-action)
-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Add to a document](#add-to-a-document)
    -   [Add to a story](#add-to-a-story)
    -   [Insert into an MDX document](#insert-into-an-mdx-document)
    -   [Configure props globally](#configure-props-globally)
-   [API](#api)
    -   [<ins>ImagesBlock</ins>](#insimagesblockins)
    -   [<ins>overview</ins>](#insoverviewins)
    -   [<ins>customItems</ins>](#inscustomitemsins)
    -   [<ins>customConfigProps</ins>](#inscustomconfigpropsins)

# In action

[Example site](https://component-controls.com/api/esm-starter--overview/design)

# Overview

This addon contains an `ImagesBlock` that you can integrate into any page, as well as a standalone `ImagesPage`

# Getting Started

## Install

```sh
yarn add@component-controls/addon-images --dev
```

## Add to a document

The images will be assigned to all the stories in the current document

in `mystory.stories.tsx`

    import { Document } from '@component-controls/core';
    import main_screen from './media/main-screen.jpg';

    export default {
      title: 'MyStory',
      plugins: {
        images: {
          title: 'Screen design',
          items: [main_screen],
        },
      },
    } as Document;

## Add to a story

The images will be assigned only to a specific story. This allows multiple stories in the document to have different images associated with them.

in `mystory.stories.tsx`

    import React from 'react';
    import { Document, Example } from '@component-controls/core';
    import main_screen from './media/main-screen.jpg';

    export default {
      title: 'MyStory',
    } as Document;

    export const story: Example = () => <Button>click me</Button>;

    story.design = {
      plugins: {
        images: [main_screen],
      },
    };

## Insert into an MDX document

in `mystory.mdx`

    ---
    title: MyStory
    ---
    import { ImagesBlock } from '@component-controls/addon-images';
    import login_screen from './media/login-screen.jpg';
    import logout_screen from './media/logout-screen.jpg';

    <ImagesBlock
      items={[login_screen, logout_screen]}
    />

## Configure props globally

You can globally change the default options of the NotesBlock component

in `.config/runtime.tsx`

    import { RunOnlyConfiguration } from "@component-controls/core";

    const config: RunOnlyConfiguration = {
      ...
      components: {
        images: {
          title: 'Screenshots'
        }
      },
    };

    export default config;

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ImagesBlock</ins>

_ImagesBlock [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-images/src/ImagesBlock/ImagesBlock.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `items`       | _(string \| { \[key: string]: any; src: string; })\[]_                 |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant or plain                                                                                |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |
| `name`        | _string_                                                               |                                                                                                                 |

## <ins>overview</ins>

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-images/src/stories/ImagesBlock.stories.tsx)_

## <ins>customItems</ins>

_customItems [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-images/src/stories/ImagesBlock.stories.tsx)_

## <ins>customConfigProps</ins>

_customConfigProps [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-images/src/stories/ImagesBlock.stories.tsx)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
