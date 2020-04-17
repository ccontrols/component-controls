# Table of contents

-   [Overview](#overview)
-   [Storybook](#storybook)
-   [Introduction](#introduction)
    -   [Introduction writing custom controls](#introduction-writing-custom-controls)
    -   [Intro using smart-controls](#intro-using-smart-controls)
-   [Getting Started](#getting-started)
    -   [CSF](#csf)
        -   [MDX](#mdx)
-   [Available Controls](#available-controls)
-   [Smart Controls](#smart-controls)
    -   [Smart Controls Examples](#smart-controls-examples)
        -   [Smart Controls React](#smart-controls-react)
        -   [Smart Controls MDX](#smart-controls-mdx)
        -   [Smart Controls Options](#smart-controls-options)
-   [Testing with random data generators](#testing-with-random-data-generators)
-   [Categories](#categories)
-   [Storybook Docs Block](#storybook-docs-block)
-   [Options](#options)
    -   [**smart** option](#smart-option)
    -   [**addonPanel** option](#addonpanel-option)
    -   [**docsPreview** option](#docspreview-option)
    -   [**docsProps** option](#docsprops-option)
-   [List of components](#list-of-components)
    -   [<ins>ControlsTable</ins>](#inscontrolstableins)
    -   [<ins>Meta</ins>](#insmetains)
    -   [<ins>ControlsPage</ins>](#inscontrolspageins)
    -   [<ins>PageContextContainer</ins>](#inspagecontextcontainerins)
    -   [<ins>DocsContainer</ins>](#insdocscontainerins)

# Overview

The Storybook](<https://storybook.js.org>) integration of component-controls is the first publicly available integration. 

-   Storybook is the most used system for developing components with a focus on design systems
-   The Storybook [CSF](https://storybook.js.org/docs/formats/component-story-format/) format introduced in v5.2 was a leap forward and allows for open interoperability. The CSF format is one of the founding blocks upon which componnet-controls expands.
-   The Storybook MDX format is a bit of a letdown - it uses a proprietary format that we aim to replace with the portable [frontmatter](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/#frontmatter--mdx-example) format to add metadata.
-   The Storybook [docs addon](https://github.com/storybookjs/storybook/tree/next/addons/docs) added the ability to view documentation from CSF and MDX formats. However the architecture suffers from a few issues listed below.
-   We wanted to allow component-controls to function both as a full replacement to the addon docs, and also alongside the addon docs. 

# Storybook

The Storybook integration of component-controls allows you to define and then edit story properties dynamically in the [Storybook](https://storybook.js.org) UI with a set of property editors. 

The definitions of the control properties can be found [here](https://github.com/ccontrols/component-controls/blob/master/core/specification/src/types.ts): 

Additional functionality out of the box with Addon Controls are the "smart controls" - using the story's component property table to automatically create editable controls for the stories.

Another unique facet of Addon Controls is the one-click generation of random data, using under the hood [faker.js](https://github.com/marak/Faker.js/).

The Storybook integration started as a successor of [addon-knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs) and we have attempted to keep some level of compatibility where possible.

# Introduction

## Introduction writing custom controls

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/controls-react-starter.gif" alt="introduction to using controls" width="738">
</p>

## Intro using smart-controls

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/intro-smart-controls.gif" alt="introduction to using smart-controls" width="738">
</p>

# Getting Started

First of all, you need to install Addon Controls into your project as a dev dependency.

```sh
yarn add @component-controls/storybook --dev
```

within `.storybook/main.js`:

```js
module.exports = {
  addons: ['@component-controls/storybook']
}
```

That's it, you can now use controls inside your stories

## CSF

```js
import React from "react";

export default {
  title: "Storybook Controls",
};

export const controlsStory = ({ disabled, text }) => (
  <button disabled={disabled}>
    {text}
  </button>
);

controlsStory.story = {
  controls: {
    disabled: { type: 'boolean', value: false },
    text: { type: 'text', value: 'Hello Storybook' },
  }
}
```

### MDX

```md
import { Story, Preview, Meta } from '@storybook/addon-docs/blocks';
import { ControlsTable } from '@component-controls/storybook';

<Meta title="Storybook controls" />

<Preview>
  <Story name="controlsStory" 
    controls={{
      disabled: { type: 'boolean', value: false },
      text: { type: 'text', value: 'Hello Storybook' },
    }}
  >
    {({ disabled, text }) => (
     <button disabled={disabled}>
      {text}
      </button>
    )}  
  </Story>
</Preview>
```

# Available Controls

The list of available controls and their documented properties is available [here](https://github.com/ccontrols/component-controls/blob/master/core/specification/src/types.ts)

# Smart Controls

Smart Controls use a story component's properties table type information to generate automatically controls for the story. 

By default, Addon Controls enables the smart-controls option for your storybook  site, but there are 2 basic requirements for a story to use smart controls: 
1\. The story needs to have a component assigned, and this component needs to have a valid properties table (it can be typescript, or prop-types or any other format supported by Storybook).
2\. The story needs to accept "some" parameters / internally detected by Addon Controls within the source loaders / enabling the story to use the passed control values.

A screenshot of smart controls in action.

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/smart-controls.jpg" alt="control groups" width="428">
</p>

## Smart Controls Examples

### Smart Controls React

```js
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Storybook smart controls',
  parameters: {
    component: Button,
  },
};

export const smartControls = props => <Button {...props} />;
```

### Smart Controls MDX

```md
import { Story, Preview, Meta } from '@storybook/addon-docs/blocks';
import { Button } from './Button';

<Meta title="Storybook smart controls" parameters={{component: Button}} />

# Smart Controls
<Preview>
  <Story name="smartControls">
    {(props) => (
      <Button label="default" {...props}/>
    )}  
  </Story>
</Preview>
```

### Smart Controls Options

-   **include** an array of property names that allows you to select only a subset of the smart control properties to be displayed

```js
onlyColors.story = {
  parameters: {
    addonControls: {
      smart: {
        include: ['color', 'backgroundColor'],
      },
    },
  },
};
```

-   **exclude** an array of property names that allows you to exclude a subset of the smart control properties to be displayed

```js
noColors.story = {
  parameters: {
    addonControls: {
      smart: {
        exclude: ['color', 'backgroundColor'],
      },
    },
  },
};
```

# Testing with random data generators

This is one of our favorite features, basically allowing 1-line functional component testing out of the box.

By default, Addon Controls selects some basic random data generator for your field type.

Additionally, Addon Controls allows you to specify the [faker.js](https://github.com/marak/Faker.js/) data generator and options to use. For example you can be specific that a field will need to be a street address, or a zip code. In the example below, we will generate random numbers between 50 and 100.

```js
export const randomNumber = ({ number }) => number;

randomNumber.story = {
  controls: {
    number: {
      type: 'number',
      label: 'A number',
      value: 10,
      data: { name: 'random.number', options: { min: 50, max: 100 } },
    },
  },
};
```

# Categories

This is very similar to the categorization concept in [addon-knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs).
You can categorize your controls by assigning them a `groupId`. When a `groupId` exists, tabs will appear in the Controls storybook panel or in the docs blocks on the Docs page to filter between the groups. Controls without a `groupId` are automatically categorized into the `OTHER` group.

```js
export const groupedControls = ({ age, name, message }) => {
  const content = `
    I am ${name} and I'm ${age} years old.
    ${message}
  `;

  return <div>{content}</div>;
};

const personalGroupId = 'personal info';
const generalGroupId = 'general info';

groupedControls.story = {
  controls: {
    name: { type: 'text', label: 'Name', value: 'James', groupId: personalGroupId },
    age: { type: 'number', label: 'Age', value: 35, groupId: personalGroupId },
    message: { type: 'text', label: 'Mesage', value: 'Hello!', groupId: generalGroupId },
  },
};
```

You can see Controls in separate tabs as shown below.

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/grouped-controls.jpg" alt="control groups" width="428">
</p>

# Storybook Docs Block

By default, Addon Controls integrates in the addon panels, in the `<Props />` table on the StoryBook DocsPage and well as in the `<Preview />` component on the DocsPage. You can also add a specifc docs block with story controls by either changing the default DocsPage or directly in your `mdx` stories:

```js
import { Title, Subtitle, Description, Story, Props, Stories } from '@storybook/addon-docs/blocks';
import { ControlsTable } from '@component-controls/storybook';


export default {
  title: 'Addons/Controls/controls',
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Story id="." />
          <ControlsTable id="." />
          <Props />
          <Stories />
        </>
      ),
    },
  },
```

```md
import { Story, Meta } from '@storybook/addon-docs/blocks';
import { ControlsTable } from '@component-controls/storybook';

<Meta title="Storybook controls" parameters={{component: Button}} />


<Story name="small story">
  {props => (
    <Button {...props} />
  )}  
</Story>

<ControlsTable name="small story" />

```

# Options

Addon Controls accepts several option parameters to customize the default functionality. By default, all the following options are enabled, so you only need a custom configuration if you need to disable a feature:

within `.storybook/main.js`:

```js
  addons: [
    ...
    {
      name: '@component-controls/storybook',
      options: {
        addonPanel: false,
        docsPreview: false,
        docsProps: false,
        smart: false,        
      },
    },
  ],
```

## **smart** option

Setting this option to `false` will disable auto-generating of controls for stories with a component assigned.

## **addonPanel** option

Setting this option to `false` will disable showing the Controls panel in the addons section within the Storybook Canvas page:

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/option-addonPanel.jpg" alt="addon panel" width="428">
</p>

## **docsPreview** option

Setting this option to `false` will disable showing an additional tab and panel with Controls in the `<Preview />` component within the Storybopok DocsPage:

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/option-docsPreview.jpg" alt="docs preview addon" width="428">
</p>

## **docsProps** option

Setting this option to `false` will disable showing an additional columns with Controls in the `<Props />` component within the Storybopok DocsPage:

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/option-docsProps.jpg" alt="docs preview addon" width="428">
</p>

# List of components

<react-docgen-typescript path="./src" exclude="index.ts,repositoryActions.tsx,StoryContext.tsx,utils.ts,ComponentsContext.tsx,context.tsx,argument-utils.ts,channel.ts" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ControlsTable</ins>

_ControlsTable [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/ControlsTable.tsx)_

## <ins>Meta</ins>

empty component for storybook addon-docs compatibility

_Meta [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Meta.tsx)_

## <ins>ControlsPage</ins>

_ControlsPage [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/docs-page/ControlsPage.tsx)_

## <ins>PageContextContainer</ins>

_PageContextContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/docs-page/DocsContainer.tsx)_

### properties

| Name         | Type                    | Description                                   |
| ------------ | ----------------------- | --------------------------------------------- |
| `storyId`    | _string_                | story to display in the page                  |
| `dark`       | _boolean_               | dark/light theme for the page                 |
| `components` | _MDXProviderComponents_ | components to customize the markdown display. |
| `theme`      | _Theme_                 | optional custom theme                         |
| `mockStore`  | _StoryStore_            | mock store for tests                          |

## <ins>DocsContainer</ins>

_DocsContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/docs-page/DocsContainer.tsx)_

### properties

| Name         | Type                    | Description                                   |
| ------------ | ----------------------- | --------------------------------------------- |
| `storyId`    | _string_                | story to display in the page                  |
| `dark`       | _boolean_               | dark/light theme for the page                 |
| `components` | _MDXProviderComponents_ | components to customize the markdown display. |
| `theme`      | _Theme_                 | optional custom theme                         |
| `mockStore`  | _StoryStore_            | mock store for tests                          |
| `active*`    | _boolean_               |                                               |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
