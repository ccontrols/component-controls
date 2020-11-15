# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>ComponentsBlockContainer</ins>](#inscomponentsblockcontainerins)
    -   [<ins>StoryBlockContainer</ins>](#insstoryblockcontainerins)
    -   [<ins>ComponentDeps</ins>](#inscomponentdepsins)
    -   [<ins>Dependencies</ins>](#insdependenciesins)
    -   [<ins>BaseComponentSource</ins>](#insbasecomponentsourceins)
    -   [<ins>ComponentSource</ins>](#inscomponentsourceins)
    -   [<ins>Container</ins>](#inscontainerins)
    -   [<ins>Description</ins>](#insdescriptionins)
    -   [<ins>DocumentItem</ins>](#insdocumentitemins)
    -   [<ins>EditPage</ins>](#inseditpageins)
    -   [<ins>PackageVersion</ins>](#inspackageversionins)
    -   [<ins>PageContainer</ins>](#inspagecontainerins)
    -   [<ins>PageTypeTag</ins>](#inspagetypetagins)
    -   [<ins>Pagination</ins>](#inspaginationins)
    -   [<ins>BasePlayground</ins>](#insbaseplaygroundins)
    -   [<ins>Playground</ins>](#insplaygroundins)
    -   [<ins>StoryPlayground</ins>](#insstoryplaygroundins)
    -   [<ins>PropsTable</ins>](#inspropstableins)
    -   [<ins>useControlsActions</ins>](#insusecontrolsactionsins)
    -   [<ins>Search</ins>](#inssearchins)
    -   [<ins>Stories</ins>](#insstoriesins)
    -   [<ins>Story</ins>](#insstoryins)
    -   [<ins>StoryRender</ins>](#insstoryrenderins)
    -   [<ins>StoryConfig</ins>](#insstoryconfigins)
    -   [<ins>StorySource</ins>](#insstorysourceins)
    -   [<ins>Subtitle</ins>](#inssubtitleins)
    -   [<ins>TagsList</ins>](#instagslistins)
    -   [<ins>ThemeProvider</ins>](#insthemeproviderins)
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
-   Components that deal with source code (story or component source) display actions to browse their respective repositories.

# List of components

<react-docgen-typescript path="./src" exclude=".stories.tsx$,index.ts,repositoryActions.tsx,StoryContext.tsx,utils.ts,ComponentsContext.tsx,context.tsx,argument-utils.ts,channel.ts,BasePropsTable.tsx,BaseComponentDeps.tsx,ErrorBoundary.tsx,BaseStoryConfig.tsx,BaseStorySource.tsx,storeState.ts" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ComponentsBlockContainer</ins>

_ComponentsBlockContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/BlockContainer/components/ComponentsBlockContainer.tsx)_

### properties

| Name          | Type                                                      | Description                                                                                                                                                                                                                                                                                        |
| ------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`  | _ComponentVisibility_                                     | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `onSelect`    | _(name: string, component: Component) => boolean \| void_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `of`          | _any_                                                     | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`        | _string_                                                  | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |
| `title`       | _string_                                                  | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description` | _string_                                                  | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`          | _string_                                                  | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible` | _boolean_                                                 | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`     | _ThemeUIStyleObject_                                      | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `data-testid` | _string_                                                  | testing id                                                                                                                                                                                                                                                                                         |

## <ins>StoryBlockContainer</ins>

_StoryBlockContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/BlockContainer/story/StoryBlockContainer.tsx)_

### properties

| Name                  | Type                 | Description                                                                                                     |
| --------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `story`               | _Story&lt;unknown>_  |                                                                                                                 |
| `useStoryDescription` | _boolean_            |                                                                                                                 |
| `title`               | _string_             | optional section title for the block.                                                                           |
| `description`         | _string_             | optional markdown description.                                                                                  |
| `id`                  | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible`         | _boolean_            | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`             | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                           |
| `data-testid`         | _string_             | testing id                                                                                                      |

## <ins>ComponentDeps</ins>

Displays external dependencies for a component

_ComponentDeps [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ComponentDeps/ComponentDeps.tsx)_

### properties

| Name          | Type                                                      | Description                                                                                                                                                                                                                                                                                        |
| ------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onSelect`    | _(name: string, component: Component) => boolean \| void_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `visibility`  | _ComponentVisibility_                                     | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `of`          | _any_                                                     | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`        | _string_                                                  | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |
| `title`       | _string_                                                  | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description` | _string_                                                  | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`          | _string_                                                  | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible` | _boolean_                                                 | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`     | _ThemeUIStyleObject_                                      | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `data-testid` | _string_                                                  | testing id                                                                                                                                                                                                                                                                                         |

## <ins>Dependencies</ins>

table component to display a list of dependencies

_Dependencies [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ComponentDeps/Dependencies.tsx)_

### properties

| Name            | Type            | Description                     |
| --------------- | --------------- | ------------------------------- |
| `dependencies*` | _Dependency\[]_ | list of dependencies to display |

## <ins>BaseComponentSource</ins>

_BaseComponentSource [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ComponentSource/BaseComponentSource.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `component*` | _Component_                                                                                                                                                                                                                                                                          |                                                                                                                                                                                  |
| `actions`    | _ActionItem\[]_                                                                                                                                                                                                                                                                      | optional actions provided to the component                                                                                                                                       |
| `plain`      | _boolean_                                                                                                                                                                                                                                                                            | if plain, skip the border and spacing around the children                                                                                                                        |
| `children`   | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | source code to be displayed.                                                                                                                                                     |
| `theme`      | _PrismTheme_                                                                                                                                                                                                                                                                         | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                            |
| `title`      | _string_                                                                                                                                                                                                                                                                             | optional title to display for the code block. Usually used from MDX                                                                                                              |
| `language`   | _Language_                                                                                                                                                                                                                                                                           | source lnguage used, by default "jsx".                                                                                                                                           |
| `renderFn`   | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_                                                                                                                                                                                                                   | custom function to render the source code.                                                                                                                                       |
| `dark`       | _boolean_                                                                                                                                                                                                                                                                            | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used. |
| `style`      | _CSSProperties_                                                                                                                                                                                                                                                                      | css styles for the container.                                                                                                                                                    |
| `as`         | _ElementType&lt;any>_                                                                                                                                                                                                                                                                | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                 |
| `metastring` | _string_                                                                                                                                                                                                                                                                             | code configuration string passed from MDX                                                                                                                                        |

## <ins>ComponentSource</ins>

Displays import statement for a component as well as the component file source code
Optionally also displays some repository information from the component's package.json

_ComponentSource [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ComponentSource/ComponentSource.tsx)_

### properties

| Name          | Type                                                               | Description                                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onSelect`    | _(name: string, component: Component) => boolean \| void_          | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `visibility`  | _ComponentVisibility_                                              | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `of`          | _any_                                                              | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`        | _string_                                                           | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |
| `title`       | _string_                                                           | optional section title for the block. optional title to display for the code block. Usually used from MDX                                                                                                                                                                                          |
| `description` | _string_                                                           | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`          | _string_                                                           | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible` | _boolean_                                                          | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`     | _ThemeUIStyleObject_                                               | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `data-testid` | _string_                                                           | testing id                                                                                                                                                                                                                                                                                         |
| `actions`     | _ActionItem\[]_                                                    | optional actions provided to the component                                                                                                                                                                                                                                                         |
| `plain`       | _boolean_                                                          | if plain, skip the border and spacing around the children                                                                                                                                                                                                                                          |
| `theme`       | _PrismTheme_                                                       | optional \`PrismTheme\` theme provided to the component. Themes can be imported from \`prism-react-renderer/themes\`.                                                                                                                                                                              |
| `language`    | _Language_                                                         | source lnguage used, by default "jsx".                                                                                                                                                                                                                                                             |
| `renderFn`    | _(props: RenderProps, other: { theme: PrismTheme; }) => ReactNode_ | custom function to render the source code.                                                                                                                                                                                                                                                         |
| `dark`        | _boolean_                                                          | used to specify a "dark" color theme - applcable only if no custom theme prop is provided. if dark: true, duotoneDark theme is used. if dark: false, duotoneLight theme is used.                                                                                                                   |
| `style`       | _CSSProperties_                                                    | css styles for the container.                                                                                                                                                                                                                                                                      |
| `as`          | _ElementType&lt;any>_                                              | syntax container as element. Can be used as \`div\` or \`span\`.                                                                                                                                                                                                                                   |
| `metastring`  | _string_                                                           | code configuration string passed from MDX                                                                                                                                                                                                                                                          |

## <ins>Container</ins>

page inner container. will display a like to edit the page and a last updated date.

_Container [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Container/Container.tsx)_

### properties

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `author`    | _ReactNode_ |             |
| `secondRow` | _ReactNode_ |             |

## <ins>Description</ins>

Description component with markdown.
The 'of' property can specify which component's description to display.

_Description [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Description/Description.tsx)_

### properties

| Name         | Type                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components` | _{ \[key: string]: ComponentOverride&lt;any, any>; a?: ComponentOverride&lt;any, any>; br?: ComponentOverride&lt;any, any>; button?: ComponentOverride&lt;any, any>; ... 27 more ...; ul?: ComponentOverride&lt;...>; }_ | components to customize the markdown display.                                                                                                                                                                                                                                                      |
| `of`         | _any_                                                                                                                                                                                                                    | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`       | _string_                                                                                                                                                                                                                 | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |

## <ins>DocumentItem</ins>

displays a single doument item

_DocumentItem [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/DocumentItem/DocumentItem.tsx)_

### properties

| Name    | Type                   | Description              |
| ------- | ---------------------- | ------------------------ |
| `link*` | _string_               | link to the document     |
| `doc*`  | _Document&lt;unknown>_ | document to be displayed |

## <ins>EditPage</ins>

Display a Edit this page link to the page source repository.
In order for this to work, you need to set up the `repository` field in `package.json`.

_EditPage [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/EditPage/EditPage.tsx)_

## <ins>PackageVersion</ins>

Display a label with the component's package version.
extracted from package.json

_PackageVersion [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PackageVersion/PackageVersion.tsx)_

## <ins>PageContainer</ins>

Page container component
If the page is an MDX page, will display the MDX components.
Otherwise, the page elements are passed as children

_PageContainer [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PageContainer/PageContainer.tsx)_

### properties

| Name      | Type                     | Description                         |
| --------- | ------------------------ | ----------------------------------- |
| `ref`     | _Ref&lt;HTMLDivElement>_ | ref to the page container component |
| `variant` | _string_                 | theme variant                       |
| `wrapper` | _ComponentType&lt;{}>_   | inner wrapper container             |

## <ins>PageTypeTag</ins>

_PageTypeTag [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PageTypeTag/PageTypeTag.tsx)_

### properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `type*` | _string_ |             |

## <ins>Pagination</ins>

displays automatic pagination to the next/previous document of this same type.

_Pagination [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Pagination/Pagination.tsx)_

## <ins>BasePlayground</ins>

_BasePlayground [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Playground/BasePlayground.tsx)_

### properties

| Name          | Type                 | Description                                                                                                     |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `scale`       | _number_             | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                    |
| `source`      | _string_             | playground source option - valid when a Story is not embedded inside the Playground.                            |
| `dark`        | _boolean_            | whether to use the dark theme for the story source component.                                                   |
| `title`       | _string_             | optional section title for the block.                                                                           |
| `description` | _string_             | optional markdown description.                                                                                  |
| `id`          | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_            | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_             | testing id                                                                                                      |
| `openTab`     | _any_                | by default, which tab to have open.                                                                             |
| `visibleTabs` | _boolean_            | if true, the tabs on the panels will be visible                                                                 |
| `background`  | _BackgroundType_     | background pattern type                                                                                         |
| `direction`   | _DirectionType_      | direction type                                                                                                  |
| `actions`     | _ActionItem\[]_      | optional actions provided to the component                                                                      |
| `plain`       | _boolean_            | if plain, skip the border and spacing around the children                                                       |
| `story`       | _Story&lt;unknown>_  |                                                                                                                 |
| `isDark`      | _boolean_            |                                                                                                                 |
| `wrapper`     | _boolean_            |                                                                                                                 |

## <ins>Playground</ins>

Component to display a live playground of component examples. Has custom actions for zooming, switch direction, review story source and configuration.

_Playground [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Playground/Playground.tsx)_

### properties

| Name          | Type                 | Description                                                                                                     |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `scale`       | _number_             | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                    |
| `source`      | _string_             | playground source option - valid when a Story is not embedded inside the Playground.                            |
| `dark`        | _boolean_            | whether to use the dark theme for the story source component.                                                   |
| `title`       | _string_             | optional section title for the block.                                                                           |
| `description` | _string_             | optional markdown description.                                                                                  |
| `id`          | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_            | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_             | testing id                                                                                                      |
| `openTab`     | _any_                | by default, which tab to have open.                                                                             |
| `visibleTabs` | _boolean_            | if true, the tabs on the panels will be visible                                                                 |
| `background`  | _BackgroundType_     | background pattern type                                                                                         |
| `direction`   | _DirectionType_      | direction type                                                                                                  |
| `actions`     | _ActionItem\[]_      | optional actions provided to the component                                                                      |
| `plain`       | _boolean_            | if plain, skip the border and spacing around the children                                                       |

## <ins>StoryPlayground</ins>

_StoryPlayground [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Playground/StoryPlayground.tsx)_

### properties

| Name          | Type                 | Description                                                                                                     |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `storyProps`  | _any_                |                                                                                                                 |
| `scale`       | _number_             | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                    |
| `source`      | _string_             | playground source option - valid when a Story is not embedded inside the Playground.                            |
| `dark`        | _boolean_            | whether to use the dark theme for the story source component.                                                   |
| `title`       | _string_             | optional section title for the block.                                                                           |
| `description` | _string_             | optional markdown description.                                                                                  |
| `id`          | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_            | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_             | testing id                                                                                                      |
| `openTab`     | _any_                | by default, which tab to have open.                                                                             |
| `visibleTabs` | _boolean_            | if true, the tabs on the panels will be visible                                                                 |
| `background`  | _BackgroundType_     | background pattern type                                                                                         |
| `direction`   | _DirectionType_      | direction type                                                                                                  |
| `actions`     | _ActionItem\[]_      | optional actions provided to the component                                                                      |
| `plain`       | _boolean_            | if plain, skip the border and spacing around the children                                                       |

## <ins>PropsTable</ins>

Displays the component's properties as well as configurable controls to interact with the component.

_PropsTable [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PropsTable/PropsTable.tsx)_

### properties

| Name                    | Type                                                                                                                      | Description                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extraColumns`          | _Column&lt;{}>\[]_                                                                                                        | extra custom columns passed to the PropsTable.                                                                                                                                                                                                                                                     |
| `flat`                  | _boolean_                                                                                                                 | if true, will flatten the group by                                                                                                                                                                                                                                                                 |
| `onSelect`              | _((name: string, component: Component) => boolean \| void) & ((event: SyntheticEvent&lt;HTMLDivElement, Event>) => void)_ | callback to be called when the tab changes if the function returns false, it can stop chabging to the new tab                                                                                                                                                                                      |
| `visibility`            | _ComponentVisibility_                                                                                                     | by default will show both controls and props tables user setting can display only props table or only controls                                                                                                                                                                                     |
| `of`                    | _any_                                                                                                                     | Specify the component(s), for which to have information displayed. The default, a value of \`"."\` will indicate to display information for the current component (associated with the current Story). If an array of components is specified, each component will be displayed in a separate tab. |
| `name`                  | _string_                                                                                                                  | some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls                                                                                                                                                    |
| `title`                 | _string_                                                                                                                  | optional section title for the block.                                                                                                                                                                                                                                                              |
| `description`           | _string_                                                                                                                  | optional markdown description.                                                                                                                                                                                                                                                                     |
| `id`                    | _string_                                                                                                                  | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.                                                                                                                                                                                    |
| `collapsible`           | _boolean_                                                                                                                 | if false, will nothave a collapsible frame.                                                                                                                                                                                                                                                        |
| `sxStyle`               | _ThemeUIStyleObject_                                                                                                      | theme-ui styling object for Block Box                                                                                                                                                                                                                                                              |
| `data-testid`           | _string_                                                                                                                  | testing id                                                                                                                                                                                                                                                                                         |
| `ref`                   | _((instance: HTMLDivElement) => void) \| RefObject&lt;HTMLDivElement>_                                                    |                                                                                                                                                                                                                                                                                                    |
| `header`                | _boolean_                                                                                                                 | show or hide the header element.                                                                                                                                                                                                                                                                   |
| `sorting`               | _boolean_                                                                                                                 | enable.disable sorting.                                                                                                                                                                                                                                                                            |
| `filtering`             | _boolean_                                                                                                                 | enable/disable filtering.                                                                                                                                                                                                                                                                          |
| `itemsLabel`            | _string_                                                                                                                  | string label for 'items' - used in the filter placeholder and grouping header.                                                                                                                                                                                                                     |
| `groupBy`               | _string\[]_                                                                                                               | field to be grouped by.                                                                                                                                                                                                                                                                            |
| `hiddenColumns`         | _string\[]_                                                                                                               | list of columns to hide.                                                                                                                                                                                                                                                                           |
| `rowSelect`             | _boolean_                                                                                                                 | if true, will enable row selection                                                                                                                                                                                                                                                                 |
| `initialSelected`       | _Record&lt;number, boolean>_                                                                                              | initially selected rows                                                                                                                                                                                                                                                                            |
| `onSelectRowsChange`    | _(selected: Record&lt;number, boolean>) => void_                                                                          | callback when selected rows change                                                                                                                                                                                                                                                                 |
| `expanded`              | _{ \[key: string]: boolean; }_                                                                                            | object listing the initially expanded rows.                                                                                                                                                                                                                                                        |
| `skipPageReset`         | _boolean_                                                                                                                 | reset state update while update table data                                                                                                                                                                                                                                                         |
| `renderRowSubComponent` | _(props: { row: Row&lt;{}>; }) => ReactNode_                                                                              | callback to render a SubComponent row                                                                                                                                                                                                                                                              |

## <ins>useControlsActions</ins>

_useControlsActions [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/PropsTable/controlsActions.ts)_

### properties

| Name              | Type                                             | Description |
| ----------------- | ------------------------------------------------ | ----------- |
| `controls`        | _ComponentControls&lt;ComponentControl&lt;any>>_ |             |
| `storyId`         | _string_                                         |             |
| `setControlValue` | _SetControlValueFn_                              |             |

## <ins>Search</ins>

_Search [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Search/Search.tsx)_

### properties

| Name           | Type                                                                                                                                                                                                                                                                             | Description                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `onSelect`     | _(item: Document&lt;unknown>) => void_                                                                                                                                                                                                                                           | on select a search item.                                                    |
| `children`     | _((props: SearchBoxCallbackProps&lt;Document&lt;unknown>>) => ReactNode) \| (((props: SearchBoxCallbackProps&lt;Document&lt;unknown>>) => ReactNode) & string) \| ... 35 more ... \| (((props: SearchBoxCallbackProps&lt;...>) => ReactNode) & ... 1 more ... & ReactNodeArray)_ | children is a render prop to allow custom rendering of items, one at a time |
| `popoverProps` | _PopoverProps_                                                                                                                                                                                                                                                                   | customize the popover                                                       |

## <ins>Stories</ins>

displays multiple stories in ther own Playground components

_Stories [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Stories/Stories.tsx)_

### properties

| Name          | Type                 | Description                                                                                                                |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `dark`        | _boolean_            | whether to display the dark theme storysource code component whether to use the dark theme for the story source component. |
| `id`          | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title.            |
| `name`        | _string_             |                                                                                                                            |
| `storyProps`  | _any_                |                                                                                                                            |
| `scale`       | _number_             | default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.                               |
| `source`      | _string_             | playground source option - valid when a Story is not embedded inside the Playground.                                       |
| `title`       | _string_             | optional section title for the block.                                                                                      |
| `description` | _string_             | optional markdown description.                                                                                             |
| `collapsible` | _boolean_            | if false, will nothave a collapsible frame.                                                                                |
| `sxStyle`     | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                                      |
| `data-testid` | _string_             | testing id                                                                                                                 |
| `openTab`     | _any_                | by default, which tab to have open.                                                                                        |
| `visibleTabs` | _boolean_            | if true, the tabs on the panels will be visible                                                                            |
| `background`  | _BackgroundType_     | background pattern type                                                                                                    |
| `direction`   | _DirectionType_      | direction type                                                                                                             |
| `actions`     | _ActionItem\[]_      | optional actions provided to the component                                                                                 |
| `plain`       | _boolean_            | if plain, skip the border and spacing around the children                                                                  |

## <ins>Story</ins>

block component to render story function with decorators

_Story [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Story/Story.tsx)_

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
| `sxStyle`     | _ThemeUIStyleObject_     | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_                 | testing id                                                                                                      |

## <ins>StoryRender</ins>

_StoryRender [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Story/StoryRender.tsx)_

### properties

| Name          | Type                     | Description |
| ------------- | ------------------------ | ----------- |
| `story*`      | _Story&lt;unknown>_      |             |
| `ref`         | _Ref&lt;HTMLDivElement>_ |             |
| `wrapper`     | _StoryWrapperType_       |             |
| `iframeStyle` | _CSSProperties_          |             |

## <ins>StoryConfig</ins>

Displays the configuration object of a story.

_StoryConfig [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/StoryConfig/StoryConfig.tsx)_

### properties

| Name          | Type                 | Description                                                                                                     |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `title`       | _string_             | optional section title for the block.                                                                           |
| `description` | _string_             | optional markdown description.                                                                                  |
| `id`          | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_            | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_             | testing id                                                                                                      |
| `sourceProps` | _SourceProps_        |                                                                                                                 |
| `name`        | _string_             |                                                                                                                 |

## <ins>StorySource</ins>

Display source code of a story.
If controls are used, all story arguments will be highlighted.
Additional commands are made available if the repository data of the story is available.

_StorySource [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/StorySource/StorySource.tsx)_

### properties

| Name          | Type                 | Description                                                                                                     |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `viewStyle`   | _ViewStyle_          | initial view mode                                                                                               |
| `sourceProps` | _SourceProps_        | source code options                                                                                             |
| `title`       | _string_             | optional section title for the block.                                                                           |
| `description` | _string_             | optional markdown description.                                                                                  |
| `id`          | _string_             | optional id to be used for the block if no id is provided, one will be calculated automatically from the title. |
| `collapsible` | _boolean_            | if false, will nothave a collapsible frame.                                                                     |
| `sxStyle`     | _ThemeUIStyleObject_ | theme-ui styling object for Block Box                                                                           |
| `data-testid` | _string_             | testing id                                                                                                      |
| `name`        | _string_             |                                                                                                                 |

## <ins>Subtitle</ins>

displays a subtitle as assigned to the story parameters:
or story.subtitle

_Subtitle [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Subtitle/Subtitle.tsx)_

### properties

| Name       | Type                                                                                                                                                                                                                                                                                 | Description                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `id`       | _string_                                                                                                                                                                                                                                                                             |                                            |
| `name`     | _string_                                                                                                                                                                                                                                                                             |                                            |
| `children` | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | text to be displayed in the component.     |
| `as`       | _"h1" \| "h2" \| "h3" \| "h4" \| "h5"_                                                                                                                                                                                                                                               | DOM node type to render as. By default h3. |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_                                                                                                                                                                                                       |                                            |

## <ins>TagsList</ins>

displays a row of tags assigned to the current document, with links to their pages

_TagsList [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/TagsList/TagsList.tsx)_

### properties

| Name   | Type        | Description              |
| ------ | ----------- | ------------------------ |
| `tags` | _string\[]_ | string list of tag names |

## <ins>ThemeProvider</ins>

_ThemeProvider [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/ThemeProvider/ThemeProvider.tsx)_

### properties

| Name         | Type                    | Description                                   |
| ------------ | ----------------------- | --------------------------------------------- |
| `components` | _MarkdownComponentType_ | components to customize the markdown display. |

## <ins>Title</ins>

displays a title as assigned to the story document

_Title [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/Title/Title.tsx)_

### properties

| Name       | Type                                                                                                                                                                                                                                                                                 | Description                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| `id`       | _string_                                                                                                                                                                                                                                                                             |                                        |
| `name`     | _string_                                                                                                                                                                                                                                                                             |                                        |
| `children` | _string \| (string & {}) \| (string & ReactElement&lt;any, string \| ((props: any) => ReactElement&lt;any, string \| ... \| (new (props: any) => Component&lt;any, any, any>)>) \| (new (props: any) => Component&lt;...>)>) \| (string & ReactNodeArray) \| (string & ReactPortal)_ | text to be displayed in the component. |
| `ref`      | _((instance: HTMLHeadingElement) => void) \| RefObject&lt;HTMLHeadingElement>_                                                                                                                                                                                                       |                                        |

## <ins>InvalidType</ins>

error message when the control type is not found.

_InvalidType [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/notifications/InvalidType.tsx)_

## <ins>MDXContent</ins>

_MDXContent [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/test/MDXStory.tsx)_

### properties

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| `components*` | _any_ |             |

## <ins>getStoryBlockTitle</ins>

_getStoryBlockTitle [source code](https://github.com/ccontrols/component-controls/tree/master/ui/blocks/src/utils/constants.ts)_

### properties

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| `story` | _Story&lt;unknown>_ |             |
| `title` | _string_            |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
