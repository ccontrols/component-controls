# Table of contents

- [In action](#in-action)
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Install](#install)
  - [Add to a document](#add-to-a-document)
  - [Add to a story](#add-to-a-story)
  - [Insert into an MDX document](#insert-into-an-mdx-document)
  - [Configure props globally](#configure-props-globally)
- [API](#api)
  - [<ins>FigmaEmbedBlock</ins>](#insfigmaembedblockins)
  - [<ins>overview</ins>](#insoverviewins)
  - [<ins>customURLS</ins>](#inscustomurlsins)
  - [<ins>noFullScreen</ins>](#insnofullscreenins)
  - [<ins>customIFrameProps</ins>](#inscustomiframepropsins)
  - [<ins>customConfigProps</ins>](#inscustomconfigpropsins)

# In action

[Example site](https://component-controls.com/api/esm-starter--overview/design)

# Overview

This addon contains a `FigmaEmbedBlock` that you can integrate into any page, as well as a standalone `FigmaPage`

# Getting Started

## Install

```sh
yarn add @component-controls/figma-plugin --dev
```

## Add to a document

The figma file will be assigned to all the stories in the current document

in `mystory.stories.tsx`

```
import { Document } from '@component-controls/core';

export default {
  title: 'MyStory',
  plugins: {
    figma: [
      'https://www.figma.com/file/vgf0guEmC5IKtjHJKkRVSr/Button?node-id=0%3A1',
    ],
  },
} as Document;

```

## Add to a story

The figma file will be assigned only to a specific story. This allows multiple stories in the document to have different figma files associated with them.

in `mystory.stories.tsx`

```
import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Button, ButtonProps } from './Button';

export default {
  title: 'MyStory',
} as Document;

export const story: Example<ButtonProps> = () => <Button>click me</Button>;

story.design = plugins: {
  figma: [
    'https://www.figma.com/file/vgf0guEmC5IKtjHJKkRVSr/Button?node-id=0%3A1',
  ],
};
```

## Insert into an MDX document

in `mystory.mdx`

```
---
title: MyStory
---
import { FigmaEmbedBlock } from '@component-controls/figma-plugin';

<FigmaEmbedBlock
  items={[
    {
      url:
        'https://www.figma.com/file/hS1sLjYq49vjnKXhwGgHwg/Navigation-UI-design-components-Community?node-id=1%3A2309',
    },
    {
      url:
        'https://www.figma.com/file/LtgbR2mbVPbQTNDfDQxbKL/Atanas-Stoyanov-s-Team-Colors?node-id=0%3A1',
    },
  ]}
/>
```

## Configure props globally

You can globally change the iframe options for the FigmaEmbedBlock component

in `.config/runtime.tsx`

```
import { RunOnlyConfiguration } from "@component-controls/core";

const config: RunOnlyConfiguration = {
  ...
  components: {
    figma: {
      width: '200'
    }
  },
};

export default config;
```

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>FigmaEmbedBlock</ins>

_FigmaEmbedBlock [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/figma-embed/src/FigmaEmbedBlock/FigmaEmbedBlock.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `items`       | _(string \| { \[key: string]: any; url: string; })\[]_                 |                                                                                                                 |
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

_overview [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/figma-embed/src/stories/FigmaEmbedBlock.stories.tsx)_

## <ins>customURLS</ins>

_customURLS [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/figma-embed/src/stories/FigmaEmbedBlock.stories.tsx)_

## <ins>noFullScreen</ins>

_noFullScreen [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/figma-embed/src/stories/FigmaEmbedBlock.stories.tsx)_

## <ins>customIFrameProps</ins>

_customIFrameProps [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/figma-embed/src/stories/FigmaEmbedBlock.stories.tsx)_

## <ins>customConfigProps</ins>

_customConfigProps [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/figma-embed/src/stories/FigmaEmbedBlock.stories.tsx)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
