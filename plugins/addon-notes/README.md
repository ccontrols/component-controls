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
    -   [<ins>NotesBlock</ins>](#insnotesblockins)

# In action

[Example site](https://component-controls.com/api/esm-starter--overview/design)

# Overview

This addon contains a `NotesBlock` that you can integrate into any page, as well as a standalone `NotesPage`

# Getting Started

## Install

```sh
yarn add@component-controls/addon-notes --dev
```

## Add to a document

The notes will be assigned to all the stories in the current document

in `mystory.stories.tsx`

```
import { Document } from '@component-controls/core';
import design_notes from '../sections/design-notes.md';

export default {
  title: 'MyStory',
  plugins: {
    notes: {
      title: 'Design brief',
      items: [design_notes],
    },
  },
} as Document;

```

## Add to a story

The notes will be assigned only to a specific story. This allows multiple stories in the document to have different notes associated with them.

in `mystory.stories.tsx`

    import React from 'react';
    import { Document, Example } from '@component-controls/core';

    export default {
      title: 'MyStory',
    } as Document;

    export const story: Example = () => <Button>click me</Button>;

    story.design = {
      plugins: {
        notes: [
          # Introduction
          some **markdown**
        ],
      },
    };

## Insert into an MDX document

in `mystory.mdx`

    ---
    title: MyStory
    ---
    import { NotesBlock } from '@component-controls/addon-notes';

    <NotesBlock
      items={[
          `
    # Introduction
    some **markdown**
    `,
      ]}
    />

## Configure props globally

You can globally change the default options of the NotesBlock component

in `.config/runtime.tsx`

    import { RunOnlyConfiguration } from "@component-controls/core";

    const config: RunOnlyConfiguration = {
      ...
      components: {
        notes: {
          title: 'Design files'
        }
      },
    };

    export default config;

# API

<react-docgen-typescript path="./src" exclude=".stories.tsx$,index.ts"/>

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>NotesBlock</ins>

_NotesBlock [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/addon-notes/src/NotesBlock/NotesBlock.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `items`       | _(string \| { \[key: string]: any; text: string; })\[]_                |                                                                                                                 |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant or plain                                                                                |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |
| `name`        | _string_                                                               |                                                                                                                 |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
