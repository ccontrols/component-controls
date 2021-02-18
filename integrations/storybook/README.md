# Table of contents

-   [Shocase sites](#shocase-sites)
-   [Overview](#overview)
    -   [Storybook addon panels](#storybook-addon-panels)
-   [Custom documentation pages](#custom-documentation-pages)
    -   [Hide storybookjs Canvas](#hide-storybookjs-canvas)
    -   [Create custom Canvas page](#create-custom-canvas-page)
    -   [Configure '@component-controls/storybook' to load out custom page only](#configure-component-controlsstorybook-to-load-out-custom-page-only)
-   [List of components](#list-of-components)
    -   [<ins>ComponentSource</ins>](#inscomponentsourceins)
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
    -   [<ins>BlockContextProvider</ins>](#insblockcontextproviderins)
    -   [<ins>ControlsProvider</ins>](#inscontrolsproviderins)
    -   [<ins>ThemeProvider</ins>](#insthemeproviderins)
    -   [<ins>PageContextContainer</ins>](#inspagecontextcontainerins)
    -   [<ins>DocsContainer</ins>](#insdocscontainerins)
    -   [<ins>AddonPanel</ins>](#insaddonpanelins)
    -   [<ins>PropsTablePanel</ins>](#inspropstablepanelins)
    -   [<ins>StoryConfigPanel</ins>](#insstoryconfigpanelins)
    -   [<ins>StorySourcePanel</ins>](#insstorysourcepanelins)

# Shocase sites

-   [Storybook 6 without addon-docs](https://storybook.component-controls.com)
-   [Storybook 6](https://components-storybook-6.netlify.app/)

# Overview

Storybook plugin for documenting your projects with component controls

-   Full replacement for the storybook addon-docs
-   Works with storybook-5 and storybook-6

**Limitations**

-   Initial version is only for `react` apps. More frameworks are on the roadmap. 
-   Only handles the ESM(CSF) and MDX stories format. The storiesOf API is not supported and there are currently no plans to support it.

[Getting started with storybook](https://component-controls.com/tutorial/getting-started/storybook)

<tsdoc-typescript entry="./src/types.ts" />

<!-- START-TSDOC-TYPESCRIPT -->

<!-- END-TSDOC-TYPESCRIPT -->

## Storybook addon panels

The `component-controls` block components have been designed from the ground up to be able to be placed either on documentation pages or in addon tabs. 

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

_ComponentSource [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/ComponentSource.tsx)_

### properties

| Name          | Type                                                                                                                      | Description                                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onSelect`    | _((name: string, component: Component) => boolean \| void) & ((event: SyntheticEvent&lt;HTMLDivElement, Event>) => void)_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_                                                    |                                                                                                                                                                                                                                                                                                    |
| `title`       | _string_                                                                                                                  | optional section title for the block. optional title to display for the code block. Usually used from MDX                                                                                                                                                                                          |
| `sx`          | _ThemeUIStyleObject_                                                                                                      |                                                                                                                                                                                                                                                                                                    |
| `id`          | _string_                                                                                                                  | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `visibility`  | _ComponentVisibility_                                                                                                     | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `of`          | _any_                                                                                                                     | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`        | _string_                                                                                                                  | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |
| `description` | _string_                                                                                                                  | optional markdown description.                                                                                                                                                                                                                                                                     |
| `collapsible` | _boolean_                                                                                                                 | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `data-testid` | _string_                                                                                                                  | testing id                                                                                                                                                                                                                                                                                         |
| `plain`       | _boolean_                                                                                                                 | inner container variant or plain if plain, skip the border and spacing around the children                                                                                                                                                                                                         |
| `actions`     | _ActionItem\[]_                                                                                                           | optional actions provided to the component                                                                                                                                                                                                                                                         |
| `theme`       | _PrismTheme_                                                                                                              | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                                                                                                                                              |
| `language`    | _Language_                                                                                                                | source lnguage used, by default "jsx".                                                                                                                                                                                                                                                             |
| `renderFn`    | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_                                                        | custom function to render the source code.                                                                                                                                                                                                                                                         |
| `dark`        | _boolean_                                                                                                                 | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used.                                                                                                                   |
| `metastring`  | _string_                                                                                                                  | code configuration string passed from MDX                                                                                                                                                                                                                                                          |

## <ins>Description</ins>

_Description [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Description.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components` | _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_ | components to customize the markdown display.                                                                                                                                                                                                                                                      |
| `of`         | _any_                                                                                                                                                                                                                    | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`       | _string_                                                                                                                                                                                                                 | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |

## <ins>Meta</ins>

empty component for storybook addon-docs compatibility

_Meta [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Meta.tsx)_

## <ins>Playground</ins>

_Playground [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Playground.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `scale`       | _number_                                                               | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                    |
| `source`      | _string_                                                               | playground source option - valid when a Story is not embedded inside the Playground.                            |
| `dark`        | _boolean_                                                              | whether to use the dark theme for the story source component.                                                   |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant or plain if plain, skip the border and spacing around the children                      |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |
| `openTab`     | _ReactNode_                                                            | by default, which tab to have open.                                                                             |
| `visibleTabs` | _boolean_                                                              | if true, the tabs on the panels will be visible                                                                 |
| `background`  | _BackgroundType_                                                       | background pattern type                                                                                         |
| `direction`   | _DirectionType_                                                        | direction type                                                                                                  |
| `actions`     | _ActionItem\[]_                                                        | optional actions provided to the component                                                                      |

## <ins>PropsTable</ins>

_PropsTable [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/PropsTable.tsx)_

### properties

| Name           | Type                                                                                                                      | Description                                                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extraColumns` | _Column&lt;{}>\[]_                                                                                                        | extra custom columns passed to the PropsTable.                                                                                                                                                                                                                                                     |
| `flat`         | _boolean_                                                                                                                 | if true, will flatten the group by                                                                                                                                                                                                                                                                 |
| `onSelect`     | _((name: string, component: Component) => boolean \| void) & ((event: SyntheticEvent&lt;HTMLDivElement, Event>) => void)_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `ref`          | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_                                                    |                                                                                                                                                                                                                                                                                                    |
| `title`        | _string_                                                                                                                  | optional section title for the block.                                                                                                                                                                                                                                                              |
| `sx`           | _ThemeUIStyleObject_                                                                                                      |                                                                                                                                                                                                                                                                                                    |
| `id`           | _string_                                                                                                                  | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `visibility`   | _ComponentVisibility_                                                                                                     | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `of`           | _any_                                                                                                                     | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`         | _string_                                                                                                                  | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |
| `description`  | _string_                                                                                                                  | optional markdown description.                                                                                                                                                                                                                                                                     |
| `collapsible`  | _boolean_                                                                                                                 | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `data-testid`  | _string_                                                                                                                  | testing id                                                                                                                                                                                                                                                                                         |
| `plain`        | _boolean_                                                                                                                 | inner container variant or plain                                                                                                                                                                                                                                                                   |

## <ins>Stories</ins>

_Stories [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Stories.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                                |
| ------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `dark`        | _boolean_                                                              | whether to display the dark theme storysource code component whether to use the dark theme for the story source component. |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.            |
| `name`        | _string_                                                               |                                                                                                                            |
| `storyProps`  | _any_                                                                  |                                                                                                                            |
| `scale`       | _number_                                                               | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                               |
| `source`      | _string_                                                               | playground source option - valid when a Story is not embedded inside the Playground.                                       |
| `title`       | _string_                                                               | optional section title for the block.                                                                                      |
| `description` | _string_                                                               | optional markdown description.                                                                                             |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                                |
| `data-testid` | _string_                                                               | testing id                                                                                                                 |
| `plain`       | _boolean_                                                              | inner container variant or plain if plain, skip the border and spacing around the children                                 |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                            |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                            |
| `openTab`     | _ReactNode_                                                            | by default, which tab to have open.                                                                                        |
| `visibleTabs` | _boolean_                                                              | if true, the tabs on the panels will be visible                                                                            |
| `background`  | _BackgroundType_                                                       | background pattern type                                                                                                    |
| `direction`   | _DirectionType_                                                        | direction type                                                                                                             |
| `actions`     | _ActionItem\[]_                                                        | optional actions provided to the component                                                                                 |

## <ins>Story</ins>

_Story [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Story.tsx)_

### properties

| Name          | Type                     | Description                                                                                                     |
| ------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `ref`         | _Ref&lt;HTMLDivElement>_ | ref can be used by blocks embedding Story - ie ally plugin                                                      |
| `onRender`    | _() => void_             | used by other blocks ie ally plugin uses it launch a new ally test on re-render                                 |
| `wrapper`     | _StoryWrapperType_       | wrapper type - can be an iframe or just regular react                                                           |
| `iframeStyle` | _CSSProperties_          | if an iframe wrapper - this is additional iframe style                                                          |
| `id`          | _string_                 | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_                 |                                                                                                                 |
| `title`       | _string_                 | optional section title for the block.                                                                           |
| `description` | _string_                 | optional markdown description.                                                                                  |
| `collapsible` | _boolean_                | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                 | testing id                                                                                                      |
| `plain`       | _boolean_                | inner container variant or plain                                                                                |
| `sx`          | _ThemeUIStyleObject_     |                                                                                                                 |

## <ins>StoryConfig</ins>

_StoryConfig [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/StoryConfig.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant or plain                                                                                |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |
| `sourceProps` | _SourceProps_                                                          |                                                                                                                 |
| `name`        | _string_                                                               |                                                                                                                 |

## <ins>StorySource</ins>

_StorySource [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/StorySource.tsx)_

### properties

| Name          | Type                                                                   | Description                                                                                                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `viewStyle`   | _ViewStyle_                                                            | initial view mode                                                                                               |
| `sourceProps` | _SourceProps_                                                          | source code options                                                                                             |
| `title`       | _string_                                                               | optional section title for the block.                                                                           |
| `description` | _string_                                                               | optional markdown description.                                                                                  |
| `id`          | _string_                                                               | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_                                                              | if false, will nothave a collapsible frame.                                                                     |
| `data-testid` | _string_                                                               | testing id                                                                                                      |
| `plain`       | _boolean_                                                              | inner container variant or plain                                                                                |
| `sx`          | _ThemeUIStyleObject_                                                   |                                                                                                                 |
| `ref`         | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |                                                                                                                 |
| `name`        | _string_                                                               |                                                                                                                 |

## <ins>Subtitle</ins>

_Subtitle [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Subtitle.tsx)_

### properties

| Name       | Type                                                                                                                                                                                                                            | Description                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `id`       | _string_                                                                                                                                                                                                                        |                                            |
| `name`     | _string_                                                                                                                                                                                                                        |                                            |
| `children` | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, any>) \| (new (props: any) => Component&lt;any, any, any>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | text to be displayed in the component.     |
| `as`       | _"h2" \| "h1" \| "h3" \| "h4" \| "h5"_                                                                                                                                                                                          | DOM node type to render as. By default h3. |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_                                                                                                                                                  |                                            |
| `sx`       | _ThemeUIStyleObject_                                                                                                                                                                                                            |                                            |

## <ins>Title</ins>

_Title [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/blocks/Title.tsx)_

### properties

| Name           | Type                                                                   | Description |
| -------------- | ---------------------------------------------------------------------- | ----------- |
| `contributors` | _boolean_                                                              |             |
| `id`           | _string_                                                               |             |
| `name`         | _string_                                                               |             |
| `sx`           | _ThemeUIStyleObject_                                                   |             |
| `ref`          | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_ |             |

## <ins>BlockContextProvider</ins>

_BlockContextProvider [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/context/BlockContext.tsx)_

### properties

| Name | Type     | Description |
| ---- | -------- | ----------- |
| `id` | _string_ |             |

## <ins>ControlsProvider</ins>

_ControlsProvider [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/context/ControlsProvider.tsx)_

## <ins>ThemeProvider</ins>

_ThemeProvider [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/context/ThemeProvider.tsx)_

## <ins>PageContextContainer</ins>

_PageContextContainer [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/docs-page/DocsContainer.tsx)_

## <ins>DocsContainer</ins>

_DocsContainer [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/docs-page/DocsContainer.tsx)_

### properties

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `active` | _boolean_ |             |

## <ins>AddonPanel</ins>

_AddonPanel [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/panel/AddonPanel.tsx)_

### properties

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `active` | _boolean_ |             |
| `api*`   | _API_     |             |

## <ins>PropsTablePanel</ins>

_PropsTablePanel [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/panel/PropsTablePanel.tsx)_

### properties

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `active` | _boolean_ |             |
| `api*`   | _API_     |             |

## <ins>StoryConfigPanel</ins>

_StoryConfigPanel [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/panel/StoryConfigPanel.tsx)_

### properties

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `active` | _boolean_ |             |
| `api*`   | _API_     |             |

## <ins>StorySourcePanel</ins>

_StorySourcePanel [source code](https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/src/panel/StorySourcePanel.tsx)_

### properties

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `active` | _boolean_ |             |
| `api*`   | _API_     |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
