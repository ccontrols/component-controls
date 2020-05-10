# Table of contents

-   [Shocase sites](#shocase-sites)
-   [Overview](#overview)
    -   -   [storybook integration of component-controls.](#storybook-integration-of-component-controls)
        -   [Motivation](#motivation)
        -   [Limitations](#limitations)
-   [Getting Started](#getting-started)
    -   [Install](#install)
    -   [Configure](#configure)
        -   [Default options](#default-options)
        -   [Use only `react-docgen` (even for typescript)](#use-only-react-docgen-even-for-typescript)
        -   [Use built-in instrument for everything (not use storybook `addon-docs` at all)](#use-built-in-instrument-for-everything-not-use-storybook-addon-docs-at-all)
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
-   [Advanced configuration options](#advanced-configuration-options)
    -   [Custom loader options](#custom-loader-options)
    -   [PresetOptions](#presetoptions)
    -   [defaultRules](#defaultrules)
    -   [Storybook addon panels](#storybook-addon-panels)
-   [Custom documentation pages](#custom-documentation-pages)
    -   [Hide storybookjs Canvas](#hide-storybookjs-canvas)
    -   [Create custom Canvas page](#create-custom-canvas-page)
    -   [Configure '@component-controls/storybook' to load out custom page only](#configure-component-controlsstorybook-to-load-out-custom-page-only)
-   [List of components](#list-of-components)
    -   [<ins>ComponentSource</ins>](#inscomponentsourceins)
    -   [<ins>ControlsTable</ins>](#inscontrolstableins)
    -   [<ins>Description</ins>](#insdescriptionins)
    -   [<ins>Meta</ins>](#insmetains)
    -   [<ins>Playground</ins>](#insplaygroundins)
    -   [<ins>PropsTable</ins>](#inspropstableins)
    -   [<ins>Stories</ins>](#insstoriesins)
    -   [<ins>Story</ins>](#insstoryins)
    -   [<ins>StoryConfig</ins>](#insstoryconfigins)
    -   [<ins>StorySource</ins>](#insstorysourceins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>Title</ins>](#institleins)
    -   [<ins>PageContextContainer</ins>](#inspagecontextcontainerins)
    -   [<ins>DocsContainer</ins>](#insdocscontainerins)

# Shocase sites

-   [Storybook 6](https://components-storybook-6.netlify.app/)
-   [Storybook 6 without addon-docs](https://components-storybook-6-no-docs.netlify.app/?path=/story/storybook-starter--overview)

# Overview

### [storybook](https://storybook.js.org) integration of component-controls.

<p align="center">
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/images/component-controls.gif" alt="introduction to using component-controls" width="738">
</p>

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
-   Only handles the CSF and MDX stories format. The storiesOf API is not supported and there are currently no plans to support it.
-   The Storybook MDX (`<Meta />` tag) is a proprietary format that will be replaced in due time with a portable [frontmatter](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/#frontmatter--mdx-example) stories format, similar to the CSF format.

# Getting Started

## Install

```sh
yarn add @component-controls/storybook --dev
```

## Configure

### Default options

the default options will configure `componnet-controls` to work with react apps,  with `reac-docgen` for prop-types and `react-docgen-typescript` for typescript props information

in `main.js`:

```js
module.exports = {
  addons: ['@component-controls/storybook']
}
```

### Use only `react-docgen` (even for typescript)

Currently this is not recommended as the typescript support in `react-docgen` is a bit lagging.

in `main.js`:

```js
module.exports = {
  addons: [{
    name: '@component-controls/storybook',
    options: {
      webpack: ['react-docgen'],
    }
  }]
}
```

### Use built-in instrument for everything (not use storybook `addon-docs` at all)

The following options will bypass the loaders installed by `addon-docs` and will rely only on the instrumenting loaders from `component-controls`

in `main.js`:

```js
module.exports = {
  addons: [{
    name: '@component-controls/storybook',
    options: {
      webpack: ['instrument', 'react-docgen-typescript'],
    }
  }]
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

1.  The story needs to have a component assigned, and this component needs to have a valid properties table (it can be typescript, or prop-types or any other format supported by component-controls props-info extensions).

2.  The story needs to accept "some" parameters / internally detected within the source loaders / enabling the story to use the passed control values.

A screenshot of smart controls in action.

<p align="center">
  <img src="https://github.com/ccontrols/component-controls/blob/master/integrations/storybook/images/smart-controls.jpg" alt="smart groups" width="428">
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
  <img src="https://raw.githubusercontent.com/ccontrols/component-controls/master/integrations/storybook/images/grouped-controls.jpg" alt="control groups" width="428">
</p>

# Advanced configuration options

The storybook addon controls comes with pre-configured options that you can use for a quick start, but you can also customise the options.

## Custom loader options

You can customize the preset webpack configuration settings, using a pre-existing config and only adding you custom choices.

`.storybook/main.js`:

```js
  addons: [
    ...
  {
    name: '@component-controls/storybook',
    options: {
      controlsPanel: true,
      propsPanel: true,
      webpack: ['instrument',
      {
        name: 'react-docgen-typescript', 
        config: {
          module: {
            rules: [
              {
                loader: '@component-controls/loader/loader',
                options: {
                  //instrumentation options
                  prettier: {
                    tabWidth: 4,
                  },
                  components: {
                    storeSourceFile: true, //or false
                    resolveFile: (componentName, filePath) => {
                      if (filePath.includes('/theme-ui/dist')) {
                        return `${
                          filePath.split('/theme-ui/dist')[0]
                        }/@theme-ui/components/src/${componentName}.js`;
                      }
                      return filePath;
                    },
                  },
                  stories: {
                    storeSourceFile: true, //or false
                  }, 
                },  
              },
            ],
          }
        },  
      }],
    }
  }],  
```

For more information on [InstrumentOptions](../../core/instrument/README.md#instrumentoptions)

<tsdoc-typescript entry="./src/types.ts" />

<!-- START-TSDOC-TYPESCRIPT -->

## PresetOptions

_defined in [@component-controls/storybook/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/types.ts#L3)_



### properties

| Name               | Type                    | Description                                                             |
| ------------------ | ----------------------- | ----------------------------------------------------------------------- |
| `controlsPanel`    | boolean                 | whether to display the controls table as an addon panel in storybook    |
| `pages`            | string\[]               | additional custom documentation pages                                   |
| `propsPanel`       | boolean                 | whether to display the props table as an addon panel in storybook       |
| `storyConfigPanel` | boolean                 | whether to display the StoryConfig block as an addon panel in storybook |
| `storySourcePanel` | boolean                 | whether to display the StorySource block as an addon panel in storybook |
| `webpack`          | [RuleTypes](#ruletypes) | options that will be passed to the instrumenter.                        |

## defaultRules

_defined in [@component-controls/storybook/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/types.ts#L34)_



<!-- END-TSDOC-TYPESCRIPT -->

## Storybook addon panels

The `component-controls` block components ahev been designed from the ground up to be able to be placed either on documentation pages or in addon tabs. 

You can turn on and off the available panels:

      {
        name: '@component-controls/storybook',
        options: {
          controlsPanel: true,
          propsPanel: true,
          storySourcePanel: true,
        }
      }  

# Custom documentation pages

`component-controls` installs a default Page with some standard documentation boocks, however you can replace the deafult page and add new pages.

Here is an example that will completely hide the storybook `Canvas` tab and replace it with our custom documentation page

## Hide storybookjs Canvas

`.storybook/manager.js`

```js
import { addons } from '@storybook/addons';
addons.setConfig({
  previewTabs: {
    canvas: {
      //hide storybooks Canvas tab
      hidden: true,
    },
    'CUSTOM_PAGE_ADDON/canvas': {
      //place our custom Canvas page first in order of tabs
      index: 0,
    },

  },
});
```

## Create custom Canvas page

`.storybook/canvas-page.tsx`

```js
import React from 'react';
import { CanvasPage } from '@component-controls/pages';
import { DocsContainer } from '@component-controls/storybook';

export default {
  key: 'canvas',
  title: 'Canvas',
  render: ({ active }: { active: boolean }) => (
    <DocsContainer active={active}>
      <CanvasPage />
    </DocsContainer>
  ),
};
```

## Configure '@component-controls/storybook' to load out custom page only

`.storybook/main.tsx`

```js
module.exports = {
  addons: [
    '@storybook/addon-docs',
    {
      name: '@component-controls/storybook',
      options: {
        pages: [require.resolve('./canvas-page.tsx')],
      }
    },
  ],
};

```

# List of components

<react-docgen-typescript path="./src" exclude="index.ts,repositoryActions.tsx,StoryContext.tsx,utils.ts,ComponentsContext.tsx,context.tsx,argument-utils.ts,channel.ts" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ComponentSource</ins>

_ComponentSource [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/ComponentSource.tsx)_

### properties

| Name          | Type                                                               | Description                                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`  | _ComponentVisibility_                                              | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `onSelect`    | _(name: string, component: StoryComponent) => boolean \| void_     | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`          | _any_                                                              | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `title`       | _string_                                                           | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description` | _string_                                                           | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`          | _string_                                                           | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible` | _boolean_                                                          | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`     | _SystemStyleObject_                                                | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `actions`     | _ActionItem\[]_                                                    | optional actions provided to the component                                                                                                                                                                                                                                                         |
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

| Name          | Type                | Description                                                                                                                     |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | _string_            | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                                                     |
| `title`       | _string_            | optional section title for the block.                                                                                           |
| `description` | _string_            | optional markdown description.                                                                                                  |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                           |

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

| Name          | Type                | Description                                                                                                                     |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `scale`       | _number_            | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                                    |
| `openTab`     | _any_               | by default, which tab to have open.                                                                                             |
| `dark`        | _boolean_           | whether to use the dark theme for the story source component.                                                                   |
| `visibleTabs` | _boolean_           | if true, the tabs on story panels will be visible                                                                               |
| `id`          | _string_            | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                                                     |
| `title`       | _string_            | optional section title for the block.                                                                                           |
| `description` | _string_            | optional markdown description.                                                                                                  |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                           |
| `actions`     | _ActionItem\[]_     | optional actions provided to the component                                                                                      |
| `plain`       | _boolean_           | if plain, skip the border and spacing around the children                                                                       |

## <ins>PropsTable</ins>

_PropsTable [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/PropsTable.tsx)_

### properties

| Name            | Type                                                                                                                            | Description                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extraColumns`  | _Column&lt;{}>\[]_                                                                                                              | extra custom columns passed to the PropsTable.                                                                                                                                                                                                                                                     |
| `visibility`    | _ComponentVisibility_                                                                                                           | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `onSelect`      | _((event: SyntheticEvent&lt;HTMLDivElement, Event>) => void) \| ((name: string, component: StoryComponent) => boolean \| void)_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`            | _any_                                                                                                                           | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `title`         | _string_                                                                                                                        | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description`   | _string_                                                                                                                        | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`            | _string_                                                                                                                        | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible`   | _boolean_                                                                                                                       | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`       | _SystemStyleObject_                                                                                                             | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `header`        | _boolean_                                                                                                                       | show or hide the header element.                                                                                                                                                                                                                                                                   |
| `sorting`       | _boolean_                                                                                                                       | enable.disable sorting.                                                                                                                                                                                                                                                                            |
| `filtering`     | _boolean_                                                                                                                       | enable/disable filtering.                                                                                                                                                                                                                                                                          |
| `itemsLabel`    | _string_                                                                                                                        | string label for 'items' - used in the filter placeholder and grouping header.                                                                                                                                                                                                                     |
| `groupBy`       | _string\[]_                                                                                                                     | field to be grouped by.                                                                                                                                                                                                                                                                            |
| `hiddenColumns` | _string\[]_                                                                                                                     | list of columns to hide.                                                                                                                                                                                                                                                                           |
| `expanded`      | _{ \[key: string]: boolean; }_                                                                                                  | object listing the initially expanded rows.                                                                                                                                                                                                                                                        |
| `skipPageReset` | _boolean_                                                                                                                       | reset state update while update table data                                                                                                                                                                                                                                                         |

## <ins>Stories</ins>

_Stories [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Stories.tsx)_

### properties

| Name          | Type                | Description                                                                                                                     |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `dark`        | _boolean_           | whether to display the dark theme storysource code component whether to use the dark theme for the story source component.      |
| `id`          | _string_            | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                                                     |
| `title`       | _string_            | optional section title for the block.                                                                                           |
| `description` | _string_            | optional markdown description.                                                                                                  |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                           |
| `scale`       | _number_            | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                                    |
| `openTab`     | _any_               | by default, which tab to have open.                                                                                             |
| `visibleTabs` | _boolean_           | if true, the tabs on story panels will be visible                                                                               |
| `actions`     | _ActionItem\[]_     | optional actions provided to the component                                                                                      |
| `plain`       | _boolean_           | if plain, skip the border and spacing around the children                                                                       |

## <ins>Story</ins>

_Story [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Story.tsx)_

### properties

| Name          | Type                | Description                                                                                                                     |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | _string_            | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                                                     |
| `title`       | _string_            | optional section title for the block.                                                                                           |
| `description` | _string_            | optional markdown description.                                                                                                  |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                           |

## <ins>StoryConfig</ins>

_StoryConfig [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/StoryConfig.tsx)_

### properties

| Name          | Type                                                               | Description                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | _string_                                                           | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                  |
| `name`        | _string_                                                           | alternatively you can use the name of a story to load from an external file                                                                                                      |
| `title`       | _string_                                                           | optional section title for the block.                                                                                                                                            |
| `description` | _string_                                                           | optional markdown description.                                                                                                                                                   |
| `collapsible` | _boolean_                                                          | if false, will nothave a collapsible frame.                                                                                                                                      |
| `sxStyle`     | _SystemStyleObject_                                                | theme-ui styling object for Block Box                                                                                                                                            |
| `actions`     | _ActionItem\[]_                                                    | optional actions provided to the component                                                                                                                                       |
| `plain`       | _boolean_                                                          | if plain, skip the border and spacing around the children                                                                                                                        |
| `children`    | _ReactNode_                                                        | source code to be displayed.                                                                                                                                                     |
| `theme`       | _PrismTheme_                                                       | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `language`    | _Language_                                                         | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn`    | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_ | custom function to render the source code.                                                                                                                                       |
| `dark`        | _boolean_                                                          | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`       | _any_                                                              | css styles for the container.                                                                                                                                                    |
| `as`          | _any_                                                              | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |

## <ins>StorySource</ins>

_StorySource [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/StorySource.tsx)_

### properties

| Name          | Type                                                               | Description                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `viewStype`   | _ViewStyle_                                                        | initial view mode                                                                                                                                                                |
| `id`          | _string_                                                           | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                  |
| `name`        | _string_                                                           | alternatively you can use the name of a story to load from an external file                                                                                                      |
| `title`       | _string_                                                           | optional section title for the block.                                                                                                                                            |
| `description` | _string_                                                           | optional markdown description.                                                                                                                                                   |
| `collapsible` | _boolean_                                                          | if false, will nothave a collapsible frame.                                                                                                                                      |
| `sxStyle`     | _SystemStyleObject_                                                | theme-ui styling object for Block Box                                                                                                                                            |
| `actions`     | _ActionItem\[]_                                                    | optional actions provided to the component                                                                                                                                       |
| `plain`       | _boolean_                                                          | if plain, skip the border and spacing around the children                                                                                                                        |
| `children`    | _ReactNode_                                                        | source code to be displayed.                                                                                                                                                     |
| `theme`       | _PrismTheme_                                                       | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `language`    | _Language_                                                         | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn`    | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_ | custom function to render the source code.                                                                                                                                       |
| `dark`        | _boolean_                                                          | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`       | _any_                                                              | css styles for the container.                                                                                                                                                    |
| `as`          | _any_                                                              | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |

## <ins>Subtitle</ins>

_Subtitle [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Subtitle.tsx)_

### properties

| Name       | Type                                                                           | Description                                                                 |
| ---------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `id`       | _string_                                                                       | id of the story                                                             |
| `name`     | _string_                                                                       | alternatively you can use the name of a story to load from an external file |
| `children` | _ReactNode_                                                                    | text to be displayed in the component.                                      |
| `as`       | _"h1" \| "h2" \| "h3" \| "h4" \| "h5"_                                         | DOM node type to render as. By default h3.                                  |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |                                                                             |

## <ins>Title</ins>

_Title [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Title.tsx)_

### properties

| Name       | Type                                                                           | Description                                                                 |
| ---------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `id`       | _string_                                                                       | id of the story                                                             |
| `name`     | _string_                                                                       | alternatively you can use the name of a story to load from an external file |
| `children` | _ReactNode_                                                                    | text to be displayed in the component.                                      |
| `sxStyle`  | _SystemStyleObject_                                                            | theme-ui styling object                                                     |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |                                                                             |

## <ins>PageContextContainer</ins>

_PageContextContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/docs-page/DocsContainer.tsx)_

### properties

| Name         | Type                    | Description                                                                            |
| ------------ | ----------------------- | -------------------------------------------------------------------------------------- |
| `storyId`    | _string_                | story to display in the page                                                           |
| `dark`       | _boolean_               | dark/light theme for the page                                                          |
| `options`    | _any_                   | global options passed from container those are global parameters as well as decorators |
| `components` | _MDXProviderComponents_ | components to customize the markdown display.                                          |
| `theme`      | _Theme_                 | optional custom theme                                                                  |
| `store`      | _StoryStore_            | store object                                                                           |

## <ins>DocsContainer</ins>

_DocsContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/docs-page/DocsContainer.tsx)_

### properties

| Name         | Type                    | Description                                                                            |
| ------------ | ----------------------- | -------------------------------------------------------------------------------------- |
| `storyId`    | _string_                | story to display in the page                                                           |
| `dark`       | _boolean_               | dark/light theme for the page                                                          |
| `options`    | _any_                   | global options passed from container those are global parameters as well as decorators |
| `components` | _MDXProviderComponents_ | components to customize the markdown display.                                          |
| `theme`      | _Theme_                 | optional custom theme                                                                  |
| `store`      | _StoryStore_            | store object                                                                           |
| `active`     | _boolean_               |                                                                                        |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
