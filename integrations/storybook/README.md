# Table of contents

-   [Overview](#overview)
    -   -   [Motivation](#motivation)
        -   [Limitations](#limitations)
-   [Storybook](#storybook)
-   [Introduction](#introduction)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
-   [Creating stories](#creating-stories)
    -   -   [CSF](#csf)
        -   [MDX](#mdx)
-   [Available Controls](#available-controls)
-   [Smart Controls](#smart-controls)
    -   [Examples](#examples)
        -   [React](#react)
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
    -   [<ins>ComponentSource</ins>](#inscomponentsourceins)
    -   [<ins>ControlsTable</ins>](#inscontrolstableins)
    -   [<ins>Description</ins>](#insdescriptionins)
    -   [<ins>Meta</ins>](#insmetains)
    -   [<ins>Playground</ins>](#insplaygroundins)
    -   [<ins>PropsTable</ins>](#inspropstableins)
    -   [<ins>Stories</ins>](#insstoriesins)
    -   [<ins>Story</ins>](#insstoryins)
    -   [<ins>StorySource</ins>](#insstorysourceins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>Title</ins>](#institleins)
    -   [<ins>ControlsPage</ins>](#inscontrolspageins)
    -   [<ins>PageContextContainer</ins>](#inspagecontextcontainerins)
    -   [<ins>DocsContainer</ins>](#insdocscontainerins)

# Overview

The Storybook](<https://storybook.js.org>) integration of component-controls.

### Motivation

-   Allow adding component-controls in storybook DocsPage.
-   Allow adding storybook docs blocks in component-controls documentation pages.
-   Allow standalone component-controls documentation pages.
-   Allow an unlimited number of documentation pages.
-   Fully replace and extend the Storybook addon-docs block components.
-   Fully replace Storybook's modx-compiler and source-loader.
-   Provide and extensible framework of components, blocks and pages.

### Limitations

-   Initial version is only for `react` apps. More frameworks are on the roadmap. 
-   Only handles the CSF and MDX stories format. The storeisOf API is not supported and there are currently no plans to support it.
-   The Storybook MDX is a proprietary format that will be replaced in due time with a portable [frontmatter](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/#frontmatter--mdx-example) stories format, similar to the CSF format.

# Storybook

The Storybook integration of component-controls allows you to define and then edit story properties dynamically in the [Storybook](https://storybook.js.org) UI with a set of property editors. 

The Storybook integration started as a successor of [addon-knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs) and we have attempted to keep some level of compatibility where possible. 

# Introduction

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/intro-smart-controls.gif" alt="introduction to using smart-controls" width="738">
</p>

# Getting Started

## Install

```sh
yarn add @component-controls/storybook --dev
```

## Configure

within `.storybook/main.js`:

```js
module.exports = {
  addons: ['@component-controls/storybook']
}
```

# Creating stories

### CSF

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
import { Meta} from '@component-controls/storybook';
import { Playground, Story, ControlsTable } from '@component-controls/blocks';

<Meta title="Storybook controls" />

<Playground>
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
</Playground>
```

# Available Controls

The list of available controls and their documented properties is available [here](https://github.com/ccontrols/component-controls/blob/master/core/specification/src/controls.ts)

# Smart Controls

Smart Controls use a story component's properties table type information to generate automatically controls for the story. 

There are 2 requirements for a story to use smart controls: 
1\. The story needs to have a component assigned, and this component needs to have a valid properties table (it can be typescript, or prop-types or any other format supported by component-controls props-info extensions).
2\. The story needs to accept "some" parameters / internally detected within the source loaders / enabling the story to use the passed control values.

A screenshot of smart controls in action.

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/docs/smart-controls.jpg" alt="control groups" width="428">
</p>

## Examples

### React

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

## <ins>ComponentSource</ins>

_ComponentSource [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/ComponentSource.tsx)_

### properties

| Name          | Type                                                               | Description                                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onSelect`    | _(name: string, component: StoryComponent) => boolean \| void_     | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`          | _any_                                                              | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `title`       | _string_                                                           | optional section title for the block.                                                                                                                                                                                                                                                              |
| `id`          | _string_                                                           | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible` | _boolean_                                                          | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`     | _SystemStyleObject_                                                | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `actions`     | _ActionItem\[]_                                                    | optional actions provided to the component                                                                                                                                                                                                                                                         |
| `paddingTop`  | _string \| number_                                                 | padding at the top, to account for the absolute position of the ActionBar                                                                                                                                                                                                                          |
| `plain`       | _boolean_                                                          | if plain, skip the border and spacing around the children                                                                                                                                                                                                                                          |
| `theme`       | _PrismTheme_                                                       | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                                                                                                                                              |
| `language`    | _Language_                                                         | source lnguage used, by default "jsx".                                                                                                                                                                                                                                                             |
| `renderFn`    | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_ | custom function to render the source code.                                                                                                                                                                                                                                                         |
| `dark`        | _boolean_                                                          | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used.                                                                                                                   |
| `style`       | _any_                                                              | css styles for the container.                                                                                                                                                                                                                                                                      |
| `as`          | _any_                                                              | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                                                                                                                                   |

## <ins>ControlsTable</ins>

_ControlsTable [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/ControlsTable.tsx)_

### properties

| Name          | Type                | Description                                                                 |
| ------------- | ------------------- | --------------------------------------------------------------------------- |
| `id`          | _string_            | id of the story                                                             |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file |
| `title`       | _string_            | optional section title for the block.                                       |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                 |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                       |

## <ins>Description</ins>

_Description [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Description.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components` | _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_ | components to customize the markdown display.                                                                                                                                                                                                                                                      |
| `of`         | _any_                                                                                                                                                                                                                    | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |

## <ins>Meta</ins>

empty component for storybook addon-docs compatibility

_Meta [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Meta.tsx)_

## <ins>Playground</ins>

_Playground [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Playground.tsx)_

### properties

| Name          | Type                | Description                                                                                  |
| ------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| `scale`       | _number_            | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled. |
| `openTab`     | _any_               | by default, which tab to have open.                                                          |
| `dark`        | _boolean_           | whether to use the dark theme for the story source component.                                |
| `id`          | _string_            | id of the story                                                                              |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                  |
| `title`       | _string_            | optional section title for the block.                                                        |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                  |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                        |
| `actions`     | _ActionItem\[]_     | optional actions provided to the component                                                   |
| `paddingTop`  | _string \| number_  | padding at the top, to account for the absolute position of the ActionBar                    |
| `plain`       | _boolean_           | if plain, skip the border and spacing around the children                                    |

## <ins>PropsTable</ins>

_PropsTable [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/PropsTable.tsx)_

### properties

| Name            | Type                                                                                                                           | Description                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extraColumns`  | _Column&lt;{}>\[]_                                                                                                             | extra custom columns passed to the PropsTable.                                                                                                                                                                                                                                                     |
| `onSelect`      | _((name: string, component: StoryComponent) => boolean \| void) & ((event: SyntheticEvent&lt;HTMLDivElement, Event>) => void)_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`            | _any_                                                                                                                          | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `title`         | _string_                                                                                                                       | optional section title for the block.                                                                                                                                                                                                                                                              |
| `id`            | _string_                                                                                                                       | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible`   | _boolean_                                                                                                                      | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`       | _SystemStyleObject_                                                                                                            | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `header`        | _boolean_                                                                                                                      | show or hide the header element.                                                                                                                                                                                                                                                                   |
| `sorting`       | _boolean_                                                                                                                      | enable.disable sorting.                                                                                                                                                                                                                                                                            |
| `filtering`     | _boolean_                                                                                                                      | enable/disable filtering.                                                                                                                                                                                                                                                                          |
| `itemsLabel`    | _string_                                                                                                                       | string label for 'items' - used in the filter placeholder and grouping header.                                                                                                                                                                                                                     |
| `groupBy`       | _string\[]_                                                                                                                    | field to be grouped by.                                                                                                                                                                                                                                                                            |
| `hiddenColumns` | _string\[]_                                                                                                                    | list of columns to hide.                                                                                                                                                                                                                                                                           |
| `expanded`      | _{ \[key: string]: boolean; }_                                                                                                 | object listing the initially expanded rows.                                                                                                                                                                                                                                                        |
| `skipPageReset` | _boolean_                                                                                                                      | reset state update while update table data                                                                                                                                                                                                                                                         |

## <ins>Stories</ins>

_Stories [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Stories.tsx)_

### properties

| Name          | Type                | Description                                                                                                                |
| ------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `dark`        | _boolean_           | whether to display the dark theme storysource code component whether to use the dark theme for the story source component. |
| `scale`       | _number_            | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                               |
| `openTab`     | _any_               | by default, which tab to have open.                                                                                        |
| `id`          | _string_            | id of the story                                                                                                            |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                                                |
| `title`       | _string_            | optional section title for the block.                                                                                      |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                                |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                      |
| `actions`     | _ActionItem\[]_     | optional actions provided to the component                                                                                 |
| `paddingTop`  | _string \| number_  | padding at the top, to account for the absolute position of the ActionBar                                                  |
| `plain`       | _boolean_           | if plain, skip the border and spacing around the children                                                                  |

## <ins>Story</ins>

_Story [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Story.tsx)_

### properties

| Name          | Type                | Description                                                                 |
| ------------- | ------------------- | --------------------------------------------------------------------------- |
| `id`          | _string_            | id of the story                                                             |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file |
| `title`       | _string_            | optional section title for the block.                                       |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                 |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                       |

## <ins>StorySource</ins>

_StorySource [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/StorySource.tsx)_

### properties

| Name          | Type                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `viewStype`   | _ViewStyle_                                                                                                                                                                                                                                                                          | initial view mode                                                                                                                                                                |
| `id`          | _string_                                                                                                                                                                                                                                                                             | id of the story                                                                                                                                                                  |
| `name`        | _string_                                                                                                                                                                                                                                                                             | alternatively you can use the name of a story to load from an external file                                                                                                      |
| `title`       | _string_                                                                                                                                                                                                                                                                             | optional section title for the block.                                                                                                                                            |
| `collapsible` | _boolean_                                                                                                                                                                                                                                                                            | if false, will nothave a collapsible frame.                                                                                                                                      |
| `sxStyle`     | _SystemStyleObject_                                                                                                                                                                                                                                                                  | theme-ui styling object for Block Box                                                                                                                                            |
| `actions`     | _ActionItem\[]_                                                                                                                                                                                                                                                                      | optional actions provided to the component                                                                                                                                       |
| `paddingTop`  | _string \| number_                                                                                                                                                                                                                                                                   | padding at the top, to account for the absolute position of the ActionBar                                                                                                        |
| `plain`       | _boolean_                                                                                                                                                                                                                                                                            | if plain, skip the border and spacing around the children                                                                                                                        |
| `children`    | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | source code to be displayed.                                                                                                                                                     |
| `theme`       | _PrismTheme_                                                                                                                                                                                                                                                                         | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `language`    | _Language_                                                                                                                                                                                                                                                                           | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn`    | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_                                                                                                                                                                                                                   | custom function to render the source code.                                                                                                                                       |
| `dark`        | _boolean_                                                                                                                                                                                                                                                                            | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`       | _any_                                                                                                                                                                                                                                                                                | css styles for the container.                                                                                                                                                    |
| `as`          | _any_                                                                                                                                                                                                                                                                                | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |

## <ins>Subtitle</ins>

_Subtitle [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Subtitle.tsx)_

### properties

| Name       | Type                                                                                                                                                                                                                                                                                 | Description                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `id`       | _string_                                                                                                                                                                                                                                                                             | id of the story                                                             |
| `name`     | _string_                                                                                                                                                                                                                                                                             | alternatively you can use the name of a story to load from an external file |
| `children` | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | text to be displayed in the component.                                      |
| `as`       | _"h1" \| "h2" \| "h3" \| "h4" \| "h5"_                                                                                                                                                                                                                                               | DOM node type to render as. By default h3.                                  |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_                                                                                                                                                                                                       |                                                                             |

## <ins>Title</ins>

_Title [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Title.tsx)_

### properties

| Name       | Type                                                                                                                                                                                                                                                                                 | Description                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `id`       | _string_                                                                                                                                                                                                                                                                             | id of the story                                                             |
| `name`     | _string_                                                                                                                                                                                                                                                                             | alternatively you can use the name of a story to load from an external file |
| `children` | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | text to be displayed in the component.                                      |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_                                                                                                                                                                                                       |                                                                             |

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
| `active`     | _boolean_               |                                               |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
