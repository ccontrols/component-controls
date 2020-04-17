# Table of contents

-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
    -   [Pages format](#pages-format)
    -   [Examples](#examples)
        -   [Simple page](#simple-page)
        -   [Render story](#render-story)
-   [API](#api)
    -   [**getContext**](#getcontext)
    -   [**useStoryId**](#usestoryid)

# Overview

`@component-controls/storybook-custom-docs` gives the possibility to add custom `docs` pages to storybook by solving the following challenges:

The Storybook [docs addon](https://github.com/storybookjs/storybook/tree/next/addons/docs) is a great start to display documentation in Storybook, but the early versions (5.x and 6.x) have a few shortcomings that this addon tries to address.

-   Circumvent the hard-coded [docs render](https://github.com/storybookjs/storybook/blob/855815293b59412eea2b57f20eaa02982fcb5360/lib/core/src/client/preview/StoryRenderer.tsx#L168): docs pages need to reside in the `preview` part of Storybok (in order to render stories since that's where the stories are), while the `TAB` addons resides in the `manager` part of storybook. 
-   Circumvent the hard-coded [DOM tags](https://github.com/storybookjs/storybook/blob/855815293b59412eea2b57f20eaa02982fcb5360/lib/core/src/server/templates/index.ejs#L31): docs pages need to reside inside the preview `iframe` (in order to render stories in any custom `docs` pages), while `TAB` addons are rendered outside the `iframe`. 

# Getting Started

## Install

```sh
yarn add @component-controls/storybook-custom-docs --dev
```

## Configure

within `.storybook/main.js`:

```js
module.exports = {
    addons: [
    {
      name: '@component-controls/storybook-custom-docs',
      options: {
        pages: [
          // files exporting the custom pages:
          require.resolve('./custom-page'),
          require.resolve('./custom-page-docs')
        ],
      },
    },
  ],
}
```

## Pages format

The page definition files need to have a default export with the following fields

```js
import React from 'react';
export default {
  // key used for navigation
  key: string,
  // title of the tab
  title: string,
  // react render function. 
  // active boolean - if the tab custom page is active
  // storyId as a string
  // Return an object that can be rendered from ReactDOM.render
  render: ({ active, storyId }) => Element,
}
```

## Examples

### Simple page

```js
import React from 'react';

export default {
  key: 'custom',
  title: 'Custom Page',
  render: ({ active, storyId }) => active ? <div>{storyId}</div> : null,
}
```

### Render story

```js
import React from 'react';
import { DocsContainer, Story} from '@storybook/addon-docs/blocks';
import { getContext, useStoryId } from '@component-controls/storybook-custom-docs';

const Page = () => {
  const storyId = useStoryId();
  return (
    <DocsContainer context={getContext()}><Story id={storyId}/></DocsContainer>
  )
}
export default {
  key: 'docs-page',
  title: 'Docs Page',
  render: ({ active, storyId }) => {
    return active ? <Page storyId={storyId} /> : null;  
  } 
}
```

# API

example usage

```js
import { getContext, useStoryId } from '@component-controls/storybook-custom-docs';
```

## **getContext**

Returns a context similar (but not identical) that can be used as an input attribute to `<DocsContainer />`

## **useStoryId**

A hook that tracks the changes to the current story and returns it's id
