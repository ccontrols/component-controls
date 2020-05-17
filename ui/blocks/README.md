# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>ComponentsBlockContainer</ins>](#inscomponentsblockcontainerins)
    -   [<ins>StoryBlockContainer</ins>](#insstoryblockcontainerins)
    -   [<ins>ComponentDeps</ins>](#inscomponentdepsins)
    -   [<ins>Dependencies</ins>](#insdependenciesins)
    -   [<ins>ComponentSource</ins>](#inscomponentsourceins)
    -   [<ins>Description</ins>](#insdescriptionins)
    -   [<ins>EditPage</ins>](#inseditpageins)
    -   [<ins>PackageVersion</ins>](#inspackageversionins)
    -   [<ins>PageContainer</ins>](#inspagecontainerins)
    -   [<ins>Playground</ins>](#insplaygroundins)
    -   [<ins>PropsTable</ins>](#inspropstableins)
    -   [<ins>useControlsActions</ins>](#insusecontrolsactionsins)
    -   [<ins>Stories</ins>](#insstoriesins)
    -   [<ins>Story</ins>](#insstoryins)
    -   [<ins>StoryConfig</ins>](#insstoryconfigins)
    -   [<ins>StorySource</ins>](#insstorysourceins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>Title</ins>](#institleins)
    -   [<ins>InvalidType</ins>](#insinvalidtypeins)
    -   [<ins>MDXContent</ins>](#insmdxcontentins)
    -   [<ins>getStoryBlockTitle</ins>](#insgetstoryblocktitleins)

# Overview

Some of the guiding design goals for this library:

-   Most components should have a 'plain' and a 'block' version, where the block version adds a collapsible Box with a title.
-   There are two main categories of components: 
    -   that display story data (i.e. story source, story render)
    -   that display component(s) data (i.e. prop tables, component sources)
-   Components accept a list of custom ActionItems to be extended. 
-   Compnents that deal with source code (story or component source) display actions to browse their respective repositories.

# List of components

<react-docgen-typescript path="./src" exclude="index.ts,repositoryActions.tsx,StoryContext.tsx,utils.ts,ComponentsContext.tsx,context.tsx,argument-utils.ts,channel.ts,BasePropsTable.tsx,BaseComponentDeps.tsx,ErrorBoundary.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ComponentsBlockContainer</ins>

_ComponentsBlockContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/BlockContainer/components/ComponentsBlockContainer.tsx)_

### properties

| Name          | Type                                                           | Description                                                                                                                                                                                                                                                                                        |
| ------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`  | _ComponentVisibility_                                          | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `onSelect`    | _(name: string, component: StoryComponent) => boolean \| void_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`          | _any_                                                          | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `title`       | _string_                                                       | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description` | _string_                                                       | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`          | _string_                                                       | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible` | _boolean_                                                      | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`     | _SystemStyleObject_                                            | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |

## <ins>StoryBlockContainer</ins>

_StoryBlockContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/BlockContainer/story/StoryBlockContainer.tsx)_

### properties

| Name                  | Type                | Description                                                                                                                     |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `useStoryDescription` | _boolean_           |                                                                                                                                 |
| `id`                  | _string_            | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`                | _string_            | alternatively you can use the name of a story to load from an external file                                                     |
| `title`               | _string_            | optional section title for the block.                                                                                           |
| `description`         | _string_            | optional markdown description.                                                                                                  |
| `collapsible`         | _boolean_           | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`             | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                           |

## <ins>ComponentDeps</ins>

Displays external dependencies for a component

_ComponentDeps [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ComponentDeps/ComponentDeps.tsx)_

### properties

| Name          | Type                                                           | Description                                                                                                                                                                                                                                                                                        |
| ------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`  | _ComponentVisibility_                                          | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `onSelect`    | _(name: string, component: StoryComponent) => boolean \| void_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`          | _any_                                                          | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `title`       | _string_                                                       | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description` | _string_                                                       | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`          | _string_                                                       | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible` | _boolean_                                                      | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`     | _SystemStyleObject_                                            | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |

## <ins>Dependencies</ins>

table component to display a list of dependencies

_Dependencies [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ComponentDeps/Dependencies.tsx)_

### properties

| Name            | Type            | Description                     |
| --------------- | --------------- | ------------------------------- |
| `dependencies*` | _Dependency\[]_ | list of dependencies to display |

## <ins>ComponentSource</ins>

Displays import statement for a component as well as the component file source code
Optionally also displays some repository information from the component's package.json

_ComponentSource [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ComponentSource/ComponentSource.tsx)_

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

## <ins>Description</ins>

Description component with markdown.
The 'of' property can specify which component's description to display.

_Description [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Description/Description.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components` | _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_ | components to customize the markdown display.                                                                                                                                                                                                                                                      |
| `of`         | _any_                                                                                                                                                                                                                    | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |

## <ins>EditPage</ins>

Display a Edit this page link at the top of the page.
In order for this to work, you need to set up the `repository` field in `package.json`.

_EditPage [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/EditPage/EditPage.tsx)_

## <ins>PackageVersion</ins>

Display a label with the component's package version.
extracted from package.json

_PackageVersion [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PackageVersion/PackageVersion.tsx)_

## <ins>PageContainer</ins>

If the page is an MDX page, will display the MDX components.
Otherwise, the page elements are passed as children

_PageContainer [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PageContainer/PageContainer.tsx)_

### properties

| Name         | Type                    | Description                                                                            |
| ------------ | ----------------------- | -------------------------------------------------------------------------------------- |
| `storyId`    | _string_                | story to display in the page                                                           |
| `dark`       | _boolean_               | dark/light theme for the page                                                          |
| `options`    | _any_                   | global options passed from container those are global parameters as well as decorators |
| `components` | _MDXProviderComponents_ | components to customize the markdown display.                                          |
| `theme`      | _Theme_                 | optional custom theme                                                                  |
| `store`      | _StoryStore_            | store object                                                                           |

## <ins>Playground</ins>

_Playground [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Playground/Playground.tsx)_

### properties

| Name          | Type                | Description                                                                                                                     |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `scale`       | _number_            | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                                    |
| `dark`        | _boolean_           | whether to use the dark theme for the story source component.                                                                   |
| `id`          | _string_            | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_            | alternatively you can use the name of a story to load from an external file                                                     |
| `title`       | _string_            | optional section title for the block.                                                                                           |
| `description` | _string_            | optional markdown description.                                                                                                  |
| `collapsible` | _boolean_           | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`     | _SystemStyleObject_ | theme-ui styling object for Block Box                                                                                           |
| `openTab`     | _any_               | by default, which tab to have open.                                                                                             |
| `visibleTabs` | _boolean_           | if true, the tabs on the panels will be visible                                                                                 |
| `background`  | _BackgroundType_    | background pattern type                                                                                                         |
| `direction`   | _DirectionType_     | direction type                                                                                                                  |
| `actions`     | _ActionItem\[]_     | optional actions provided to the component                                                                                      |
| `plain`       | _boolean_           | if plain, skip the border and spacing around the children                                                                       |

## <ins>PropsTable</ins>

_PropsTable [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PropsTable/PropsTable.tsx)_

### properties

| Name                    | Type                                                                                                                            | Description                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extraColumns`          | _Column&lt;{}>\[]_                                                                                                              | extra custom columns passed to the PropsTable.                                                                                                                                                                                                                                                     |
| `visibility`            | _ComponentVisibility_                                                                                                           | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `onSelect`              | _((name: string, component: StoryComponent) => boolean \| void) \| ((event: SyntheticEvent&lt;HTMLDivElement, Event>) => void)_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`                    | _any_                                                                                                                           | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `title`                 | _string_                                                                                                                        | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description`           | _string_                                                                                                                        | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`                    | _string_                                                                                                                        | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible`           | _boolean_                                                                                                                       | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`               | _SystemStyleObject_                                                                                                             | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `header`                | _boolean_                                                                                                                       | show or hide the header element.                                                                                                                                                                                                                                                                   |
| `sorting`               | _boolean_                                                                                                                       | enable.disable sorting.                                                                                                                                                                                                                                                                            |
| `filtering`             | _boolean_                                                                                                                       | enable/disable filtering.                                                                                                                                                                                                                                                                          |
| `itemsLabel`            | _string_                                                                                                                        | string label for 'items' - used in the filter placeholder and grouping header.                                                                                                                                                                                                                     |
| `groupBy`               | _string\[]_                                                                                                                     | field to be grouped by.                                                                                                                                                                                                                                                                            |
| `hiddenColumns`         | _string\[]_                                                                                                                     | list of columns to hide.                                                                                                                                                                                                                                                                           |
| `rowSelect`             | _boolean_                                                                                                                       | if true, will enable row selection                                                                                                                                                                                                                                                                 |
| `initialSelected`       | _Record&lt;number, boolean>_                                                                                                    | initially selected rows                                                                                                                                                                                                                                                                            |
| `onSelectRowsChange`    | _(selected: Record&lt;number, boolean>) => void_                                                                                | callback when selected rows change                                                                                                                                                                                                                                                                 |
| `expanded`              | _{ \[key: string]: boolean; }_                                                                                                  | object listing the initially expanded rows.                                                                                                                                                                                                                                                        |
| `skipPageReset`         | _boolean_                                                                                                                       | reset state update while update table data                                                                                                                                                                                                                                                         |
| `renderRowSubComponent` | _(props: { row: Row&lt;{}>; }) => ReactNode_                                                                                    | callback to render a SubComponent row                                                                                                                                                                                                                                                              |

## <ins>useControlsActions</ins>

_useControlsActions [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PropsTable/controlsActions.ts)_

### properties

| Name              | Type                | Description |
| ----------------- | ------------------- | ----------- |
| `controls`        | _ComponentControls_ |             |
| `storyId`         | _string_            |             |
| `setControlValue` | _SetControlValueFn_ |             |

## <ins>Stories</ins>

displays multiple stories in ther own Playground components

_Stories [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Stories/Stories.tsx)_

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
| `visibleTabs` | _boolean_           | if true, the tabs on the panels will be visible                                                                                 |
| `background`  | _BackgroundType_    | background pattern type                                                                                                         |
| `direction`   | _DirectionType_     | direction type                                                                                                                  |
| `actions`     | _ActionItem\[]_     | optional actions provided to the component                                                                                      |
| `plain`       | _boolean_           | if plain, skip the border and spacing around the children                                                                       |

## <ins>Story</ins>

block component to render story function with decorators

_Story [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Story/Story.tsx)_

### properties

| Name          | Type                     | Description                                                                                                                     |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | _string_                 | id of the story optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `name`        | _string_                 | alternatively you can use the name of a story to load from an external file                                                     |
| `title`       | _string_                 | optional section title for the block.                                                                                           |
| `description` | _string_                 | optional markdown description.                                                                                                  |
| `collapsible` | _boolean_                | if false, will nothave a collapsible frame.                                                                                     |
| `sxStyle`     | _SystemStyleObject_      | theme-ui styling object for Block Box                                                                                           |
| `ref`         | _Ref&lt;HTMLDivElement>_ |                                                                                                                                 |

## <ins>StoryConfig</ins>

Displays the configuration object of a story.

_StoryConfig [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/StoryConfig/StoryConfig.tsx)_

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

Display source code of a story.
If controls are used, all story arguments will be highlighted.
Additional commands are made available if the repository data of the story is available.

_StorySource [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/StorySource/StorySource.tsx)_

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

displays a subtitle as assigned to the story parameters:
story.parameters.componentSubtitle
or story.subtitle

_Subtitle [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Subtitle/Subtitle.tsx)_

### properties

| Name       | Type                                                                           | Description                                                                 |
| ---------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `id`       | _string_                                                                       | id of the story                                                             |
| `name`     | _string_                                                                       | alternatively you can use the name of a story to load from an external file |
| `children` | _ReactNode_                                                                    | text to be displayed in the component.                                      |
| `as`       | _"h1" \| "h2" \| "h3" \| "h4" \| "h5"_                                         | DOM node type to render as. By default h3.                                  |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |                                                                             |

## <ins>Title</ins>

displays a title as assigned to the story document

_Title [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Title/Title.tsx)_

### properties

| Name       | Type                                                                           | Description                                                                 |
| ---------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `id`       | _string_                                                                       | id of the story                                                             |
| `name`     | _string_                                                                       | alternatively you can use the name of a story to load from an external file |
| `children` | _ReactNode_                                                                    | text to be displayed in the component.                                      |
| `sxStyle`  | _SystemStyleObject_                                                            | theme-ui styling object                                                     |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_ |                                                                             |

## <ins>InvalidType</ins>

error message when the control type is not found.

_InvalidType [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/notifications/InvalidType.tsx)_

## <ins>MDXContent</ins>

_MDXContent [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/test/MDXStory.tsx)_

### properties

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| `components*` | _any_ |             |

## <ins>getStoryBlockTitle</ins>

_getStoryBlockTitle [source code](https:/github.com/ccontrols/component-controls/tree/master/ui/blocks/src/utils/constants.ts)_

### properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `story` | _Story_  |             |
| `title` | _string_ |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
