# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [SourceIdentifier](#sourceidentifier)
    -   [ArgUsageLocation](#argusagelocation)
    -   [StoryArgument](#storyargument)
    -   [StoryArguments](#storyarguments)
    -   [Story](#story)
    -   [DynamicExamples](#dynamicexamples)
    -   [ExampleControl](#examplecontrol)
    -   [ExampleControls](#examplecontrols)
    -   [Example](#example)
    -   [DocumentData](#documentdata)
    -   [StoryFactoryFn](#storyfactoryfn)
    -   [defDocType](#defdoctype)
    -   [Document](#document)
    -   [dateToLocalString](#datetolocalstring)
    -   [DocInfo](#docinfo)
    -   [Documents](#documents)
    -   [Pages](#pages)
    -   [Stories](#stories)
    -   [Packages](#packages)
    -   [StoreObserver](#storeobserver)
    -   [CURRENT_STORY](#current_story)
    -   [Store](#store)
    -   [getDefaultStore](#getdefaultstore)
    -   [assignProps](#assignprops)
    -   [ComponentControlData](#componentcontroldata)
    -   [ComponentControlBase](#componentcontrolbase)
    -   [ComponentControlText](#componentcontroltext)
    -   [ComponentControlBoolean](#componentcontrolboolean)
    -   [ColorPickerKind](#colorpickerkind)
    -   [ComponentControlColor](#componentcontrolcolor)
    -   [ComponentControlDate](#componentcontroldate)
    -   [ComponentControlFiles](#componentcontrolfiles)
    -   [ComponentControlArray](#componentcontrolarray)
    -   [ComponentControlObject](#componentcontrolobject)
    -   [ComponentControlButton](#componentcontrolbutton)
    -   [OptionsValueType](#optionsvaluetype)
    -   [OptionsListType](#optionslisttype)
    -   [ComponentControlOptions](#componentcontroloptions)
    -   [ComponentControlNumber](#componentcontrolnumber)
    -   [ComponentControl](#componentcontrol)
    -   [ComponentControls](#componentcontrols)
    -   [ControlTypes](#controltypes)
    -   [TypeValue](#typevalue)
    -   [TypeInformation](#typeinformation)
    -   [PropType](#proptype)
    -   [PropTypes](#proptypes)
    -   [ComponentInfo](#componentinfo)
    -   [JSXNode](#jsxnode)
    -   [JSXTree](#jsxtree)
    -   [Component](#component)
    -   [Components](#components)
    -   [getComponentName](#getcomponentname)
    -   [PropsInfoExtractorFunction](#propsinfoextractorfunction)
    -   [ImportType](#importtype)
    -   [ImportTypes](#importtypes)
    -   [CodePosition](#codeposition)
    -   [CodeLocation](#codelocation)
    -   [PackageRepository](#packagerepository)
    -   [PackageDependency](#packagedependency)
    -   [PackageDependencies](#packagedependencies)
    -   [PackageInfo](#packageinfo)
    -   [StoryRenderFn](#storyrenderfn)
    -   [Imports](#imports)
    -   [defaultExport](#defaultexport)
    -   [ActionItem](#actionitem)
    -   [ActionItems](#actionitems)
    -   [AsyncFnReturn](#asyncfnreturn)
    -   [useAsync](#useasync)
    -   [isLocalImport](#islocalimport)
    -   [FrameworkRenderFn](#frameworkrenderfn)
    -   [TabConfiguration](#tabconfiguration)
    -   [PageTab](#pagetab)
    -   [PageTabs](#pagetabs)
    -   [loadDefaultExport](#loaddefaultexport)
    -   [loadPageTab](#loadpagetab)
    -   [DocType](#doctype)
    -   [PageLayoutProps](#pagelayoutprops)
    -   [SideNavConfiguration](#sidenavconfiguration)
    -   [PageConfiguration](#pageconfiguration)
    -   [PagesConfiguration](#pagesconfiguration)
    -   [PagesOnlyRoutes](#pagesonlyroutes)
    -   [SitemapConfigPage](#sitemapconfigpage)
    -   [SitemapConfig](#sitemapconfig)
    -   [BuildConfiguration](#buildconfiguration)
    -   [ToolbarConfig](#toolbarconfig)
    -   [StaticMenuItem](#staticmenuitem)
    -   [StaticMenuItems](#staticmenuitems)
    -   [RuntimeConfiguration](#runtimeconfiguration)
    -   [RunConfiguration](#runconfiguration)
    -   [defaultBuildConfig](#defaultbuildconfig)
    -   [defaultRunConfig](#defaultrunconfig)
    -   [convertConfig](#convertconfig)
    -   [RuleOptions](#ruleoptions)
    -   [RuleType](#ruletype)
    -   [RuleTypes](#ruletypes)
    -   [PresetCallback](#presetcallback)
    -   [PresetType](#presettype)
    -   [WebpackLoader](#webpackloader)
    -   [WebpackLoaderConfig](#webpackloaderconfig)
    -   [BuildProps](#buildprops)
    -   [customLoaderOptions](#customloaderoptions)
    -   [defaultCompileProps](#defaultcompileprops)
    -   [WatchOptions](#watchoptions)
    -   [WatchProps](#watchprops)
    -   [defBundleName](#defbundlename)
    -   [defCssFileName](#defcssfilename)

# Overview

Type definitions of the component-controls specification and accompanying utility functions.
Includes definitions for:

-   [Story](#story)
-   [Stories](#stories)
-   [Document](#document)
-   [ControlTypes](#controltypes)
-   [ComponentControl](#componentcontrol)
-   [PropTypes](#proptypes)
-   and more...

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/core --save-dev
```

# API

<api-readme files="./src/document.ts,./src/controls.ts,./src/components.ts,./src/propsInfo.ts,./src/utility.ts,./src/configuration.ts,./src/build.ts" maxDepth=5/>

<!-- START-API-README -->

## SourceIdentifier

**`interface`**

an identifier/variable.argument in the source code

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L17)_

**properties**

| Name    | Type                            | Description                                                                            |
| ------- | ------------------------------- | -------------------------------------------------------------------------------------- |
| `name*` | `string`                        |                                                                                        |
| `loc`   | [`CodeLocation`](#codelocation) | location in the source code of a story or part of it ie. arguments, usage of arguments |

## ArgUsageLocation

**`interface`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L21)_

**properties**

| Name        | Type                                                                                                                                                                                                                                                                                                                  | Description                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `loc*`      | <details><summary>`SourceLocation`</summary><blockquote><details><summary>`start`\*</summary><blockquote>`line`\*: `number`<br />`column`\*: `number`</blockquote></details><details><summary>`end`\*</summary><blockquote>`line`\*: `number`<br />`column`\*: `number`</blockquote></details></blockquote></details> | where in the story source code is the argument used code location is relative to the start of the story |
| `name`      | [`SourceIdentifier`](#sourceidentifier)                                                                                                                                                                                                                                                                               | an identifier/variable.argument in the source code                                                      |
| `shorthand` | `boolean`                                                                                                                                                                                                                                                                                                             | true if the property is a 'shorthand'. { prop: value } - not a shorthand. { prop } - a shorthand.       |

## StoryArgument

**`interface`**

arguments passed to the 'story' function, extracted by an AST loader

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L45)_

**properties**

| Name     | Type                                            | Description                                                                                |
| -------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `value*` | `string` \| [`StoryArguments`](#storyarguments) | either the name used (or a variable alias), or an array of sub-arguments ({ name: alias }) |
| `name`   | `string`                                        | the original name of the argument                                                          |
| `loc`    | [`CodeLocation`](#codelocation)                 | location in the source code of a story or part of it ie. arguments, usage of arguments     |
| `usage`  | [`ArgUsageLocation`](#argusagelocation)\[]      | list of locations where the argument is used in the body of the story                      |

## StoryArguments

**`array`**

list of story arguments. Each argument can be a deconstructed argument of itself the first argument are the control 'values'

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L69)_

**properties**

| Name          | Type                              | Description                                                          |
| ------------- | --------------------------------- | -------------------------------------------------------------------- |
| _anonymous\*_ | [`StoryArgument`](#storyargument) | arguments passed to the 'story' function, extracted by an AST loader |

## Story

**`type`**

Story interface - usually extracted by the AST instrumenting loader

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L74)_

**properties**

| Name            | Type                                                                                                                                                                                   | Parent       | Description                                                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name*`         | `string`                                                                                                                                                                               |              | name of the Story.                                                                                                                                |
| `storyName`     | `string`                                                                                                                                                                               |              | alternative name prop                                                                                                                             |
| `id`            | `string`                                                                                                                                                                               |              | id of the story                                                                                                                                   |
| `rawId`         | `string`                                                                                                                                                                               |              | raw id for the story as declared in ESM format                                                                                                    |
| `doc`           | `string`                                                                                                                                                                               |              | title of the file/group of stories                                                                                                                |
| `storyFn`       | [`StoryRenderFn`](#storyrenderfn)                                                                                                                                                      |              | story render function                                                                                                                             |
| `description`   | `string`                                                                                                                                                                               |              | story extended description. can use markdown.                                                                                                     |
| `arguments`     | [`StoryArguments`](#storyarguments)                                                                                                                                                    |              | list of story arguments. Each argument can be a deconstructed argument of itself the first argument are the control 'values'                      |
| `loc`           | [`CodeLocation`](#codelocation)                                                                                                                                                        |              | location in the source code of a story or part of it ie. arguments, usage of arguments                                                            |
| `source`        | `string`                                                                                                                                                                               |              | the source code of the story, extracted by the AST instrumenting loaders                                                                          |
| `subtitle`      | `string`                                                                                                                                                                               |              | optional story subtitle property                                                                                                                  |
| `dynamic`       | `boolean`                                                                                                                                                                              |              | if set to true, the function is dynamically creating stories, returns a list of Story objects                                                     |
| `dynamicId`     | `string`                                                                                                                                                                               |              | if the story was created by a dynamic story (factory), this is the original story id. it is set internally and will be used to create a story URL |
| `component`     | <details><summary>`type`</summary><blockquote>`at`\*: **function** (<br />`index`\*: `number`<br />) => `T` \| `undefined`</blockquote></details>                                      | `StoryProps` | id for component associated with the story                                                                                                        |
| `subcomponents` | `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)>                                                                                         | `StoryProps` | multiple components option                                                                                                                        |
| `controls`      | [`ComponentControls`](#componentcontrols)                                                                                                                                              | `StoryProps` | ComponentControls are defined in key value pairs the name of the property is the key and the value is the ComponentControl                        |
| `smartControls` | <details><summary>`SmartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details> | `StoryProps` | "smart" controls options                                                                                                                          |
| `decorators`    | [`StoryRenderFn`](#storyrenderfn)\[]                                                                                                                                                   | `StoryProps` | array of wrapper functions (decorators) to be called when rendering each individual story.                                                        |
| `plugins`       | `any`                                                                                                                                                                                  | `StoryProps` | plugins configuration settings                                                                                                                    |
| `category`      | `string`                                                                                                                                                                               | `StoryProps` | category string - can be used for cleanly separating stories/components                                                                           |

## DynamicExamples

**`array`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L138)_

**properties**

| Name          | Type              | Description                                                         |
| ------------- | ----------------- | ------------------------------------------------------------------- |
| _anonymous\*_ | [`Story`](#story) | Story interface - usually extracted by the AST instrumenting loader |

## ExampleControl

**`union`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L140)_

**values**

[`ComponentControl`](#componentcontrol) \| `any`

## ExampleControls

**`type`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L142)_

**properties**

| Name    | Type                                                   |
| ------- | ------------------------------------------------------ |
| `name*` | \[`string`]: [`ExampleControl`](#examplecontrol)<br /> |

## Example

**`type`**

es named export function, excapsulates a contained example code.

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L149)_

**properties**

| Name            | Type                                                                                                                                                                                   | Parent            | Description                                                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bind*`         | **function** (<br />`props`: [`Story`](#story)<br />) => [`Example`](#example)                                                                                                         |                   |                                                                                                                                                   |
| `source`        | `string`                                                                                                                                                                               | [`Story`](#story) | the source code of the story, extracted by the AST instrumenting loaders                                                                          |
| `storyName`     | `string`                                                                                                                                                                               | [`Story`](#story) | alternative name prop                                                                                                                             |
| `id`            | `string`                                                                                                                                                                               | [`Story`](#story) | id of the story                                                                                                                                   |
| `rawId`         | `string`                                                                                                                                                                               | [`Story`](#story) | raw id for the story as declared in ESM format                                                                                                    |
| `doc`           | `string`                                                                                                                                                                               | [`Story`](#story) | title of the file/group of stories                                                                                                                |
| `storyFn`       | [`StoryRenderFn`](#storyrenderfn)                                                                                                                                                      | [`Story`](#story) | story render function                                                                                                                             |
| `description`   | `string`                                                                                                                                                                               | [`Story`](#story) | story extended description. can use markdown.                                                                                                     |
| `loc`           | [`CodeLocation`](#codelocation)                                                                                                                                                        | [`Story`](#story) | location in the source code of a story or part of it ie. arguments, usage of arguments                                                            |
| `subtitle`      | `string`                                                                                                                                                                               | [`Story`](#story) | optional story subtitle property                                                                                                                  |
| `dynamic`       | `boolean`                                                                                                                                                                              | [`Story`](#story) | if set to true, the function is dynamically creating stories, returns a list of Story objects                                                     |
| `dynamicId`     | `string`                                                                                                                                                                               | [`Story`](#story) | if the story was created by a dynamic story (factory), this is the original story id. it is set internally and will be used to create a story URL |
| `component`     | <details><summary>`type`</summary><blockquote>`at`\*: **function** (<br />`index`\*: `number`<br />) => `T` \| `undefined`</blockquote></details>                                      | `StoryProps`      | id for component associated with the story                                                                                                        |
| `subcomponents` | `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)>                                                                                         | `StoryProps`      | multiple components option                                                                                                                        |
| `smartControls` | <details><summary>`SmartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details> | `StoryProps`      | "smart" controls options                                                                                                                          |
| `decorators`    | [`StoryRenderFn`](#storyrenderfn)\[]                                                                                                                                                   | `StoryProps`      | array of wrapper functions (decorators) to be called when rendering each individual story.                                                        |
| `plugins`       | `any`                                                                                                                                                                                  | `StoryProps`      | plugins configuration settings                                                                                                                    |
| `category`      | `string`                                                                                                                                                                               | `StoryProps`      | category string - can be used for cleanly separating stories/components                                                                           |
| `controls`      | [`ExampleControls`](#examplecontrols)                                                                                                                                                  |                   |                                                                                                                                                   |

## DocumentData

**`type`**

records of storyid/data pairs, to be associated with documents

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L159)_

**properties**

| Name        | Type                                                     |
| ----------- | -------------------------------------------------------- |
| _anonymous_ | \[`string`]: [`ExampleControls`](#examplecontrols)<br /> |

## StoryFactoryFn

**`function`**

dynamic story creator function type. returns an array of dynamically loaded stories

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L164)_

**parameters**

| Name      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `doc*`    | [`Document`](#document)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                     |
| `returns` | <details><summary>`type`</summary><blockquote>`name`\*: `string`<br />`storyName`: `string`<br />`id`: `string`<br />`rawId`: `string`<br />`doc`: `string`<br />`storyFn`: [`StoryRenderFn`](#storyrenderfn)<br />`description`: `string`<br />`arguments`: [`StoryArguments`](#storyarguments)<br />`loc`: [`CodeLocation`](#codelocation)<br />`source`: `string`<br />`subtitle`: `string`<br />`dynamic`: `boolean`<br />`dynamicId`: `string`<br /><details><summary>`component`</summary><blockquote>`at`\*: **function** (<br />`index`\*: `number`<br />) => `T` \| `undefined`</blockquote></details>`subcomponents`: `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)><br />`controls`: [`ComponentControls`](#componentcontrols)<br /><details><summary>`smartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details>`decorators`: [`StoryRenderFn`](#storyrenderfn)\[]<br />`plugins`: `any`<br />`category`: `string`</blockquote></details> | Story interface - usually extracted by the AST instrumenting loader |

## defDocType

**`union` = "story"**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L166)_

**values**

`"story"` \| `"blog"` \| `"page"` \| `"tags"` \| `"author"` \| `string`

## Document

**`type`**

A documentation file's metadata. For MDX files, fromtmatter is used to declare the document properties. For ESM (ES Modules) documentation files, the default export is used.

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L172)_

**properties**

| Name               | Type                                                                                                                                                                                   | Parent                                | Description                                                                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key*`             | \[`string`]: `any`<br />                                                                                                                                                               |                                       | custom document props                                                                                                                                                                        |
| `title*`           | `string`                                                                                                                                                                               |                                       | title of the document. If no 'route' parameter is specifified, the title is used to generate the document url. This is the only required field, to show the document in the menu structures. |
| `type`             | [`DocType`](#doctype)                                                                                                                                                                  |                                       | document type - blogs, pages, stories and even custom ones. By default - story                                                                                                               |
| `route`            | `string`                                                                                                                                                                               |                                       | if provided, will be used as the route for the page. if not provided, the title in lowercase will be used as the route                                                                       |
| `date`             | `string`                                                                                                                                                                               |                                       | optional date the document was created. If not assigned, the instrumentation process will use birthtime                                                                                      |
| `dateModified`     | `string`                                                                                                                                                                               |                                       | optional date the document was last modified. If not assigned, the instrumentation process will use mtime                                                                                    |
| `status`           | `"draft"` \| `"published"`                                                                                                                                                             |                                       | if set to draft, the document will be hidden in production builds.                                                                                                                           |
| `tags`             | `string`\[]                                                                                                                                                                            |                                       | comma-separated list of document tags, used for search and for SOE keywords unless keyswords are specified.                                                                                  |
| `keywords`         | `string`\[]                                                                                                                                                                            |                                       | comma-separated list of SEO keywords                                                                                                                                                         |
| `description`      | `string` \| `JSX.Element`                                                                                                                                                              |                                       | documentation file description                                                                                                                                                               |
| `image`            | `string`                                                                                                                                                                               |                                       | link to an image for the document, will be used for SEO                                                                                                                                      |
| `author`           | `string`                                                                                                                                                                               |                                       | document author                                                                                                                                                                              |
| `order`            | `number`                                                                                                                                                                               |                                       | document order, used to sort documents within the same parent                                                                                                                                |
| `menu`             | `string`                                                                                                                                                                               |                                       | to which static menu to attach the document compatibility with docz                                                                                                                          |
| `template`         | [`Example`](#example)                                                                                                                                                                  |                                       | es named export function, excapsulates a contained example code.                                                                                                                             |
| `stories`          | `string`\[]                                                                                                                                                                            |                                       | list of story ids contained in the document.                                                                                                                                                 |
| `source`           | `string`                                                                                                                                                                               |                                       | source code of the entire file of stories                                                                                                                                                    |
| `fileName`         | `string`                                                                                                                                                                               |                                       | file name of the file of stories                                                                                                                                                             |
| `package`          | `string`                                                                                                                                                                               |                                       | lookup into the global store of PackageInfo package.json                                                                                                                                     |
| `testFiles`        | `string`\[]                                                                                                                                                                            |                                       | optional specify which test files are asociated with the document                                                                                                                            |
| `testCoverage`     | `string`\[]                                                                                                                                                                            |                                       | optional specify which files to use for test coverage                                                                                                                                        |
| `testData`         | `string`                                                                                                                                                                               |                                       | optional test data file                                                                                                                                                                      |
| `renderFn`         | [`FrameworkRenderFn`](#frameworkrenderfn)                                                                                                                                              |                                       | render function by framework. By default 'react'                                                                                                                                             |
| `data`             | [`DocumentData`](#documentdata)                                                                                                                                                        |                                       | records of storyid/data pairs, to be associated with documents                                                                                                                               |
| `componentsLookup` | <details><summary>`type`</summary><blockquote>\[`string`]: `string`</blockquote></details>                                                                                             |                                       | lookup into the global store.components since multiple components of the same name can be used example: \['Button']: 'c:/myapp/Button.tsx'                                                   |
| `MDXPage`          | `any`                                                                                                                                                                                  |                                       | for MDX documents, this is an MDXContent function, to be rendered inside a MDXProvider                                                                                                       |
| `isMDXComponent`   | `boolean`                                                                                                                                                                              |                                       | custom prop set by mdxjs                                                                                                                                                                     |
| `parameters`       | `any`                                                                                                                                                                                  |                                       | storybook compatibility field                                                                                                                                                                |
| `component`        | <details><summary>`type`</summary><blockquote>`at`\*: **function** (<br />`index`\*: `number`<br />) => `T` \| `undefined`</blockquote></details>                                      | `StoryProps`                          | id for component associated with the story                                                                                                                                                   |
| `subcomponents`    | `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)>                                                                                         | `StoryProps`                          | multiple components option                                                                                                                                                                   |
| `controls`         | [`ComponentControls`](#componentcontrols)                                                                                                                                              | `StoryProps`                          | ComponentControls are defined in key value pairs the name of the property is the key and the value is the ComponentControl                                                                   |
| `smartControls`    | <details><summary>`SmartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details> | `StoryProps`                          | "smart" controls options                                                                                                                                                                     |
| `decorators`       | [`StoryRenderFn`](#storyrenderfn)\[]                                                                                                                                                   | `StoryProps`                          | array of wrapper functions (decorators) to be called when rendering each individual story.                                                                                                   |
| `plugins`          | `any`                                                                                                                                                                                  | `StoryProps`                          | plugins configuration settings                                                                                                                                                               |
| `category`         | `string`                                                                                                                                                                               | `StoryProps`                          | category string - can be used for cleanly separating stories/components                                                                                                                      |
| `navSidebar`       | `boolean`                                                                                                                                                                              | [`PageLayoutProps`](#pagelayoutprops) | whether to add navigation sidebar to the page                                                                                                                                                |
| `contextSidebar`   | `boolean`                                                                                                                                                                              | [`PageLayoutProps`](#pagelayoutprops) | whether to add conext sidebar to navigate the sections of the current document                                                                                                               |
| `fullPage`         | `boolean`                                                                                                                                                                              | [`PageLayoutProps`](#pagelayoutprops) | whether to take a fullpage theme option                                                                                                                                                      |

## dateToLocalString

**`react function`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L315)_

**parameters**

| Name      | Type     |
| --------- | -------- |
| `date`    | `Date`   |
| `returns` | `string` |

## DocInfo

**`type`**

short document information. used in search results, or index page

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L324)_

**properties**

| Name          | Type                      | Parent                  | Description                                                                                                                                                                                  |
| ------------- | ------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title*`      | `string`                  | [`Document`](#document) | title of the document. If no 'route' parameter is specifified, the title is used to generate the document url. This is the only required field, to show the document in the menu structures. |
| `image`       | `string`                  | [`Document`](#document) | link to an image for the document, will be used for SEO                                                                                                                                      |
| `description` | `string` \| `JSX.Element` | [`Document`](#document) | documentation file description                                                                                                                                                               |
| `tags`        | `string`\[]               | [`Document`](#document) | comma-separated list of document tags, used for search and for SOE keywords unless keyswords are specified.                                                                                  |
| `author`      | `string`                  | [`Document`](#document) | document author                                                                                                                                                                              |
| `type`        | [`DocType`](#doctype)     | [`Document`](#document) | document type - blogs, pages, stories and even custom ones. By default - story                                                                                                               |
| `date`        | `string`                  | [`Document`](#document) | optional date the document was created. If not assigned, the instrumentation process will use birthtime                                                                                      |
| `link*`       | `string`                  |                         | following fields are useful for highlighting search results                                                                                                                                  |
| `authorLink`  | `string`                  |                         |                                                                                                                                                                                              |
| `rawTags`     | `string`\[]               |                         |                                                                                                                                                                                              |
| `rawType`     | `string`                  |                         |                                                                                                                                                                                              |

## Documents

**`type`**

list of story files, or groups

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L340)_

**properties**

| Name        | Type                                       |
| ----------- | ------------------------------------------ |
| _anonymous_ | \[`string`]: [`Document`](#document)<br /> |

## Pages

**`array`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L342)_

**properties**

| Name          | Type                    | Description                                                                                                                                                                   |
| ------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous\*_ | [`Document`](#document) | A documentation file's metadata. For MDX files, fromtmatter is used to declare the document properties. For ESM (ES Modules) documentation files, the default export is used. |

## Stories

**`type`**

list of stories

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L347)_

**properties**

| Name        | Type                                 |
| ----------- | ------------------------------------ |
| _anonymous_ | \[`string`]: [`Story`](#story)<br /> |

## Packages

**`type`**

list of repositories

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L352)_

**properties**

| Name        | Type                                             |
| ----------- | ------------------------------------------------ |
| _anonymous_ | \[`string`]: [`PackageInfo`](#packageinfo)<br /> |

## StoreObserver

**`function`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L354)_

**parameters**

| Name    | Type              | Description                                                         |
| ------- | ----------------- | ------------------------------------------------------------------- |
| `story` | [`Story`](#story) | Story interface - usually extracted by the AST instrumenting loader |

## CURRENT_STORY

**`string` = "."**

Shorthand id to denote the current story

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L359)_

## Store

**`interface`**

Store of stories information in memory after the loader is applied

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L363)_

**properties**

| Name              | Type                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `error`           | `string`                                                                                                                                                                                                                                                                                                                                                                                         | build-time error string                                                                         |
| `config*`         | [`RunConfiguration`](#runconfiguration)                                                                                                                                                                                                                                                                                                                                                          | global configuration for config file                                                            |
| `docs*`           | [`Documents`](#documents)                                                                                                                                                                                                                                                                                                                                                                        | list of documents (pages)                                                                       |
| `stories*`        | [`Stories`](#stories)                                                                                                                                                                                                                                                                                                                                                                            | list of stories                                                                                 |
| `components*`     | [`Components`](#components)                                                                                                                                                                                                                                                                                                                                                                      | list of components used in stories and documents                                                |
| `packages*`       | [`Packages`](#packages)                                                                                                                                                                                                                                                                                                                                                                          | list of package.json files and their data used by the components and the stories of the project |
| `addObserver*`    | **function** (<br />`observer`\*: [`StoreObserver`](#storeobserver)<br />) => `void`                                                                                                                                                                                                                                                                                                             | storybook integration notifiers                                                                 |
| `removeObserver*` | **function** (<br />`observer`\*: [`StoreObserver`](#storeobserver)<br />) => `void`                                                                                                                                                                                                                                                                                                             |                                                                                                 |
| `updateStory*`    | **function** (<br />`story`\*: [`Story`](#story)<br />) => `void`                                                                                                                                                                                                                                                                                                                                | update store, for example controls or state                                                     |
| `search`          | **function** (<br />`store`\*: [`Store`](#store)<br />) => <details><summary>`SearchResult`</summary><blockquote>`items`\*: `SearchItem`\[]<br />`searchFn`\*: **function** (<br />`search`\*: `string`<br />) => `void`<br /><details><summary>`provider`</summary><blockquote>`logo`\*: ReactNode<br />`url`\*: `string`<br />`name`\*: `string`</blockquote></details></blockquote></details> |                                                                                                 |

## getDefaultStore

**`function`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L429)_

**parameters**

| Name      | Type              | Description                                                        |
| --------- | ----------------- | ------------------------------------------------------------------ |
| `returns` | [`Store`](#store) | Store of stories information in memory after the loader is applied |

## assignProps

**`react function`**

_defined in [@component-controls/core/core/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L431)_

**parameters**

| Name          | Type                                                   |
| ------------- | ------------------------------------------------------ |
| `obj*`        | [`Document`](#document)&lt;> \| [`Story`](#story)&lt;> |
| _anonymous\*_ | [`Document`](#document)&lt;> \| [`Story`](#story)&lt;> |
| `returns`     | [`Document`](#document)&lt;> \| [`Story`](#story)&lt;> |

## ComponentControlData

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L118)_

**properties**

| Name      | Type                                                                                    | Description                                                                                                                    |
| --------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `name*`   | `string`                                                                                | 'name' for generating random data from faker.js  usually comprised of two parts, separated by a dot  example 'internet.avatar' |
| `options` | <details><summary>`type`</summary><blockquote>\[`string`]: `any`</blockquote></details> | options to be passed to the random data generators example {  min: 10, max: 20 }                                               |

## ComponentControlBase

**`interface`**

Base inteface for creating control types All new property typs should extend this interface and support

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L140)_

**properties**

| Name           | Type                                                                 | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type*`        | [`ControlTypes`](#controltypes)                                      | Control field types examples are provided for the different types:                                                                                     |
| `label`        | `string`                                                             | label to display next to the field editor by default uses the property name itself                                                                     |
| `value`        | `T`                                                                  | a default value for the property                                                                                                                       |
| `defaultValue` | `T`                                                                  | default value is automatically set at run-time, from the value                                                                                         |
| `required`     | `boolean`                                                            | visually display the control property as required                                                                                                      |
| `description`  | `string`                                                             | full text property description. can use markdown.                                                                                                      |
| `hidden`       | `boolean`                                                            | hide the property editor for this property will only use the value                                                                                     |
| `groupId`      | `string`                                                             | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `order`        | `number`                                                             | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |

## ComponentControlText

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L198)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default  | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type*`        | `TEXT`                                                               | [`ControlTypes`](#controltypes)                 | `"text"` | userName: {   type: ControlTypes.TEXT,   label: 'Name',   value: 'Storyteller', },                                                                     |
| `placeholder`  | `string`                                                             |                                                 |          | placeholder for empty properties either undefined initial value or user clears the field                                                               |
| `rows`         | `number`                                                             |                                                 |          | number of rows for a TextArea field for longer text by default, only 1 row = means a Input field \> 1 rows = an area field                             |
| `escapeValue`  | `boolean`                                                            |                                                 |          | allows to receive escaped string values to help prevent XSS attacks by default - false                                                                 |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | label to display next to the field editor by default uses the property name itself                                                                     |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |          | a default value for the property                                                                                                                       |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |          | default value is automatically set at run-time, from the value                                                                                         |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |          | visually display the control property as required                                                                                                      |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | full text property description. can use markdown.                                                                                                      |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |          | hide the property editor for this property will only use the value                                                                                     |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |          | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |

## ComponentControlBoolean

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L223)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default     | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type*`        | `BOOLEAN`                                                            | [`ControlTypes`](#controltypes)                 | `"boolean"` | nice: {  type: ControlTypes.BOOLEAN,  label: 'Nice',  value: true, },                                                                                  |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |             | label to display next to the field editor by default uses the property name itself                                                                     |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |             | a default value for the property                                                                                                                       |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |             | default value is automatically set at run-time, from the value                                                                                         |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |             | visually display the control property as required                                                                                                      |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |             | full text property description. can use markdown.                                                                                                      |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |             | hide the property editor for this property will only use the value                                                                                     |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |             | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |             | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |             | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |

## ColorPickerKind

**`union`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L227)_

**values**

`"hex"` \| `"rgb"` \| `"rgba"` \| `"hsl"` \| `"hsla"`

## ComponentControlColor

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L229)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default   | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type*`        | `COLOR`                                                              | [`ControlTypes`](#controltypes)                 | `"color"` | color: {   type: ControlTypes.COLOR,   value: '#000000', },                                                                                            |
| `kind`         | [`ColorPickerKind`](#colorpickerkind)                                |                                                 |           | format to save the color as a string                                                                                                                   |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | label to display next to the field editor by default uses the property name itself                                                                     |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |           | a default value for the property                                                                                                                       |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |           | default value is automatically set at run-time, from the value                                                                                         |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |           | visually display the control property as required                                                                                                      |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | full text property description. can use markdown.                                                                                                      |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |           | hide the property editor for this property will only use the value                                                                                     |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |           | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |

## ComponentControlDate

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L237)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default  | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type*`        | `DATE`                                                               | [`ControlTypes`](#controltypes)                 | `"date"` | birthday: {  type: ControlTypes.DATE,  label: 'Birthday',  value: new Date(), },                                                                       |
| `datePicker`   | `boolean`                                                            |                                                 |          | whether to display a date picker (calendar). default: true                                                                                             |
| `timePicker`   | `boolean`                                                            |                                                 |          | whether to display a time picker (calendar). default: true                                                                                             |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | label to display next to the field editor by default uses the property name itself                                                                     |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |          | a default value for the property                                                                                                                       |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |          | default value is automatically set at run-time, from the value                                                                                         |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |          | visually display the control property as required                                                                                                      |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | full text property description. can use markdown.                                                                                                      |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |          | hide the property editor for this property will only use the value                                                                                     |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |          | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |          | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |

## ComponentControlFiles

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L253)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type*`        | `FILES`                                                              | [`ControlTypes`](#controltypes)                 | `"files"` | images: {   type: ControlTypes.FILES,   label: 'Happy Picture',   accept: 'image/\*',   value: \[     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',   ], }, |
| `accept`       | `string`                                                             |                                                 |           | type of files to accept user to open ex 'image/\*',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | label to display next to the field editor by default uses the property name itself                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |           | a default value for the property                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |           | default value is automatically set at run-time, from the value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |           | visually display the control property as required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | full text property description. can use markdown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |           | hide the property editor for this property will only use the value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | allows grouping of the properties in a property editor for example different editor tabs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |           | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized                                                                                                                                                                                                                                                                                                                                                                                                                  |

## ComponentControlArray

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L262)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default   | Description                                                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type*`        | `ARRAY`                                                              | [`ControlTypes`](#controltypes)                 | `"array"` | arrayItems: {   type: ControlTypes.ARRAY,   label: 'Items',   rowType: {     name: { type: ControlTypes.TEXT },   },   value: \[{ name: 'Laptop' }, { name: 'Book' }, { name: 'Whiskey' }], }, |
| `rowType*`     | [`ComponentControls`](#componentcontrols)                            |                                                 |           | type of the items in each row of the array                                                                                                                                                     |
| `editLabel`    | `string`                                                             |                                                 |           | the label for the editor button                                                                                                                                                                |
| `inline`       | `boolean`                                                            |                                                 |           | if true, the editor will be rendered inline instead of a popup                                                                                                                                 |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | label to display next to the field editor by default uses the property name itself                                                                                                             |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |           | a default value for the property                                                                                                                                                               |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |           | default value is automatically set at run-time, from the value                                                                                                                                 |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |           | visually display the control property as required                                                                                                                                              |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | full text property description. can use markdown.                                                                                                                                              |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |           | hide the property editor for this property will only use the value                                                                                                                             |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | allows grouping of the properties in a property editor for example different editor tabs                                                                                                       |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |           | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)                                                       |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |           | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized                                         |

## ComponentControlObject

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L279)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default    | Description                                                                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type*`        | `OBJECT`                                                             | [`ControlTypes`](#controltypes)                 | `"object"` | style: {   type: ControlTypes.OBJECT,   label: 'Styles',   value: {     // do not randomize the border style     border: { type: ControlTypes.TEXT, value: '2px dashed silver', data: null },     borderRadius: { type: ControlTypes.NUMBER, value: 10 },     padding: { type: ControlTypes.NUMBER, value: 10 },   }, } |
| `editLabel`    | `string`                                                             |                                                 |            | the label for the editor button                                                                                                                                                                                                                                                                                         |
| `inline`       | `boolean`                                                            |                                                 |            | if true, the editor will be rendered inline instead of a popup                                                                                                                                                                                                                                                          |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | label to display next to the field editor by default uses the property name itself                                                                                                                                                                                                                                      |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |            | a default value for the property                                                                                                                                                                                                                                                                                        |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |            | default value is automatically set at run-time, from the value                                                                                                                                                                                                                                                          |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |            | visually display the control property as required                                                                                                                                                                                                                                                                       |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | full text property description. can use markdown.                                                                                                                                                                                                                                                                       |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |            | hide the property editor for this property will only use the value                                                                                                                                                                                                                                                      |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | allows grouping of the properties in a property editor for example different editor tabs                                                                                                                                                                                                                                |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)                                                                                                                                                                                |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |            | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized                                                                                                                                                                  |

## ComponentControlButton

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L292)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                                               | Parent                                          | Default    | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type*`        | `BUTTON`                                                                                           | [`ControlTypes`](#controltypes)                 | `"button"` | button: {  type: ControlTypes.BUTTON,   onClick: () => {    ... code to modify some variables  } },                                                    |
| `onClick`      | **function** (<br />`prop`\*: [`ComponentControlButton`](#componentcontrolbutton)<br />) => `void` |                                                 |            | for button type fields, an onClick handler                                                                                                             |
| `label`        | `string`                                                                                           | [`ComponentControlBase`](#componentcontrolbase) |            | label to display next to the field editor by default uses the property name itself                                                                     |
| `value`        | `T`                                                                                                | [`ComponentControlBase`](#componentcontrolbase) |            | a default value for the property                                                                                                                       |
| `defaultValue` | `T`                                                                                                | [`ComponentControlBase`](#componentcontrolbase) |            | default value is automatically set at run-time, from the value                                                                                         |
| `required`     | `boolean`                                                                                          | [`ComponentControlBase`](#componentcontrolbase) |            | visually display the control property as required                                                                                                      |
| `description`  | `string`                                                                                           | [`ComponentControlBase`](#componentcontrolbase) |            | full text property description. can use markdown.                                                                                                      |
| `hidden`       | `boolean`                                                                                          | [`ComponentControlBase`](#componentcontrolbase) |            | hide the property editor for this property will only use the value                                                                                     |
| `groupId`      | `string`                                                                                           | [`ComponentControlBase`](#componentcontrolbase) |            | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `order`        | `number`                                                                                           | [`ComponentControlBase`](#componentcontrolbase) |            | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false`                               | [`ComponentControlBase`](#componentcontrolbase) |            | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |

## OptionsValueType

**`union`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L302)_

**values**

`T` \| `number` \| `string`\[] | `number`\[] | `type`

## OptionsListType

**`union`**

value/label pairs or array of OptionsValueType

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L312)_

**values**

`type` \| [`OptionsValueType`](#optionsvaluetype)\[]

## ComponentControlOptions

**`interface`**

list of options can be 1. key-value pair object: in format { label: value } 2. array of strings 3. array of key-value pair objects

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L323)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                                             | Parent                                          | Default     | Description                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type*`        | `OPTIONS`                                                                                        | [`ControlTypes`](#controltypes)                 | `"options"` | fruit: {   type: ControlTypes.OPTIONS,   label: 'Fruit',   value: 'apple',   options: {     Apple: 'apple',     Banana: 'banana',     Cherry: 'cherry',   }, }, |
| `options*`     | [`OptionsListType`](#optionslisttype)                                                            |                                                 |             | value/label pairs or array of OptionsValueType                                                                                                                  |
| `display`      | `"select"` \| `"multi-select"` \| `"radio"` \| `"inline-radio"` \| `"check"` \| `"inline-check"` |                                                 |             | how to render selecting the options: default is 'select'                                                                                                        |
| `label`        | `string`                                                                                         | [`ComponentControlBase`](#componentcontrolbase) |             | label to display next to the field editor by default uses the property name itself                                                                              |
| `value`        | `T`                                                                                              | [`ComponentControlBase`](#componentcontrolbase) |             | a default value for the property                                                                                                                                |
| `defaultValue` | `T`                                                                                              | [`ComponentControlBase`](#componentcontrolbase) |             | default value is automatically set at run-time, from the value                                                                                                  |
| `required`     | `boolean`                                                                                        | [`ComponentControlBase`](#componentcontrolbase) |             | visually display the control property as required                                                                                                               |
| `description`  | `string`                                                                                         | [`ComponentControlBase`](#componentcontrolbase) |             | full text property description. can use markdown.                                                                                                               |
| `hidden`       | `boolean`                                                                                        | [`ComponentControlBase`](#componentcontrolbase) |             | hide the property editor for this property will only use the value                                                                                              |
| `groupId`      | `string`                                                                                         | [`ComponentControlBase`](#componentcontrolbase) |             | allows grouping of the properties in a property editor for example different editor tabs                                                                        |
| `order`        | `number`                                                                                         | [`ComponentControlBase`](#componentcontrolbase) |             | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)                        |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false`                             | [`ComponentControlBase`](#componentcontrolbase) |             | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized          |

## ComponentControlNumber

**`interface`**

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L342)_

**extends**

[`ComponentControlBase`](#componentcontrolbase)

**properties**

| Name           | Type                                                                 | Parent                                          | Default    | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type*`        | `NUMBER`                                                             | [`ControlTypes`](#controltypes)                 | `"number"` | age: {  type: ControlTypes.NUMBER,  label: 'Age',  value: 78,  range: true,  min: 0,  max: 90,  step: 5, },                                            |
| `range`        | `boolean`                                                            |                                                 |            | for numeric type fieldsif true, will display a range type slider editor                                                                                |
| `min`          | `number`                                                             |                                                 |            | minimum allowed value for numeric property                                                                                                             |
| `max`          | `number`                                                             |                                                 |            | maximum allowed value for numeric property                                                                                                             |
| `step`         | `number`                                                             |                                                 |            | stepper for numeric editor /i nc/dec value                                                                                                             |
| `label`        | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | label to display next to the field editor by default uses the property name itself                                                                     |
| `value`        | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |            | a default value for the property                                                                                                                       |
| `defaultValue` | `T`                                                                  | [`ComponentControlBase`](#componentcontrolbase) |            | default value is automatically set at run-time, from the value                                                                                         |
| `required`     | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |            | visually display the control property as required                                                                                                      |
| `description`  | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | full text property description. can use markdown.                                                                                                      |
| `hidden`       | `boolean`                                                            | [`ComponentControlBase`](#componentcontrolbase) |            | hide the property editor for this property will only use the value                                                                                     |
| `groupId`      | `string`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `order`        | `number`                                                             | [`ComponentControlBase`](#componentcontrolbase) |            | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `data`         | [`ComponentControlData`](#componentcontroldata) \| `null` \| `false` | [`ComponentControlBase`](#componentcontrolbase) |            | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |

## ComponentControl

**`union`**

ComponentControl is a either an object of property settings or a shortcut can be used:  properties: {   text: 'Hello', },

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L378)_

**values**

[`ComponentControlText`](#componentcontroltext) \| [`ComponentControlBoolean`](#componentcontrolboolean) \| [`ComponentControlColor`](#componentcontrolcolor) \| [`ComponentControlDate`](#componentcontroldate) \| [`ComponentControlObject`](#componentcontrolobject)&lt;> | [`ComponentControlButton`](#componentcontrolbutton)&lt;> | [`ComponentControlOptions`](#componentcontroloptions)&lt;> | [`ComponentControlNumber`](#componentcontrolnumber) \| [`ComponentControlArray`](#componentcontrolarray) \| [`ComponentControlFiles`](#componentcontrolfiles)

## ComponentControls

**`interface`**

ComponentControls are defined in key value pairs the name of the property is the key and the value is the ComponentControl

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L395)_

**properties**

| Name    | Type                                                       |
| ------- | ---------------------------------------------------------- |
| `name*` | \[`string`]: [`ComponentControl`](#componentcontrol)<br /> |

## ControlTypes

**`enum`**

Control field types examples are provided for the different types:

_defined in [@component-controls/core/core/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L6)_

**properties**

| Name       | Type     | Value       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TEXT*`    | `string` | `"text"`    | userName: {   type: ControlTypes.TEXT,   label: 'Name',   value: 'Storyteller', },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `NUMBER*`  | `string` | `"number"`  | age: {  type: ControlTypes.NUMBER,  label: 'Age',  value: 78,  range: true,  min: 0,  max: 90,  step: 5, },                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `BOOLEAN*` | `string` | `"boolean"` | nice: {  type: ControlTypes.BOOLEAN,  label: 'Nice',  value: true, },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `OPTIONS*` | `string` | `"options"` | fruit: {   type: ControlTypes.OPTIONS,   label: 'Fruit',   value: 'apple',   options: {     Apple: 'apple',     Banana: 'banana',     Cherry: 'cherry',   }, },                                                                                                                                                                                                                                                                                                                                                                                                         |
| `DATE*`    | `string` | `"date"`    | birthday: {  type: ControlTypes.DATE,  label: 'Birthday',  value: new Date(), },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `COLOR*`   | `string` | `"color"`   | color: {   type: ControlTypes.COLOR,   value: '#000000', },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `BUTTON*`  | `string` | `"button"`  | button: {  type: ControlTypes.BUTTON,   onClick: () => {    ... code to modify some variables  } },                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `OBJECT*`  | `string` | `"object"`  | style: {   type: ControlTypes.OBJECT,   label: 'Styles',   value: {     // do not randomize the border style     border: { type: ControlTypes.TEXT, value: '2px dashed silver', data: null },     borderRadius: { type: ControlTypes.NUMBER, value: 10 },     padding: { type: ControlTypes.NUMBER, value: 10 },   }, }                                                                                                                                                                                                                                                 |
| `ARRAY*`   | `string` | `"array"`   | arrayItems: {   type: ControlTypes.ARRAY,   label: 'Items',   rowType: {     name: { type: ControlTypes.TEXT },   },   value: \[{ name: 'Laptop' }, { name: 'Book' }, { name: 'Whiskey' }], },                                                                                                                                                                                                                                                                                                                                                                          |
| `FILES*`   | `string` | `"files"`   | images: {   type: ControlTypes.FILES,   label: 'Happy Picture',   accept: 'image/\*',   value: \[     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',   ], }, |

## TypeValue

**`union`**

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L6)_

**values**

`"any"` \| `"boolean"` \| `"number"` \| `"string"` \| `"array"` \| `"object"` \| `"enum"` \| `"union"` \| `"literal"` \| `"symbol"` \| `"function"` \| `string`

## TypeInformation

**`interface`**

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L20)_

**properties**

| Name        | Type                                              | Description                                                                   |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name*`     | [`TypeValue`](#typevalue)                         |                                                                               |
| `value`     | [`TypeInformation`](#typeinformation)\[] \| `any` | type value elements of enum, array, fields of object return value of function |
| `raw`       | `string`                                          | raw type code                                                                 |
| `arguments` | [`TypeInformation`](#typeinformation)\[] \| `any` | argument types of function                                                    |
| `required`  | `boolean`                                         | is the property required                                                      |

## PropType

**`interface`**

docgen generated property types mapped to common types to be consumed by component-controls check props-info packages for implementations

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L50)_

**properties**

| Name           | Type                                  | Description                                      |
| -------------- | ------------------------------------- | ------------------------------------------------ |
| `defaultValue` | `any`                                 | default value for the property                   |
| `type*`        | [`TypeInformation`](#typeinformation) | propertty type                                   |
| `description`  | `string`                              | description of the property                      |
| `parentName`   | `string`                              | name of the parent/inherited property            |
| `deprecated`   | `string`                              | if the property is deprecated, contains a string |

## PropTypes

**`interface`**

list of properties of the component

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L77)_

**properties**

| Name   | Type                                       |
| ------ | ------------------------------------------ |
| `key*` | \[`string`]: [`PropType`](#proptype)<br /> |

## ComponentInfo

**`interface`**

DocGen type onfo generated for a compoennt

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L84)_

**properties**

| Name           | Type                      | Description           |
| -------------- | ------------------------- | --------------------- |
| `displayName*` | `string`                  | name of the component |
| `description`  | `string`                  | optional description  |
| `props*`       | [`PropTypes`](#proptypes) | component props       |

## JSXNode

**`type`**

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L101)_

**properties**

| Name            | Type                  | Parent                      | Description                                                                       |
| --------------- | --------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| `name*`         | `string`              | [`ImportType`](#importtype) | component name                                                                    |
| `importedName*` | `string`              | [`ImportType`](#importtype) | importedName - the original named import that was aliased                         |
| `from*`         | `string`              | [`ImportType`](#importtype) | imported from                                                                     |
| `typesFile`     | `string`              | [`ImportType`](#importtype) | imported from alias file name ie '/component-controls/core/store/dist/index.d.ts' |
| `componentKey`  | `string`              | [`ImportType`](#importtype) | key into components table                                                         |
| `attributes`    | `string`\[]           |                             |                                                                                   |
| `children`      | [`JSXTree`](#jsxtree) |                             | jsx tree of elements for the component                                            |

## JSXTree

**`array`**

jsx tree of elements for the component

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L108)_

**properties**

| Name          | Type                  |
| ------------- | --------------------- |
| _anonymous\*_ | [`JSXNode`](#jsxnode) |

## Component

**`interface`**

component specified for stories or story files

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L113)_

**properties**

| Name                   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name*`                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | name of the component as used in the fiel                                                                                                                                                                                                  |
| `importedName`         | `"default"` \| `"namespace"` \| `string`                                                                                                                                                                                                                                                                                                                                                                                                                                 | imported name ex: \- default import import Button from 'buttons'; \- namespace import import \* as Button from 'buttons'; \- named import import { Button } from 'buttons'; \- named alias import import { Btn as Button } from 'buttons'; |
| `from`                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | imported from                                                                                                                                                                                                                              |
| `request`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | resolved import request                                                                                                                                                                                                                    |
| `fileName`             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | file name with extension                                                                                                                                                                                                                   |
| `propsInfoFile`        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | file containing the component's props info sometimes different from the component source file for example external libraries that have a separate index.d.ts file                                                                          |
| `loc`                  | [`CodeLocation`](#codelocation)                                                                                                                                                                                                                                                                                                                                                                                                                                          | location in the source code of a story or part of it ie. arguments, usage of arguments                                                                                                                                                     |
| `package`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | lookup into the global store of PackageInfo package.json                                                                                                                                                                                   |
| `source`               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | the source code of the component file, extracted by the AST instrumenting loaders. Can also be overriden manually.                                                                                                                         |
| `info`                 | [`ComponentInfo`](#componentinfo)                                                                                                                                                                                                                                                                                                                                                                                                                                        | DocGen type onfo generated for a compoennt                                                                                                                                                                                                 |
| `externalDependencies` | [`Imports`](#imports)                                                                                                                                                                                                                                                                                                                                                                                                                                                    | list of component's file imports from external libraries                                                                                                                                                                                   |
| `localDependencies`    | [`Imports`](#imports)                                                                                                                                                                                                                                                                                                                                                                                                                                                    | list of component's file imports from local (imported via relative import) files                                                                                                                                                           |
| `jsx`                  | [`JSXTree`](#jsxtree)                                                                                                                                                                                                                                                                                                                                                                                                                                                    | jsx tree of elements for the component                                                                                                                                                                                                     |
| `fileInfo`             | <details><summary>`FileInfo`</summary><blockquote>`dateCreated`: `string`<br />`dateModified`: `string`<br />`commits`: `Commit`\[]<br /><details><summary>`sloc`</summary><blockquote>`block`\*: `number`<br />`blockEmpty`\*: `number`<br />`comment`\*: `number`<br />`empty`\*: `number`<br />`mixed`\*: `number`<br />`single`\*: `number`<br />`source`\*: `number`<br />`todo`\*: `number`<br />`total`\*: `number`</blockquote></details></blockquote></details> | source file info                                                                                                                                                                                                                           |
| `jest`                 | <details><summary>`JestTests`</summary><blockquote>`results`\*: `JestResult`\[]<br />`coverage`\*: `Record`&lt;`string`, `Record`&lt;`CoverageKind`, `CoverageMetrics`>></blockquote></details>                                                                                                                                                                                                                                                                          | jest test and coverage results for the component                                                                                                                                                                                           |

## Components

**`type`**

list of components used in store

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L197)_

**properties**

| Name        | Type                                         |
| ----------- | -------------------------------------------- |
| _anonymous_ | \[`string`]: [`Component`](#component)<br /> |

## getComponentName

**`react function`**

given a component, return its name

_defined in [@component-controls/core/core/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L203)_

**parameters**

| Name         | Type                    | Description                                                                               |
| ------------ | ----------------------- | ----------------------------------------------------------------------------------------- |
| `component*` | `any`                   | a string component name, or a component class, with a name or displayName static property |
| `returns`    | `string` \| `undefined` |                                                                                           |

## PropsInfoExtractorFunction

**`function`**

callback function to extract props info table  - ie docgen type libraries used to extract displayName, and props tables for a component

_defined in [@component-controls/core/core/core/src/propsInfo.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/propsInfo.ts#L13)_

**parameters**

| Name            | Type                                                          | Description                                                                                                                              |
| --------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fileName*`     | `string`                                                      | full name and path of the component path react-docgen needs it to extract babel configurations.                                          |
| `componentName` | `string`                                                      | optional component name react-docgen-typescript supports multiple exports for a file react-docgne does not use it.                       |
| `source`        | `string`                                                      | optional soure, saves time if its already loaded react-docgen accepts source as input parameter react-docgen-typescript does not use it. |
| `returns`       | `Promise` \| [`ComponentInfo`](#componentinfo) \| `undefined` | async or normal function that loads ComponentInfo props info.                                                                            |

## ImportType

**`interface`**

_defined in [@component-controls/follow-imports/misc/follow-imports/dist/consts.d.ts](https://github.com/ccontrols/component-controls/tree/master/misc/follow-imports/dist/consts.d.ts#L28)_

**properties**

| Name            | Type     | Description                                                                       |
| --------------- | -------- | --------------------------------------------------------------------------------- |
| `name*`         | `string` | component name                                                                    |
| `importedName*` | `string` | importedName - the original named import that was aliased                         |
| `from*`         | `string` | imported from                                                                     |
| `typesFile`     | `string` | imported from alias file name ie '/component-controls/core/store/dist/index.d.ts' |
| `componentKey`  | `string` | key into components table                                                         |

## ImportTypes

**`interface`**

_defined in [@component-controls/follow-imports/misc/follow-imports/dist/consts.d.ts](https://github.com/ccontrols/component-controls/tree/master/misc/follow-imports/dist/consts.d.ts#L50)_

**properties**

| Name   | Type                                           |
| ------ | ---------------------------------------------- |
| `key*` | \[`string`]: [`ImportType`](#importtype)<br /> |

## CodePosition

**`type`**

position in the source file of a token usually taken from AST traverse loaders

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L11)_

**properties**

| Name      | Type     | Parent  |
| --------- | -------- | ------- |
| `line*`   | `number` | `start` |
| `column*` | `number` | `start` |

## CodeLocation

**`interface`**

location in the source code of a story or part of it ie. arguments, usage of arguments

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L17)_

**properties**

| Name     | Type                                                                                                              | Parent           |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| `start*` | <details><summary>`type`</summary><blockquote>`line`\*: `number`<br />`column`\*: `number`</blockquote></details> | `SourceLocation` |
| `end*`   | <details><summary>`type`</summary><blockquote>`line`\*: `number`<br />`column`\*: `number`</blockquote></details> | `SourceLocation` |

## PackageRepository

**`interface`**

repository information from package.json

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L22)_

**properties**

| Name     | Type     | Description                             |
| -------- | -------- | --------------------------------------- |
| `browse` | `string` | link for browsing the file              |
| `docs`   | `string` | link for project readme                 |
| `issues` | `string` | link for filing issues with the project |

## PackageDependency

**`string`**

dependecy string - the package version number

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L42)_

## PackageDependencies

**`interface`**

list of dependencies - package name as the key and the version as the value

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L47)_

**properties**

| Name    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| `name*` | \[`string`]: [`PackageDependency`](#packagedependency)<br /> |

## PackageInfo

**`interface`**

package.json information about the repository of the stories and components

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L55)_

**properties**

| Name               | Type                                          | Description                                                                   |
| ------------------ | --------------------------------------------- | ----------------------------------------------------------------------------- |
| `fileHash*`        | `string`                                      | file name hash of package.json                                                |
| `name`             | `string`                                      | package name                                                                  |
| `version`          | `string`                                      | package version                                                               |
| `dependencies`     | [`PackageDependencies`](#packagedependencies) | list of dependencies - package name as the key and the version as the value   |
| `devDependencies`  | [`PackageDependencies`](#packagedependencies) | list of dependencies - package name as the key and the version as the value   |
| `peerDependencies` | [`PackageDependencies`](#packagedependencies) | list of dependencies - package name as the key and the version as the value   |
| `privateNpm`       | `boolean`                                     | if false, the package is not published to npm                                 |
| `repository*`      | [`PackageRepository`](#packagerepository)     | repository information extracted from the "repository" field in package.json. |

## StoryRenderFn

**`function`**

story render function

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L101)_

**parameters**

| Name            | Type                                                                                    | Description                                   |
| --------------- | --------------------------------------------------------------------------------------- | --------------------------------------------- |
| `controlValues` | <details><summary>`type`</summary><blockquote>\[`string`]: `any`</blockquote></details> | props values passed by controls               |
| `context`       | `any`                                                                                   | context parameters passed as second parameter |
| `returns`       | `Promise` \| `any`                                                                      |                                               |

## Imports

**`interface`**

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L106)_

**properties**

| Name   | Type                                                                     |
| ------ | ------------------------------------------------------------------------ |
| `key*` | \[`string`]: (`Omit`&lt;[`ImportType`](#importtype), `"from"`>)\[]<br /> |

## defaultExport

**`string` = "default"**

default export keyword

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L113)_

## ActionItem

**`interface`**

an item in the ActionBar component

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L118)_

**properties**

| Name         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | optional id, used if title is not set                                                                                                                              |
| `node*`      | `ReactChild` \| `ReactFragment` \| `ReactPortal` \| `boolean` \| `null` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | title - if a string, will use the built-in components, else can prvide custom React component                                                                      |
| `href`       | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | if the title is a string and href is set will use a default  `<Link />`  component                                                                                 |
| `onClick`    | **function** (<br /><details><summary>`e`\*</summary><blockquote>`altKey`\*: `boolean`<br />`button`\*: `number`<br />`buttons`\*: `number`<br />`clientX`\*: `number`<br />`clientY`\*: `number`<br />`ctrlKey`\*: `boolean`<br />`getModifierState`\*: **function** (<br />`key`\*: `string`<br />) => `boolean`<br />`metaKey`\*: `boolean`<br />`movementX`\*: `number`<br />`movementY`\*: `number`<br />`pageX`\*: `number`<br />`pageY`\*: `number`<br />`relatedTarget`\*: `EventTarget` \| `null`<br />`screenX`\*: `number`<br />`screenY`\*: `number`<br />`shiftKey`\*: `boolean`<br />`detail`\*: `number`<br /><details><summary>`view`\*</summary><blockquote>`styleMedia`\*: StyleMedia<br />`document`\*: [`Document`](#document)</blockquote></details>`nativeEvent`\*: `MouseEvent`<br />`currentTarget`\*: <br />`target`\*: `EventTarget`<br />`bubbles`\*: `boolean`<br />`cancelable`\*: `boolean`<br />`defaultPrevented`\*: `boolean`<br />`eventPhase`\*: `number`<br />`isTrusted`\*: `boolean`<br />`preventDefault`\*: preventDefault<br />`isDefaultPrevented`\*: isDefaultPrevented<br />`stopPropagation`\*: stopPropagation<br />`isPropagationStopped`\*: isPropagationStopped<br />`persist`\*: persist<br />`timeStamp`\*: `number`<br />`type`\*: `string`</blockquote></details>) => `void` \| `boolean` | if the title is a string and href is not set, onClick will be used on a  `<Button />`  component                                                                   |
| `hidden`     | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | hide an action item                                                                                                                                                |
| `order`      | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | optional order, if not provided will use the natural order of items from right to left                                                                             |
| `group`      | `string` \| `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | optional group. ActionItems in the same group will not be separated by horizonal margin                                                                            |
| `aria-label` | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | optional label visible to screen readers for aria accessibility.                                                                                                   |
| `panel`      | `ReactChild` \| `ReactFragment` \| `ReactPortal` \| `boolean` \| `null` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | panel for Tab-enabled UI, where an action item can open up a panel with tabs in this case, the onClick function can return true/false whether to open up the panel |

## ActionItems

**`array`**

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L164)_

**properties**

| Name          | Type                        | Description                        |
| ------------- | --------------------------- | ---------------------------------- |
| _anonymous\*_ | [`ActionItem`](#actionitem) | an item in the ActionBar component |

## AsyncFnReturn

**`type`**

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L166)_

**properties**

| Name       | Type                                                |
| ---------- | --------------------------------------------------- |
| `execute*` | **function** (<br />) => `Promise`&lt;`void`>       |
| `status*`  | `"idle"` \| `"pending"` \| `"success"` \| `"error"` |
| `value*`   | `T` \| `null`                                       |
| `error*`   | `E` \| `null`                                       |

## useAsync

**`function`**

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L173)_

**parameters**

| Name             | Type                                       | Default |
| ---------------- | ------------------------------------------ | ------- |
| `asyncFunction*` | **function** (<br />) => `Promise`&lt;`T`> |         |
| `immediate*`     | `boolean`                                  | `true`  |
| `returns`        | [`AsyncFnReturn`](#asyncfnreturn)          |         |

## isLocalImport

**`react function`**

_defined in [@component-controls/core/core/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L213)_

**parameters**

| Name        | Type      |
| ----------- | --------- |
| `filePath*` | `string`  |
| `returns`   | `boolean` |

## FrameworkRenderFn

**`function`**

render function by framework. By default 'react'

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L18)_

**parameters**

| Name      | Type                                                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props*`  | <details><summary>`type`</summary><blockquote>`story`\*: [`Story`](#story)<br />`doc`: [`Document`](#document)<br />`values`: [`ExampleControls`](#examplecontrols)<br />`options`: `any`</blockquote></details> |
| `returns` | `any`                                                                                                                                                                                                            |

## TabConfiguration

**`interface`**

story type pages can have multiple tabs with separate page configurations.

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L28)_

**properties**

| Name         | Type                                                                                                                                                                                                                                                                                         | Description                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `option*`    | \[`string`]: `any`<br />                                                                                                                                                                                                                                                                     | any custom page options                         |
| `title`      | `string`                                                                                                                                                                                                                                                                                     | title will be used as tab caption               |
| `component*` | <details><summary>`FC`&lt;`any`></summary><blockquote>`propTypes`: `WeakValidationMap`&lt;> \| `undefined`<br />`contextTypes`: `ValidationMap`&lt;> \| `undefined`<br />`defaultProps`: `Partial`&lt;`P`> \| `undefined`<br />`displayName`: `string` \| `undefined`</blockquote></details> | page template - can be a package default export |
| `container`  | `ComponentType` \| `null`                                                                                                                                                                                                                                                                    | page container react component                  |
| `variant`    | `string`                                                                                                                                                                                                                                                                                     | variant key in the pagecontainer theme value    |
| `isVisible`  | **function** (<br /><details><summary>`props`\*</summary><blockquote>`config`\*: [`RunConfiguration`](#runconfiguration)<br />`story`\*: [`Story`](#story)<br />`doc`\*: [`Document`](#document)</blockquote></details>) => `boolean`                                                        | callback to determine if the tab is visible     |

## PageTab

**`union`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L62)_

**values**

`string` \| [`TabConfiguration`](#tabconfiguration) \| `tuple`

## PageTabs

**`type`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L64)_

**properties**

| Name        | Type                                     |
| ----------- | ---------------------------------------- |
| _anonymous_ | \[`string`]: [`PageTab`](#pagetab)<br /> |

## loadDefaultExport

**`function`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L66)_

**parameters**

| Name       | Type                                              | Description                                                                |
| ---------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| `imported` | `type` \| [`TabConfiguration`](#tabconfiguration) |                                                                            |
| `returns`  | [`TabConfiguration`](#tabconfiguration)           | story type pages can have multiple tabs with separate page configurations. |

## loadPageTab

**`function`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L71)_

**parameters**

| Name       | Type                                    | Description                                                                |
| ---------- | --------------------------------------- | -------------------------------------------------------------------------- |
| `tab*`     | [`PageTab`](#pagetab)                   |                                                                            |
| `imported` | [`TabConfiguration`](#tabconfiguration) | story type pages can have multiple tabs with separate page configurations. |
| `returns`  | [`TabConfiguration`](#tabconfiguration) | story type pages can have multiple tabs with separate page configurations. |

## DocType

**`union`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L90)_

**values**

`"story"` \| `"blog"` \| `"page"` \| `"tags"` \| `"author"` \| `string`

## PageLayoutProps

**`interface`**

page layout - sidebars, full width

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L96)_

**properties**

| Name             | Type      | Description                                                                    |
| ---------------- | --------- | ------------------------------------------------------------------------------ |
| `navSidebar`     | `boolean` | whether to add navigation sidebar to the page                                  |
| `contextSidebar` | `boolean` | whether to add conext sidebar to navigate the sections of the current document |
| `fullPage`       | `boolean` | whether to take a fullpage theme option                                        |

## SideNavConfiguration

**`interface`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L110)_

**properties**

| Name             | Type      | Description                                                                                                                  |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `storyPaths`     | `boolean` | if true, generate story-based paths. This is for documents with a navSidebar that would allow selection of specific stories. |
| `collapseSingle` | `boolean` | if a single story in the document, and storyPaths is true= will only generate a single menu item for the doc itself          |

## PageConfiguration

**`type`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L121)_

**properties**

| Name             | Type                                                           | Parent                                | Description                                                                                                                   |
| ---------------- | -------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `basePath`       | `string`                                                       |                                       | base url path for the page                                                                                                    |
| `sideNav`        | [`SideNavConfiguration`](#sidenavconfiguration)                |                                       | side navigation configuration                                                                                                 |
| `label`          | `string`                                                       |                                       | label - used for menu labels                                                                                                  |
| `indexHome`      | `boolean`                                                      |                                       | whether to have an index home page for the doc type. if false, will show the first document of the doc type as the home page. |
| `topMenu`        | `boolean`                                                      |                                       | whether to add to the top navigation menu                                                                                     |
| `container`      | `ComponentType` \| `null`                                      |                                       | page container react component                                                                                                |
| `tabs`           | `Record`&lt;`string`, [`TabConfiguration`](#tabconfiguration)> |                                       | tabs configuration for story-type pages                                                                                       |
| `navSidebar`     | `boolean`                                                      | [`PageLayoutProps`](#pagelayoutprops) | whether to add navigation sidebar to the page                                                                                 |
| `contextSidebar` | `boolean`                                                      | [`PageLayoutProps`](#pagelayoutprops) | whether to add conext sidebar to navigate the sections of the current document                                                |
| `fullPage`       | `boolean`                                                      | [`PageLayoutProps`](#pagelayoutprops) | whether to take a fullpage theme option                                                                                       |

## PagesConfiguration

**`type`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L158)_

**properties**

| Name        | Type                                                         |
| ----------- | ------------------------------------------------------------ |
| _anonymous_ | \[`string`]: [`PageConfiguration`](#pageconfiguration)<br /> |

## PagesOnlyRoutes

**`type`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L160)_

**properties**

| Name        | Type                |
| ----------- | ------------------- |
| _anonymous_ | \[`string`]: <br /> |

## SitemapConfigPage

**`interface`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L167)_

**properties**

| Name        | Type     |
| ----------- | -------- |
| `priority*` | `number` |

## SitemapConfig

**`union`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L170)_

**values**

`type` \| `boolean`

## BuildConfiguration

**`type`**

global configuration used at build time stored in a file named main.js/main.ts

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L184)_

**properties**

| Name            | Type                                                                                                                                                                                                                                                                     | Parent                      | Description                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `webpack`       | `Configuration` \| `WebpackConfigFn`                                                                                                                                                                                                                                     | [`BuildProps`](#buildprops) | webpack configuration object                                                                                                                     |
| `finalWebpack`  | `Configuration` \| `WebpackConfigFn`                                                                                                                                                                                                                                     | [`BuildProps`](#buildprops) |                                                                                                                                                  |
| `presets`       | [`RuleTypes`](#ruletypes)                                                                                                                                                                                                                                                | [`BuildProps`](#buildprops) | a list of webpack configuration presets from webpack-configs packages                                                                            |
| `configPath`    | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops) | path to the configuration file e.g : '.storybook'                                                                                                |
| `distFolder`    | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops) | public output folder for the bundle                                                                                                              |
| `bundleName`    | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops) | public file name the bundle, by default 'component-controls.js'                                                                                  |
| `staticFolder`  | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops) | public output folder for the assets like images                                                                                                  |
| `cssFileName`   | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops) | file name where css styles are exported to load for ssr                                                                                          |
| `logOptions`    | `Partial`&lt;`LogOptions`>                                                                                                                                                                                                                                               | [`BuildProps`](#buildprops) | logger options                                                                                                                                   |
| `mode`          | `"none"` \| `"development"` \| `"production"`                                                                                                                                                                                                                            | [`BuildProps`](#buildprops) | Enable production optimizations or development hints.                                                                                            |
| `loaders`       | [`WebpackLoaderConfig`](#webpackloaderconfig)                                                                                                                                                                                                                            | [`BuildProps`](#buildprops) | loaders custom options shortcut. This can be used for quick options setup instead of using the webpack hook                                      |
| `stories`       | `string` \| `string`\[]                                                                                                                                                                                                                                                  |                             | wild card search string for the stories internally using  `glob`  for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/\* |
| `files`         | `string` \| `string`\[]                                                                                                                                                                                                                                                  |                             | alternative naming for docz compatibility                                                                                                        |
| `siteRoot`      | `string`                                                                                                                                                                                                                                                                 |                             | the site base url, by default the site starts at /                                                                                               |
| `ignore`        | `string`\[]                                                                                                                                                                                                                                                              |                             | files to ignore. by default \['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']                                |
| `pages`         | [`PagesOnlyRoutes`](#pagesonlyroutes)                                                                                                                                                                                                                                    |                             | base url path for API documentation pages. Default is "docs/"                                                                                    |
| `categories`    | [`DocType`](#doctype)\[]                                                                                                                                                                                                                                                 |                             | page types that are considered as categories fields as well                                                                                      |
| `siteMap`       | [`SitemapConfig`](#sitemapconfig)                                                                                                                                                                                                                                        |                             | if false, disable automatic sitemap generation                                                                                                   |
| `siteUrl`       | `string`                                                                                                                                                                                                                                                                 |                             | Deployed site url. Also used for auto generated sitemap.                                                                                         |
| `instrument`    | `any`                                                                                                                                                                                                                                                                    |                             | instrumentation configuration                                                                                                                    |
| `search`        | <details><summary>`SearchOptions`</summary><blockquote>`indexingModule`: `string`<br />`searchingModule`\*: `string`<br />`fields`: `SearchFields`\[]<br />`emptySearchDocuments`: `string`\[]<br />`hitsPerPage`: `number`<br />`options`: `any`</blockquote></details> |                             | search options                                                                                                                                   |
| `tokens`        | <details><summary>`TokenOptions`</summary><blockquote>`figmaAccessToken`: `string`<br />`githubAccessToken`: `string`</blockquote></details>                                                                                                                             |                             |                                                                                                                                                  |
| `component`     | `string` \| `Record`&lt;`string`, `unknown`> \| `ElementType`&lt;`Props`>                                                                                                                                                                                                | `StoryProps`                | id for component associated with the story                                                                                                       |
| `subcomponents` | `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)>                                                                                                                                                                           | `StoryProps`                | multiple components option                                                                                                                       |
| `controls`      | [`ComponentControls`](#componentcontrols)                                                                                                                                                                                                                                | `StoryProps`                | ComponentControls are defined in key value pairs the name of the property is the key and the value is the ComponentControl                       |
| `smartControls` | <details><summary>`SmartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details>                                                                                   | `StoryProps`                | "smart" controls options                                                                                                                         |
| `decorators`    | [`StoryRenderFn`](#storyrenderfn)\[]                                                                                                                                                                                                                                     | `StoryProps`                | array of wrapper functions (decorators) to be called when rendering each individual story.                                                       |
| `plugins`       | `any`                                                                                                                                                                                                                                                                    | `StoryProps`                | plugins configuration settings                                                                                                                   |
| `category`      | `string`                                                                                                                                                                                                                                                                 | `StoryProps`                | category string - can be used for cleanly separating stories/components                                                                          |

## ToolbarConfig

**`interface`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L233)_

**properties**

| Name    | Type                          | Description              |
| ------- | ----------------------------- | ------------------------ |
| `left`  | [`ActionItems`](#actionitems) | left side toolbar items  |
| `right` | [`ActionItems`](#actionitems) | right side toolbar items |

## StaticMenuItem

**`union`**

static menu items

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L248)_

**values**

`string` \| `type`

## StaticMenuItems

**`array`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L249)_

**properties**

| Name          | Type                                | Description       |
| ------------- | ----------------------------------- | ----------------- |
| _anonymous\*_ | [`StaticMenuItem`](#staticmenuitem) | static menu items |

## RuntimeConfiguration

**`type`**

global configuration used at build time stored in a file named main.js/main.ts

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L255)_

**properties**

| Name            | Type                                                                                                                                                                                                                                                                                    | Parent       | Description                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `renderFn`      | [`FrameworkRenderFn`](#frameworkrenderfn)                                                                                                                                                                                                                                               |              | render function by framework. By default 'react'                                                                                                                    |
| `title`         | `string`                                                                                                                                                                                                                                                                                |              | standalone site title. Default is "Component controls"                                                                                                              |
| `logo`          | `string` \| `ReactNode`                                                                                                                                                                                                                                                                 |              | logo for the site - can be a string link to an image, or a react node                                                                                               |
| `app`           | <details><summary>`FC`&lt;></summary><blockquote>`propTypes`: `WeakValidationMap`&lt;> \| `undefined`<br />`contextTypes`: `ValidationMap`&lt;> \| `undefined`<br />`defaultProps`: `Partial`&lt;`P`> \| `undefined`<br />`displayName`: `string` \| `undefined`</blockquote></details> |              | application wrapper, can be used to insert tags or styles. The application will be passed as children                                                               |
| `description`   | `string`                                                                                                                                                                                                                                                                                |              | site description. Default is "Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site." |
| `copyright`     | `string`                                                                                                                                                                                                                                                                                |              | copyright notice displayed in the footer                                                                                                                            |
| `language`      | `string`                                                                                                                                                                                                                                                                                |              | site language, Default is "en"                                                                                                                                      |
| `author`        | `string`                                                                                                                                                                                                                                                                                |              | author: Default is "@component-controls"                                                                                                                            |
| `image`         | `string`                                                                                                                                                                                                                                                                                |              | link to site image                                                                                                                                                  |
| `links`         | (`DetailedHTMLProps`&lt;>)\[]                                                                                                                                                                                                                                                           |              | meta links for seo header                                                                                                                                           |
| `seo`           | `ReactChild` \| `ReactFragment` \| `ReactPortal` \| `boolean` \| `null` \| `undefined`                                                                                                                                                                                                  |              | custom seo rendering.                                                                                                                                               |
| `pages`         | [`PagesConfiguration`](#pagesconfiguration)                                                                                                                                                                                                                                             |              | page types configurations                                                                                                                                           |
| `theme`         | <details><summary>`type`</summary><blockquote>\[`string`]: `any`</blockquote></details>                                                                                                                                                                                                 |              | theme-ui theme configuration                                                                                                                                        |
| `storySort`     | **function** (<br />`a`\*: `string`<br />`b`\*: `string`<br />) => `number`                                                                                                                                                                                                             |              | story sorting function                                                                                                                                              |
| `toolbar`       | [`ToolbarConfig`](#toolbarconfig)                                                                                                                                                                                                                                                       |              | custom toolbar items                                                                                                                                                |
| `footer`        | [`ToolbarConfig`](#toolbarconfig)                                                                                                                                                                                                                                                       |              | custom footer items                                                                                                                                                 |
| `sidebar`       | [`ActionItems`](#actionitems)                                                                                                                                                                                                                                                           |              | custom sidebar items                                                                                                                                                |
| `menu`          | [`StaticMenuItems`](#staticmenuitems)                                                                                                                                                                                                                                                   |              | static menu items, can be used in conjunction with the menu prop on the document provides compatibility with docz                                                   |
| `components`    | `Record`&lt;`string`, `unknown`>                                                                                                                                                                                                                                                        |              | custom props to components ex: components: { story:{ wrapper: 'iframe' } },                                                                                         |
| `analytics`     | `any`                                                                                                                                                                                                                                                                                   |              | analytics options                                                                                                                                                   |
| `component`     | `string` \| `Record`&lt;`string`, `unknown`> \| `ElementType`&lt;`Props`>                                                                                                                                                                                                               | `StoryProps` | id for component associated with the story                                                                                                                          |
| `subcomponents` | `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)>                                                                                                                                                                                          | `StoryProps` | multiple components option                                                                                                                                          |
| `controls`      | [`ComponentControls`](#componentcontrols)                                                                                                                                                                                                                                               | `StoryProps` | ComponentControls are defined in key value pairs the name of the property is the key and the value is the ComponentControl                                          |
| `smartControls` | <details><summary>`SmartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details>                                                                                                  | `StoryProps` | "smart" controls options                                                                                                                                            |
| `decorators`    | [`StoryRenderFn`](#storyrenderfn)\[]                                                                                                                                                                                                                                                    | `StoryProps` | array of wrapper functions (decorators) to be called when rendering each individual story.                                                                          |
| `plugins`       | `any`                                                                                                                                                                                                                                                                                   | `StoryProps` | plugins configuration settings                                                                                                                                      |
| `category`      | `string`                                                                                                                                                                                                                                                                                | `StoryProps` | category string - can be used for cleanly separating stories/components                                                                                             |

## RunConfiguration

**`type`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L360)_

**properties**

| Name            | Type                                                                                                                                                                                                                                                                                    | Parent                                          | Description                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `footer`        | [`ToolbarConfig`](#toolbarconfig)                                                                                                                                                                                                                                                       | [`RuntimeConfiguration`](#runtimeconfiguration) | custom footer items                                                                                                                                                 |
| `menu`          | [`StaticMenuItems`](#staticmenuitems)                                                                                                                                                                                                                                                   | [`RuntimeConfiguration`](#runtimeconfiguration) | static menu items, can be used in conjunction with the menu prop on the document provides compatibility with docz                                                   |
| `title`         | `string`                                                                                                                                                                                                                                                                                | [`RuntimeConfiguration`](#runtimeconfiguration) | standalone site title. Default is "Component controls"                                                                                                              |
| `image`         | `string`                                                                                                                                                                                                                                                                                | [`RuntimeConfiguration`](#runtimeconfiguration) | link to site image                                                                                                                                                  |
| `controls`      | [`ComponentControls`](#componentcontrols)                                                                                                                                                                                                                                               | `StoryProps`                                    | ComponentControls are defined in key value pairs the name of the property is the key and the value is the ComponentControl                                          |
| `description`   | `string`                                                                                                                                                                                                                                                                                | [`RuntimeConfiguration`](#runtimeconfiguration) | site description. Default is "Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site." |
| `component`     | `string` \| `Record`&lt;`string`, `unknown`> \| `ElementType`&lt;`Props`>                                                                                                                                                                                                               | `StoryProps`                                    | id for component associated with the story                                                                                                                          |
| `subcomponents` | `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)>                                                                                                                                                                                          | `StoryProps`                                    | multiple components option                                                                                                                                          |
| `smartControls` | <details><summary>`SmartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details>                                                                                                  | `StoryProps`                                    | "smart" controls options                                                                                                                                            |
| `decorators`    | [`StoryRenderFn`](#storyrenderfn)\[]                                                                                                                                                                                                                                                    | `StoryProps`                                    | array of wrapper functions (decorators) to be called when rendering each individual story.                                                                          |
| `plugins`       | `any`                                                                                                                                                                                                                                                                                   | `StoryProps`                                    | plugins configuration settings                                                                                                                                      |
| `category`      | `string`                                                                                                                                                                                                                                                                                | `StoryProps`                                    | category string - can be used for cleanly separating stories/components                                                                                             |
| `author`        | `string`                                                                                                                                                                                                                                                                                | [`RuntimeConfiguration`](#runtimeconfiguration) | author: Default is "@component-controls"                                                                                                                            |
| `logo`          | `string` \| `ReactNode`                                                                                                                                                                                                                                                                 | [`RuntimeConfiguration`](#runtimeconfiguration) | logo for the site - can be a string link to an image, or a react node                                                                                               |
| `app`           | <details><summary>`FC`&lt;></summary><blockquote>`propTypes`: `WeakValidationMap`&lt;> \| `undefined`<br />`contextTypes`: `ValidationMap`&lt;> \| `undefined`<br />`defaultProps`: `Partial`&lt;`P`> \| `undefined`<br />`displayName`: `string` \| `undefined`</blockquote></details> | [`RuntimeConfiguration`](#runtimeconfiguration) | application wrapper, can be used to insert tags or styles. The application will be passed as children                                                               |
| `copyright`     | `string`                                                                                                                                                                                                                                                                                | [`RuntimeConfiguration`](#runtimeconfiguration) | copyright notice displayed in the footer                                                                                                                            |
| `language`      | `string`                                                                                                                                                                                                                                                                                | [`RuntimeConfiguration`](#runtimeconfiguration) | site language, Default is "en"                                                                                                                                      |
| `links`         | (`DetailedHTMLProps`&lt;>)\[]                                                                                                                                                                                                                                                           | [`RuntimeConfiguration`](#runtimeconfiguration) | meta links for seo header                                                                                                                                           |
| `seo`           | `ReactChild` \| `ReactFragment` \| `ReactPortal` \| `boolean` \| `null` \| `undefined`                                                                                                                                                                                                  | [`RuntimeConfiguration`](#runtimeconfiguration) | custom seo rendering.                                                                                                                                               |
| `pages`         | [`PagesConfiguration`](#pagesconfiguration)                                                                                                                                                                                                                                             | [`RuntimeConfiguration`](#runtimeconfiguration) | page types configurations                                                                                                                                           |
| `theme`         | <details><summary>`type`</summary><blockquote>\[`string`]: `any`</blockquote></details>                                                                                                                                                                                                 | [`RuntimeConfiguration`](#runtimeconfiguration) | theme-ui theme configuration                                                                                                                                        |
| `storySort`     | **function** (<br />`a`\*: `string`<br />`b`\*: `string`<br />) => `number`                                                                                                                                                                                                             | [`RuntimeConfiguration`](#runtimeconfiguration) | story sorting function                                                                                                                                              |
| `toolbar`       | [`ToolbarConfig`](#toolbarconfig)                                                                                                                                                                                                                                                       | [`RuntimeConfiguration`](#runtimeconfiguration) | custom toolbar items                                                                                                                                                |
| `sidebar`       | [`ActionItems`](#actionitems)                                                                                                                                                                                                                                                           | [`RuntimeConfiguration`](#runtimeconfiguration) | custom sidebar items                                                                                                                                                |
| `components`    | `Record`&lt;`string`, `unknown`>                                                                                                                                                                                                                                                        | [`RuntimeConfiguration`](#runtimeconfiguration) | custom props to components ex: components: { story:{ wrapper: 'iframe' } },                                                                                         |
| `analytics`     | `any`                                                                                                                                                                                                                                                                                   | [`RuntimeConfiguration`](#runtimeconfiguration) | analytics options                                                                                                                                                   |
| `renderFn`      | [`FrameworkRenderFn`](#frameworkrenderfn)                                                                                                                                                                                                                                               | [`RuntimeConfiguration`](#runtimeconfiguration) | framework-specific render function. By default react render                                                                                                         |
| `webpack`       | `Configuration` \| `WebpackConfigFn`                                                                                                                                                                                                                                                    | [`BuildProps`](#buildprops)                     | webpack configuration object                                                                                                                                        |
| `finalWebpack`  | `Configuration` \| `WebpackConfigFn`                                                                                                                                                                                                                                                    | [`BuildProps`](#buildprops)                     |                                                                                                                                                                     |
| `presets`       | [`RuleTypes`](#ruletypes)                                                                                                                                                                                                                                                               | [`BuildProps`](#buildprops)                     | a list of webpack configuration presets from webpack-configs packages                                                                                               |
| `configPath`    | `string`                                                                                                                                                                                                                                                                                | [`BuildProps`](#buildprops)                     | path to the configuration file e.g : '.storybook'                                                                                                                   |
| `distFolder`    | `string`                                                                                                                                                                                                                                                                                | [`BuildProps`](#buildprops)                     | public output folder for the bundle                                                                                                                                 |
| `bundleName`    | `string`                                                                                                                                                                                                                                                                                | [`BuildProps`](#buildprops)                     | public file name the bundle, by default 'component-controls.js'                                                                                                     |
| `staticFolder`  | `string`                                                                                                                                                                                                                                                                                | [`BuildProps`](#buildprops)                     | public output folder for the assets like images                                                                                                                     |
| `cssFileName`   | `string`                                                                                                                                                                                                                                                                                | [`BuildProps`](#buildprops)                     | file name where css styles are exported to load for ssr                                                                                                             |
| `logOptions`    | `Partial`&lt;`LogOptions`>                                                                                                                                                                                                                                                              | [`BuildProps`](#buildprops)                     | logger options                                                                                                                                                      |
| `mode`          | `"none"` \| `"development"` \| `"production"`                                                                                                                                                                                                                                           | [`BuildProps`](#buildprops)                     | Enable production optimizations or development hints.                                                                                                               |
| `loaders`       | [`WebpackLoaderConfig`](#webpackloaderconfig)                                                                                                                                                                                                                                           | [`BuildProps`](#buildprops)                     | loaders custom options shortcut. This can be used for quick options setup instead of using the webpack hook                                                         |
| `stories`       | `string` \| `string`\[]                                                                                                                                                                                                                                                                 | [`BuildConfiguration`](#buildconfiguration)     | wild card search string for the stories internally using  `glob`  for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/\*                    |
| `files`         | `string` \| `string`\[]                                                                                                                                                                                                                                                                 | [`BuildConfiguration`](#buildconfiguration)     | alternative naming for docz compatibility                                                                                                                           |
| `siteRoot`      | `string`                                                                                                                                                                                                                                                                                | [`BuildConfiguration`](#buildconfiguration)     | the site base url, by default the site starts at /                                                                                                                  |
| `ignore`        | `string`\[]                                                                                                                                                                                                                                                                             | [`BuildConfiguration`](#buildconfiguration)     | files to ignore. by default \['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']                                                   |
| `categories`    | [`DocType`](#doctype)\[]                                                                                                                                                                                                                                                                | [`BuildConfiguration`](#buildconfiguration)     | page types that are considered as categories fields as well                                                                                                         |
| `siteMap`       | [`SitemapConfig`](#sitemapconfig)                                                                                                                                                                                                                                                       | [`BuildConfiguration`](#buildconfiguration)     | if false, disable automatic sitemap generation                                                                                                                      |
| `siteUrl`       | `string`                                                                                                                                                                                                                                                                                | [`BuildConfiguration`](#buildconfiguration)     | Deployed site url. Also used for auto generated sitemap.                                                                                                            |
| `instrument`    | `any`                                                                                                                                                                                                                                                                                   | [`BuildConfiguration`](#buildconfiguration)     | instrumentation configuration                                                                                                                                       |
| `search`        | <details><summary>`SearchOptions`</summary><blockquote>`indexingModule`: `string`<br />`searchingModule`\*: `string`<br />`fields`: `SearchFields`\[]<br />`emptySearchDocuments`: `string`\[]<br />`hitsPerPage`: `number`<br />`options`: `any`</blockquote></details>                | [`BuildConfiguration`](#buildconfiguration)     | search options                                                                                                                                                      |
| `tokens`        | <details><summary>`TokenOptions`</summary><blockquote>`figmaAccessToken`: `string`<br />`githubAccessToken`: `string`</blockquote></details>                                                                                                                                            | [`BuildConfiguration`](#buildconfiguration)     |                                                                                                                                                                     |

## defaultBuildConfig

**`type`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L364)_

**properties**

| Name            | Type                                                                                                                                                                                                                                                                     | Parent                                      | Default | Description                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `webpack`       | `Configuration` \| `WebpackConfigFn`                                                                                                                                                                                                                                     | [`BuildProps`](#buildprops)                 |         | webpack configuration object                                                                                                                     |
| `finalWebpack`  | `Configuration` \| `WebpackConfigFn`                                                                                                                                                                                                                                     | [`BuildProps`](#buildprops)                 |         |                                                                                                                                                  |
| `presets`       | [`RuleTypes`](#ruletypes)                                                                                                                                                                                                                                                | [`BuildProps`](#buildprops)                 |         | a list of webpack configuration presets from webpack-configs packages                                                                            |
| `configPath`    | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops)                 |         | path to the configuration file e.g : '.storybook'                                                                                                |
| `distFolder`    | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops)                 |         | public output folder for the bundle                                                                                                              |
| `bundleName`    | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops)                 |         | public file name the bundle, by default 'component-controls.js'                                                                                  |
| `staticFolder`  | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops)                 |         | public output folder for the assets like images                                                                                                  |
| `cssFileName`   | `string`                                                                                                                                                                                                                                                                 | [`BuildProps`](#buildprops)                 |         | file name where css styles are exported to load for ssr                                                                                          |
| `logOptions`    | `Partial`&lt;`LogOptions`>                                                                                                                                                                                                                                               | [`BuildProps`](#buildprops)                 |         | logger options                                                                                                                                   |
| `mode`          | `"none"` \| `"development"` \| `"production"`                                                                                                                                                                                                                            | [`BuildProps`](#buildprops)                 |         | Enable production optimizations or development hints.                                                                                            |
| `loaders`       | [`WebpackLoaderConfig`](#webpackloaderconfig)                                                                                                                                                                                                                            | [`BuildProps`](#buildprops)                 |         | loaders custom options shortcut. This can be used for quick options setup instead of using the webpack hook                                      |
| `stories`       | `string` \| `string`\[]                                                                                                                                                                                                                                                  | [`BuildConfiguration`](#buildconfiguration) |         | wild card search string for the stories internally using  `glob`  for the search: https&#x3A;//www.npmjs.com/package/glob example: "./stories/\* |
| `files`         | `string` \| `string`\[]                                                                                                                                                                                                                                                  | [`BuildConfiguration`](#buildconfiguration) |         | alternative naming for docz compatibility                                                                                                        |
| `siteRoot`      | `string`                                                                                                                                                                                                                                                                 | [`BuildConfiguration`](#buildconfiguration) | `"/"`   | the site base url, by default the site starts at /                                                                                               |
| `ignore`        | `string`\[]                                                                                                                                                                                                                                                              | [`BuildConfiguration`](#buildconfiguration) |         | files to ignore. by default \['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']                                |
| `pages`         | [`PagesOnlyRoutes`](#pagesonlyroutes)                                                                                                                                                                                                                                    | [`BuildConfiguration`](#buildconfiguration) |         | base url path for API documentation pages. Default is "docs/"                                                                                    |
| `categories`    | [`DocType`](#doctype)\[]                                                                                                                                                                                                                                                 | [`BuildConfiguration`](#buildconfiguration) |         | page types that are considered as categories fields as well                                                                                      |
| `siteMap`       | [`SitemapConfig`](#sitemapconfig)                                                                                                                                                                                                                                        | [`BuildConfiguration`](#buildconfiguration) |         | if false, disable automatic sitemap generation                                                                                                   |
| `siteUrl`       | `string`                                                                                                                                                                                                                                                                 | [`BuildConfiguration`](#buildconfiguration) |         | Deployed site url. Also used for auto generated sitemap.                                                                                         |
| `instrument`    | `any`                                                                                                                                                                                                                                                                    | [`BuildConfiguration`](#buildconfiguration) |         | instrumentation configuration                                                                                                                    |
| `search`        | <details><summary>`SearchOptions`</summary><blockquote>`indexingModule`: `string`<br />`searchingModule`\*: `string`<br />`fields`: `SearchFields`\[]<br />`emptySearchDocuments`: `string`\[]<br />`hitsPerPage`: `number`<br />`options`: `any`</blockquote></details> | [`BuildConfiguration`](#buildconfiguration) |         | search options                                                                                                                                   |
| `tokens`        | <details><summary>`TokenOptions`</summary><blockquote>`figmaAccessToken`: `string`<br />`githubAccessToken`: `string`</blockquote></details>                                                                                                                             | [`BuildConfiguration`](#buildconfiguration) |         |                                                                                                                                                  |
| `component`     | `string` \| `Record`&lt;`string`, `unknown`> \| `ElementType`&lt;`Props`>                                                                                                                                                                                                | `StoryProps`                                |         | id for component associated with the story                                                                                                       |
| `subcomponents` | `Record`&lt;`string`, (`string`, `Record`&lt;`string`, `unknown`>, `ElementType`&lt;`Props`>)>                                                                                                                                                                           | `StoryProps`                                |         | multiple components option                                                                                                                       |
| `controls`      | [`ComponentControls`](#componentcontrols)                                                                                                                                                                                                                                | `StoryProps`                                |         | ComponentControls are defined in key value pairs the name of the property is the key and the value is the ComponentControl                       |
| `smartControls` | <details><summary>`SmartControls`</summary><blockquote>`smart`: `boolean`<br />`include`: `string`\[] \| `IncludeFn`<br />`exclude`: `string`\[] \| `IncludeFn`</blockquote></details>                                                                                   | `StoryProps`                                |         | "smart" controls options                                                                                                                         |
| `decorators`    | [`StoryRenderFn`](#storyrenderfn)\[]                                                                                                                                                                                                                                     | `StoryProps`                                |         | array of wrapper functions (decorators) to be called when rendering each individual story.                                                       |
| `plugins`       | `any`                                                                                                                                                                                                                                                                    | `StoryProps`                                |         | plugins configuration settings                                                                                                                   |
| `category`      | `string`                                                                                                                                                                                                                                                                 | `StoryProps`                                |         | category string - can be used for cleanly separating stories/components                                                                          |

## defaultRunConfig

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L420)_

## convertConfig

**`function`**

_defined in [@component-controls/core/core/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L453)_

**parameters**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| `config*` | [`RunConfiguration`](#runconfiguration) |
| `returns` | [`RunConfiguration`](#runconfiguration) |

## RuleOptions

**`interface`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L7)_

**properties**

| Name      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name*`   | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `config*` | <details><summary>`Configuration`</summary><blockquote>`amd`: `false` \| `type`<br />`bail`: `boolean`<br />`cache`: `boolean` \| `MemoryCacheOptions` \| `FileCacheOptions`<br />`context`: `string`<br />`dependencies`: `string`\[]<br />`devtool`: `string` \| `false`<br />`entry`: `string` \| `function` \| `EntryObject` \| `string`\[]<br /><details><summary>`experiments`</summary><blockquote>`asyncWebAssembly`: `boolean`<br />`backCompat`: `boolean`<br />`cacheUnaffected`: `boolean`<br />`css`: `boolean`<br />`futureDefaults`: `boolean`<br />`layers`: `boolean`<br />`outputModule`: `boolean`<br />`syncWebAssembly`: `boolean`<br />`topLevelAwait`: `boolean`<br />`buildHttp`: `HttpUriOptions` \| ((`string`, `RegExp`, `function`))\[]<br />`lazyCompilation`: `boolean` \| `LazyCompilationOptions`</blockquote></details>`externals`: `string` \| `RegExp` \| `ExternalItem`\[] \| `ExternalItemObjectUnknown` \| `function` \| `function`<br /><details><summary>`externalsPresets`</summary><blockquote>`electron`: `boolean`<br />`electronMain`: `boolean`<br />`electronPreload`: `boolean`<br />`electronRenderer`: `boolean`<br />`node`: `boolean`<br />`nwjs`: `boolean`<br />`web`: `boolean`<br />`webAsync`: `boolean`</blockquote></details>`externalsType`: `"var"` \| `"module"` \| `"assign"` \| `"this"` \| `"window"` \| `"self"` \| `"global"` \| `"commonjs"` \| `"commonjs2"` \| `"commonjs-module"` \| `"commonjs-static"` \| `"amd"` \| `"amd-require"` \| `"umd"` \| `"umd2"` \| `"jsonp"` \| `"system"` \| `"promise"` \| `"import"` \| `"script"` \| `"node-commonjs"`<br />`ignoreWarnings`: ((`RegExp`, `type`, `function`))\[]<br /><details><summary>`infrastructureLogging`</summary><blockquote>`appendOnly`: `boolean`<br />`colors`: `boolean`<br />`console`: Console<br />`debug`: `string` \| `boolean` \| `RegExp` \| `FilterItemTypes`\[] \| `function`<br />`level`: `"none"` \| `"error"` \| `"warn"` \| `"info"` \| `"log"` \| `"verbose"`<br />`stream`: NodeJS.WritableStream</blockquote></details><details><summary>`loader`</summary><blockquote>\[`string`]: `any`</blockquote></details>`mode`: `"none"` \| `"development"` \| `"production"`<br /><details><summary>`module`</summary><blockquote>`defaultRules`: ((`RuleSetRule`, `string`))\[]<br />`exprContextCritical`: `boolean`<br />`exprContextRecursive`: `boolean`<br />`exprContextRegExp`: `boolean` \| `RegExp`<br />`exprContextRequest`: `string`<br /><details><summary>`generator`</summary><blockquote>`asset`\*: <br />`asset/inline`\*: <br />`asset/resource`\*: <br />`javascript`\*: <br />`javascript/auto`\*: <br />`javascript/dynamic`\*: <br />`javascript/esm`\*: </blockquote></details>`noParse`: `string` \| `Function` \| `RegExp` \| ((`string`, `Function`, `RegExp`))\[]<br /><details><summary>`parser`</summary><blockquote>`asset`\*: <br />`asset/inline`\*: <br />`asset/resource`\*: <br />`asset/source`\*: <br />`javascript`\*: <br />`javascript/auto`\*: <br />`javascript/dynamic`\*: <br />`javascript/esm`\*: </blockquote></details>`rules`: ((`RuleSetRule`, `string`))\[]<br />`strictExportPresence`: `boolean`<br />`strictThisContextOnImports`: `boolean`<br />`unknownContextCritical`: `boolean`<br />`unknownContextRecursive`: `boolean`<br />`unknownContextRegExp`: `boolean` \| `RegExp`<br />`unknownContextRequest`: `string`<br />`unsafeCache`: `boolean` \| `Function`<br />`wrappedContextCritical`: `boolean`<br />`wrappedContextRecursive`: `boolean`<br />`wrappedContextRegExp`: `RegExp`</blockquote></details>`name`: `string`<br />`node`: `false` \| `NodeOptions`<br /><details><summary>`optimization`</summary><blockquote>`checkWasmTypes`: `boolean`<br />`chunkIds`: `false` \| `"natural"` \| `"named"` \| `"deterministic"` \| `"size"` \| `"total-size"`<br />`concatenateModules`: `boolean`<br />`emitOnErrors`: `boolean`<br />`flagIncludedChunks`: `boolean`<br />`innerGraph`: `boolean`<br />`mangleExports`: `boolean` \| `"deterministic"` \| `"size"`<br />`mangleWasmImports`: `boolean`<br />`mergeDuplicateChunks`: `boolean`<br />`minimize`: `boolean`<br />`minimizer`: ((`function`, `WebpackPluginInstance`, `string`))\[]<br />`moduleIds`: `false` \| `"natural"` \| `"named"` \| `"deterministic"` \| `"size"` \| `"hashed"`<br />`noEmitOnErrors`: `boolean`<br />`nodeEnv`: `string` \| `false`<br />`portableRecords`: `boolean`<br />`providedExports`: `boolean`<br />`realContentHash`: `boolean`<br />`removeAvailableModules`: `boolean`<br />`removeEmptyChunks`: `boolean`<br />`runtimeChunk`: `boolean` \| `"single"` \| `"multiple"` \| `type`<br />`sideEffects`: `boolean` \| `"flag"`<br />`splitChunks`: `false` \| `OptimizationSplitChunksOptions`<br />`usedExports`: `boolean` \| `"global"`</blockquote></details><details><summary>`output`</summary><blockquote>`assetModuleFilename`: `string` \| `function`<br />`asyncChunks`: `boolean`<br />`auxiliaryComment`: `string` \| `LibraryCustomUmdCommentObject`<br />`charset`: `boolean`<br />`chunkFilename`: `string` \| `function`<br />`chunkFormat`: `string` \| `false`<br />`chunkLoadTimeout`: `number`<br />`chunkLoading`: `string` \| `false`<br />`chunkLoadingGlobal`: `string`<br />`clean`: `boolean` \| `CleanOptions`<br />`compareBeforeEmit`: `boolean`<br />`crossOriginLoading`: `false` \| `"anonymous"` \| `"use-credentials"`<br />`cssChunkFilename`: `string` \| `function`<br />`cssFilename`: `string` \| `function`<br />`devtoolFallbackModuleFilenameTemplate`: `string` \| `Function`<br />`devtoolModuleFilenameTemplate`: `string` \| `Function`<br />`devtoolNamespace`: `string`<br />`enabledChunkLoadingTypes`: `string`\[]<br />`enabledLibraryTypes`: `string`\[]<br />`enabledWasmLoadingTypes`: `string`\[]<br />`environment`: Environment<br />`filename`: `string` \| `function`<br />`globalObject`: `string`<br />`hashDigest`: `string`<br />`hashDigestLength`: `number`<br />`hashFunction`: `string` \| <br />`hashSalt`: `string`<br />`hotUpdateChunkFilename`: `string`<br />`hotUpdateGlobal`: `string`<br />`hotUpdateMainFilename`: `string`<br />`iife`: `boolean`<br />`importFunctionName`: `string`<br />`importMetaName`: `string`<br />`library`: `string` \| `string`\[] \| `LibraryOptions` \| `LibraryCustomUmdObject`<br />`libraryExport`: `string` \| `string`\[]<br />`libraryTarget`: `string`<br />`module`: `boolean`<br />`path`: `string`<br />`pathinfo`: `boolean` \| `"verbose"`<br />`publicPath`: `string` \| `function`<br />`scriptType`: `false` \| `"module"` \| `"text/javascript"`<br />`sourceMapFilename`: `string`<br />`sourcePrefix`: `string`<br />`strictModuleErrorHandling`: `boolean`<br />`strictModuleExceptionHandling`: `boolean`<br />`trustedTypes`: `string` \| `true` \| `TrustedTypes`<br />`umdNamedDefine`: `boolean`<br />`uniqueName`: `string`<br />`wasmLoading`: `string` \| `false`<br />`webassemblyModuleFilename`: `string`<br />`workerChunkLoading`: `string` \| `false`<br />`workerWasmLoading`: `string` \| `false`</blockquote></details>`parallelism`: `number`<br />`performance`: `false` \| `PerformanceOptions`<br />`plugins`: ((`function`, `WebpackPluginInstance`))\[]<br />`profile`: `boolean`<br />`recordsInputPath`: `string` \| `false`<br />`recordsOutputPath`: `string` \| `false`<br />`recordsPath`: `string` \| `false`<br /><details><summary>`resolve`</summary><blockquote>`alias`: `type`\[] \| `type`<br />`aliasFields`: ((`string`, `string`\[]))\[]<br /><details><summary>`byDependency`</summary><blockquote>\[`string`]: ResolveOptionsWebpackOptions</blockquote></details>`cache`: `boolean`<br />`cachePredicate`: **function** (<br />`request`\*: <br />) => `boolean`<br />`cacheWithContext`: `boolean`<br />`conditionNames`: `string`\[]<br />`descriptionFiles`: `string`\[]<br />`enforceExtension`: `boolean`<br />`exportsFields`: `string`\[]<br />`extensions`: `string`\[]<br />`fallback`: `type`\[] \| `type`<br />`fileSystem`: InputFileSystem<br />`fullySpecified`: `boolean`<br />`importsFields`: `string`\[]<br />`mainFields`: ((`string`, `string`\[]))\[]<br />`mainFiles`: `string`\[]<br />`modules`: `string`\[]<br />`plugins`: ((`ResolvePluginInstance`, `string`))\[]<br />`preferAbsolute`: `boolean`<br />`preferRelative`: `boolean`<br />`resolver`: Resolver<br />`restrictions`: ((`string`, `RegExp`))\[]<br />`roots`: `string`\[]<br />`symlinks`: `boolean`<br />`unsafeCache`: `boolean` \| `type`<br />`useSyncFileSystemCalls`: `boolean`</blockquote></details><details><summary>`resolveLoader`</summary><blockquote>`alias`: `type`\[] \| `type`<br />`aliasFields`: ((`string`, `string`\[]))\[]<br /><details><summary>`byDependency`</summary><blockquote>\[`string`]: ResolveOptionsWebpackOptions</blockquote></details>`cache`: `boolean`<br />`cachePredicate`: **function** (<br />`request`\*: <br />) => `boolean`<br />`cacheWithContext`: `boolean`<br />`conditionNames`: `string`\[]<br />`descriptionFiles`: `string`\[]<br />`enforceExtension`: `boolean`<br />`exportsFields`: `string`\[]<br />`extensions`: `string`\[]<br />`fallback`: `type`\[] \| `type`<br />`fileSystem`: InputFileSystem<br />`fullySpecified`: `boolean`<br />`importsFields`: `string`\[]<br />`mainFields`: ((`string`, `string`\[]))\[]<br />`mainFiles`: `string`\[]<br />`modules`: `string`\[]<br />`plugins`: ((`ResolvePluginInstance`, `string`))\[]<br />`preferAbsolute`: `boolean`<br />`preferRelative`: `boolean`<br />`resolver`: Resolver<br />`restrictions`: ((`string`, `RegExp`))\[]<br />`roots`: `string`\[]<br />`symlinks`: `boolean`<br />`unsafeCache`: `boolean` \| `type`<br />`useSyncFileSystemCalls`: `boolean`</blockquote></details><details><summary>`snapshot`</summary><blockquote><details><summary>`buildDependencies`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details>`immutablePaths`: ((`string`, `RegExp`))\[]<br />`managedPaths`: ((`string`, `RegExp`))\[]<br /><details><summary>`module`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details><details><summary>`resolve`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details><details><summary>`resolveBuildDependencies`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details></blockquote></details>`stats`: `boolean` \| `StatsOptions` \| `"none"` \| `"verbose"` \| `"summary"` \| `"errors-only"` \| `"errors-warnings"` \| `"minimal"` \| `"normal"` \| `"detailed"`<br />`target`: `string` \| `false` \| `string`\[]<br />`watch`: `boolean`<br />`watchOptions`: [`WatchOptions`](#watchoptions)</blockquote></details> |

## RuleType

**`union`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L11)_

**values**

`string` \| [`RuleOptions`](#ruleoptions)

## RuleTypes

**`array`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L13)_

**properties**

| Name          | Type                    |
| ------------- | ----------------------- |
| _anonymous\*_ | [`RuleType`](#ruletype) |

## PresetCallback

**`function`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L15)_

**parameters**

| Name       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| `options*` | [`BuildProps`](#buildprops)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                         |
| `returns`  | <details><summary>`Configuration`</summary><blockquote>`amd`: `false` \| `type`<br />`bail`: `boolean`<br />`cache`: `boolean` \| `MemoryCacheOptions` \| `FileCacheOptions`<br />`context`: `string`<br />`dependencies`: `string`\[]<br />`devtool`: `string` \| `false`<br />`entry`: `string` \| `function` \| `EntryObject` \| `string`\[]<br /><details><summary>`experiments`</summary><blockquote>`asyncWebAssembly`: `boolean`<br />`backCompat`: `boolean`<br />`cacheUnaffected`: `boolean`<br />`css`: `boolean`<br />`futureDefaults`: `boolean`<br />`layers`: `boolean`<br />`outputModule`: `boolean`<br />`syncWebAssembly`: `boolean`<br />`topLevelAwait`: `boolean`<br />`buildHttp`: `HttpUriOptions` \| ((`string`, `RegExp`, `function`))\[]<br />`lazyCompilation`: `boolean` \| `LazyCompilationOptions`</blockquote></details>`externals`: `string` \| `RegExp` \| `ExternalItem`\[] \| `ExternalItemObjectUnknown` \| `function` \| `function`<br /><details><summary>`externalsPresets`</summary><blockquote>`electron`: `boolean`<br />`electronMain`: `boolean`<br />`electronPreload`: `boolean`<br />`electronRenderer`: `boolean`<br />`node`: `boolean`<br />`nwjs`: `boolean`<br />`web`: `boolean`<br />`webAsync`: `boolean`</blockquote></details>`externalsType`: `"var"` \| `"module"` \| `"assign"` \| `"this"` \| `"window"` \| `"self"` \| `"global"` \| `"commonjs"` \| `"commonjs2"` \| `"commonjs-module"` \| `"commonjs-static"` \| `"amd"` \| `"amd-require"` \| `"umd"` \| `"umd2"` \| `"jsonp"` \| `"system"` \| `"promise"` \| `"import"` \| `"script"` \| `"node-commonjs"`<br />`ignoreWarnings`: ((`RegExp`, `type`, `function`))\[]<br /><details><summary>`infrastructureLogging`</summary><blockquote>`appendOnly`: `boolean`<br />`colors`: `boolean`<br />`console`: Console<br />`debug`: `string` \| `boolean` \| `RegExp` \| `FilterItemTypes`\[] \| `function`<br />`level`: `"none"` \| `"error"` \| `"warn"` \| `"info"` \| `"log"` \| `"verbose"`<br />`stream`: NodeJS.WritableStream</blockquote></details><details><summary>`loader`</summary><blockquote>\[`string`]: `any`</blockquote></details>`mode`: `"none"` \| `"development"` \| `"production"`<br /><details><summary>`module`</summary><blockquote>`defaultRules`: ((`RuleSetRule`, `string`))\[]<br />`exprContextCritical`: `boolean`<br />`exprContextRecursive`: `boolean`<br />`exprContextRegExp`: `boolean` \| `RegExp`<br />`exprContextRequest`: `string`<br />`generator`: GeneratorOptionsByModuleType<br />`noParse`: `string` \| `Function` \| `RegExp` \| ((`string`, `Function`, `RegExp`))\[]<br />`parser`: ParserOptionsByModuleType<br />`rules`: ((`RuleSetRule`, `string`))\[]<br />`strictExportPresence`: `boolean`<br />`strictThisContextOnImports`: `boolean`<br />`unknownContextCritical`: `boolean`<br />`unknownContextRecursive`: `boolean`<br />`unknownContextRegExp`: `boolean` \| `RegExp`<br />`unknownContextRequest`: `string`<br />`unsafeCache`: `boolean` \| `Function`<br />`wrappedContextCritical`: `boolean`<br />`wrappedContextRecursive`: `boolean`<br />`wrappedContextRegExp`: `RegExp`</blockquote></details>`name`: `string`<br />`node`: `false` \| `NodeOptions`<br /><details><summary>`optimization`</summary><blockquote>`checkWasmTypes`: `boolean`<br />`chunkIds`: `false` \| `"natural"` \| `"named"` \| `"deterministic"` \| `"size"` \| `"total-size"`<br />`concatenateModules`: `boolean`<br />`emitOnErrors`: `boolean`<br />`flagIncludedChunks`: `boolean`<br />`innerGraph`: `boolean`<br />`mangleExports`: `boolean` \| `"deterministic"` \| `"size"`<br />`mangleWasmImports`: `boolean`<br />`mergeDuplicateChunks`: `boolean`<br />`minimize`: `boolean`<br />`minimizer`: ((`function`, `WebpackPluginInstance`, `string`))\[]<br />`moduleIds`: `false` \| `"natural"` \| `"named"` \| `"deterministic"` \| `"size"` \| `"hashed"`<br />`noEmitOnErrors`: `boolean`<br />`nodeEnv`: `string` \| `false`<br />`portableRecords`: `boolean`<br />`providedExports`: `boolean`<br />`realContentHash`: `boolean`<br />`removeAvailableModules`: `boolean`<br />`removeEmptyChunks`: `boolean`<br />`runtimeChunk`: `boolean` \| `"single"` \| `"multiple"` \| `type`<br />`sideEffects`: `boolean` \| `"flag"`<br />`splitChunks`: `false` \| `OptimizationSplitChunksOptions`<br />`usedExports`: `boolean` \| `"global"`</blockquote></details><details><summary>`output`</summary><blockquote>`assetModuleFilename`: `string` \| `function`<br />`asyncChunks`: `boolean`<br />`auxiliaryComment`: `string` \| `LibraryCustomUmdCommentObject`<br />`charset`: `boolean`<br />`chunkFilename`: `string` \| `function`<br />`chunkFormat`: `string` \| `false`<br />`chunkLoadTimeout`: `number`<br />`chunkLoading`: `string` \| `false`<br />`chunkLoadingGlobal`: `string`<br />`clean`: `boolean` \| `CleanOptions`<br />`compareBeforeEmit`: `boolean`<br />`crossOriginLoading`: `false` \| `"anonymous"` \| `"use-credentials"`<br />`cssChunkFilename`: `string` \| `function`<br />`cssFilename`: `string` \| `function`<br />`devtoolFallbackModuleFilenameTemplate`: `string` \| `Function`<br />`devtoolModuleFilenameTemplate`: `string` \| `Function`<br />`devtoolNamespace`: `string`<br />`enabledChunkLoadingTypes`: `string`\[]<br />`enabledLibraryTypes`: `string`\[]<br />`enabledWasmLoadingTypes`: `string`\[]<br />`environment`: Environment<br />`filename`: `string` \| `function`<br />`globalObject`: `string`<br />`hashDigest`: `string`<br />`hashDigestLength`: `number`<br />`hashFunction`: `string` \| <br />`hashSalt`: `string`<br />`hotUpdateChunkFilename`: `string`<br />`hotUpdateGlobal`: `string`<br />`hotUpdateMainFilename`: `string`<br />`iife`: `boolean`<br />`importFunctionName`: `string`<br />`importMetaName`: `string`<br />`library`: `string` \| `string`\[] \| `LibraryOptions` \| `LibraryCustomUmdObject`<br />`libraryExport`: `string` \| `string`\[]<br />`libraryTarget`: `string`<br />`module`: `boolean`<br />`path`: `string`<br />`pathinfo`: `boolean` \| `"verbose"`<br />`publicPath`: `string` \| `function`<br />`scriptType`: `false` \| `"module"` \| `"text/javascript"`<br />`sourceMapFilename`: `string`<br />`sourcePrefix`: `string`<br />`strictModuleErrorHandling`: `boolean`<br />`strictModuleExceptionHandling`: `boolean`<br />`trustedTypes`: `string` \| `true` \| `TrustedTypes`<br />`umdNamedDefine`: `boolean`<br />`uniqueName`: `string`<br />`wasmLoading`: `string` \| `false`<br />`webassemblyModuleFilename`: `string`<br />`workerChunkLoading`: `string` \| `false`<br />`workerWasmLoading`: `string` \| `false`</blockquote></details>`parallelism`: `number`<br />`performance`: `false` \| `PerformanceOptions`<br />`plugins`: ((`function`, `WebpackPluginInstance`))\[]<br />`profile`: `boolean`<br />`recordsInputPath`: `string` \| `false`<br />`recordsOutputPath`: `string` \| `false`<br />`recordsPath`: `string` \| `false`<br /><details><summary>`resolve`</summary><blockquote>`alias`: `type`\[] \| `type`<br />`aliasFields`: ((`string`, `string`\[]))\[]<br /><details><summary>`byDependency`</summary><blockquote>\[`string`]: ResolveOptionsWebpackOptions</blockquote></details>`cache`: `boolean`<br />`cachePredicate`: **function** (<br />`request`\*: <br />) => `boolean`<br />`cacheWithContext`: `boolean`<br />`conditionNames`: `string`\[]<br />`descriptionFiles`: `string`\[]<br />`enforceExtension`: `boolean`<br />`exportsFields`: `string`\[]<br />`extensions`: `string`\[]<br />`fallback`: `type`\[] \| `type`<br />`fileSystem`: InputFileSystem<br />`fullySpecified`: `boolean`<br />`importsFields`: `string`\[]<br />`mainFields`: ((`string`, `string`\[]))\[]<br />`mainFiles`: `string`\[]<br />`modules`: `string`\[]<br />`plugins`: ((`ResolvePluginInstance`, `string`))\[]<br />`preferAbsolute`: `boolean`<br />`preferRelative`: `boolean`<br />`resolver`: Resolver<br />`restrictions`: ((`string`, `RegExp`))\[]<br />`roots`: `string`\[]<br />`symlinks`: `boolean`<br />`unsafeCache`: `boolean` \| `type`<br />`useSyncFileSystemCalls`: `boolean`</blockquote></details><details><summary>`resolveLoader`</summary><blockquote>`alias`: `type`\[] \| `type`<br />`aliasFields`: ((`string`, `string`\[]))\[]<br /><details><summary>`byDependency`</summary><blockquote>\[`string`]: ResolveOptionsWebpackOptions</blockquote></details>`cache`: `boolean`<br />`cachePredicate`: **function** (<br />`request`\*: <br />) => `boolean`<br />`cacheWithContext`: `boolean`<br />`conditionNames`: `string`\[]<br />`descriptionFiles`: `string`\[]<br />`enforceExtension`: `boolean`<br />`exportsFields`: `string`\[]<br />`extensions`: `string`\[]<br />`fallback`: `type`\[] \| `type`<br />`fileSystem`: InputFileSystem<br />`fullySpecified`: `boolean`<br />`importsFields`: `string`\[]<br />`mainFields`: ((`string`, `string`\[]))\[]<br />`mainFiles`: `string`\[]<br />`modules`: `string`\[]<br />`plugins`: ((`ResolvePluginInstance`, `string`))\[]<br />`preferAbsolute`: `boolean`<br />`preferRelative`: `boolean`<br />`resolver`: Resolver<br />`restrictions`: ((`string`, `RegExp`))\[]<br />`roots`: `string`\[]<br />`symlinks`: `boolean`<br />`unsafeCache`: `boolean` \| `type`<br />`useSyncFileSystemCalls`: `boolean`</blockquote></details><details><summary>`snapshot`</summary><blockquote><details><summary>`buildDependencies`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details>`immutablePaths`: ((`string`, `RegExp`))\[]<br />`managedPaths`: ((`string`, `RegExp`))\[]<br /><details><summary>`module`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details><details><summary>`resolve`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details><details><summary>`resolveBuildDependencies`</summary><blockquote>`hash`\*: <br />`timestamp`\*: </blockquote></details></blockquote></details>`stats`: `boolean` \| `StatsOptions` \| `"none"` \| `"verbose"` \| `"summary"` \| `"errors-only"` \| `"errors-warnings"` \| `"minimal"` \| `"normal"` \| `"detailed"`<br />`target`: `string` \| `false` \| `string`\[]<br />`watch`: `boolean`<br />`watchOptions`: [`WatchOptions`](#watchoptions)</blockquote></details> | Options object as provided by the user. |

## PresetType

**`union`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L16)_

**values**

`Configuration` \| [`PresetCallback`](#presetcallback)

## WebpackLoader

**`union`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L18)_

**values**

`"mini-css-extract-plugin"` \| `"babel-loader"` \| `"css-minimizer-webpack-plugin"` \| `"css-loader"` \| `"postcss-loader"` \| `"sass-loader"` \| `"less-loader"` \| `"stylus-loader"` \| `"url-loader"` \| `"raw-loader"` \| `"file-loader"`

## WebpackLoaderConfig

**`type`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L31)_

**properties**

| Name     | Type                                                                 | Parent              | Description                                                                                                                                                           |
| -------- | -------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at*`    | **function** (<br />`index`\*: `number`<br />) => `T` \| `undefined` | `RelativeIndexable` | Takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array. |
| `module` | `string`                                                             |                     |                                                                                                                                                                       |

## BuildProps

**`interface`**

configuration properties for compile and run

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L38)_

**properties**

| Name           | Type                                          | Description                                                                                                 |
| -------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `webpack`      | `Configuration` \| `WebpackConfigFn`          | webpack configuration object                                                                                |
| `finalWebpack` | `Configuration` \| `WebpackConfigFn`          |                                                                                                             |
| `presets`      | [`RuleTypes`](#ruletypes)                     | a list of webpack configuration presets from webpack-configs packages                                       |
| `configPath`   | `string`                                      | path to the configuration file e.g : '.storybook'                                                           |
| `distFolder`   | `string`                                      | public output folder for the bundle                                                                         |
| `bundleName`   | `string`                                      | public file name the bundle, by default 'component-controls.js'                                             |
| `staticFolder` | `string`                                      | public output folder for the assets like images                                                             |
| `cssFileName`  | `string`                                      | file name where css styles are exported to load for ssr                                                     |
| `logOptions`   | `Partial`&lt;`LogOptions`>                    | logger options                                                                                              |
| `mode`         | `"none"` \| `"development"` \| `"production"` | Enable production optimizations or development hints.                                                       |
| `loaders`      | [`WebpackLoaderConfig`](#webpackloaderconfig) | loaders custom options shortcut. This can be used for quick options setup instead of using the webpack hook |

## customLoaderOptions

**`function`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L83)_

**parameters**

| Name             | Type                                          |
| ---------------- | --------------------------------------------- |
| `config*`        | [`BuildProps`](#buildprops)                   |
| `loader*`        | [`WebpackLoader`](#webpackloader)             |
| `defaultOptions` | `string` \| `type`                            |
| `returns`        | [`WebpackLoaderConfig`](#webpackloaderconfig) |

## defaultCompileProps

**`interface`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L98)_

**properties**

| Name           | Type                                          | Parent                      | Description                                                                                                 |
| -------------- | --------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `webpack`      | `Configuration` \| `WebpackConfigFn`          | [`BuildProps`](#buildprops) | webpack configuration object                                                                                |
| `finalWebpack` | `Configuration` \| `WebpackConfigFn`          | [`BuildProps`](#buildprops) |                                                                                                             |
| `presets`      | [`RuleTypes`](#ruletypes)                     | [`BuildProps`](#buildprops) | a list of webpack configuration presets from webpack-configs packages                                       |
| `configPath`   | `string`                                      | [`BuildProps`](#buildprops) | path to the configuration file e.g : '.storybook'                                                           |
| `distFolder`   | `string`                                      | [`BuildProps`](#buildprops) | public output folder for the bundle                                                                         |
| `bundleName`   | `string`                                      | [`BuildProps`](#buildprops) | public file name the bundle, by default 'component-controls.js'                                             |
| `staticFolder` | `string`                                      | [`BuildProps`](#buildprops) | public output folder for the assets like images                                                             |
| `cssFileName`  | `string`                                      | [`BuildProps`](#buildprops) | file name where css styles are exported to load for ssr                                                     |
| `logOptions`   | `Partial`&lt;`LogOptions`>                    | [`BuildProps`](#buildprops) | logger options                                                                                              |
| `mode`         | `"none"` \| `"development"` \| `"production"` | [`BuildProps`](#buildprops) | Enable production optimizations or development hints.                                                       |
| `loaders`      | [`WebpackLoaderConfig`](#webpackloaderconfig) | [`BuildProps`](#buildprops) | loaders custom options shortcut. This can be used for quick options setup instead of using the webpack hook |

## WatchOptions

**`interface`**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L102)_

**properties**

| Name               | Type                                | Description                                                                                                                             |
| ------------------ | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregateTimeout` | `number`                            | Delay the rebuilt after the first change. Value is a time in ms.                                                                        |
| `followSymlinks`   | `boolean`                           | Resolve symlinks and watch symlink and real file. This is usually not needed as webpack already resolves symlinks ('resolve.symlinks'). |
| `ignored`          | `string` \| `RegExp` \| `string`\[] | Ignore some files from watching (glob pattern or regexp).                                                                               |
| `poll`             | `number` \| `boolean`               | Enable polling mode for watching.                                                                                                       |
| `stdin`            | `boolean`                           | Stop watching when stdin stream has ended.                                                                                              |

## WatchProps

**`type`**

adds webpack WatchOptions to the Compiler options

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L107)_

**properties**

| Name           | Type                                          | Parent                      | Description                                                                                                 |
| -------------- | --------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `watchOptions` | [`WatchOptions`](#watchoptions)               |                             |                                                                                                             |
| `webpack`      | `Configuration` \| `WebpackConfigFn`          | [`BuildProps`](#buildprops) | webpack configuration object                                                                                |
| `finalWebpack` | `Configuration` \| `WebpackConfigFn`          | [`BuildProps`](#buildprops) |                                                                                                             |
| `presets`      | [`RuleTypes`](#ruletypes)                     | [`BuildProps`](#buildprops) | a list of webpack configuration presets from webpack-configs packages                                       |
| `configPath`   | `string`                                      | [`BuildProps`](#buildprops) | path to the configuration file e.g : '.storybook'                                                           |
| `distFolder`   | `string`                                      | [`BuildProps`](#buildprops) | public output folder for the bundle                                                                         |
| `bundleName`   | `string`                                      | [`BuildProps`](#buildprops) | public file name the bundle, by default 'component-controls.js'                                             |
| `staticFolder` | `string`                                      | [`BuildProps`](#buildprops) | public output folder for the assets like images                                                             |
| `cssFileName`  | `string`                                      | [`BuildProps`](#buildprops) | file name where css styles are exported to load for ssr                                                     |
| `logOptions`   | `Partial`&lt;`LogOptions`>                    | [`BuildProps`](#buildprops) | logger options                                                                                              |
| `mode`         | `"none"` \| `"development"` \| `"production"` | [`BuildProps`](#buildprops) | Enable production optimizations or development hints.                                                       |
| `loaders`      | [`WebpackLoaderConfig`](#webpackloaderconfig) | [`BuildProps`](#buildprops) | loaders custom options shortcut. This can be used for quick options setup instead of using the webpack hook |

## defBundleName

**`string` = "component-controls.js"**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L111)_

## defCssFileName

**`string` = "component-controls.css"**

_defined in [@component-controls/core/core/core/src/build.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/build.ts#L113)_

<!-- END-API-README -->
