# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [ArgUsageLocation](#argusagelocation)
    -   [Documents](#documents)
    -   [SmartControls](#smartcontrols)
    -   [SourceIdentifier](#sourceidentifier)
    -   [Store](#store)
    -   [Components](#storecomponents)
    -   [Packages](#storepackages)
    -   [Stories](#storestories)
    -   [Stories](#stories)
    -   [StoryArgument](#storyargument)
    -   [StoryProps](#storyprops)
    -   [Document](#document)
    -   [Pages](#pages)
    -   [StoreObserver](#storeobserver)
    -   [Story](#story)
    -   [StoryArguments](#storyarguments)
    -   [CURRENT_STORY](#current_story)
    -   [defDocType](#defdoctype)
    -   [dateToLocalString](#datetolocalstring)
    -   [defaultStore](#defaultstore)
    -   [ControlTypes](#controltypes)
    -   [ComponentControlArray](#componentcontrolarray)
    -   [ComponentControlBase](#componentcontrolbase)
    -   [ComponentControlBoolean](#componentcontrolboolean)
    -   [ComponentControlButton](#componentcontrolbutton)
    -   [ComponentControlColor](#componentcontrolcolor)
    -   [ComponentControlData](#componentcontroldata)
    -   [ComponentControlDate](#componentcontroldate)
    -   [ComponentControlFiles](#componentcontrolfiles)
    -   [ComponentControlNumber](#componentcontrolnumber)
    -   [ComponentControlObject](#componentcontrolobject)
    -   [ComponentControlOptions](#componentcontroloptions)
    -   [ComponentControlText](#componentcontroltext)
    -   [ComponentControls](#componentcontrols)
    -   [ComponentControl](#componentcontrol)
    -   [OptionsListType](#optionslisttype)
    -   [OptionsValueType](#optionsvaluetype)
    -   [ComponentInfo](#componentinfo)
    -   [PropType](#proptype)
    -   [PropTypes](#proptypes)
    -   [Component](#storycomponent)
    -   [TypeInformation](#typeinformation)
    -   [TypeValue](#typevalue)
    -   [getComponentName](#getcomponentname)
    -   [PropsInfoExtractorFunction](#propsinfoextractorfunction)
    -   [CodeLocation](#codelocation)
    -   [CodePosition](#codeposition)
    -   [ImportName](#importname)
    -   [Imports](#imports)
    -   [PackageDependencies](#packagedependencies)
    -   [PackageInfo](#packageinfo)
    -   [PackageRepository](#packagerepository)
    -   [PackageDependency](#packagedependency)
    -   [StoryRenderFn](#storyrenderfn)
    -   [defaultExport](#defaultexport)
    -   [PageConfiguration](#pageconfiguration)
    -   [PageLayout](#pagelayout)
    -   [RunOnlyConfiguration](#runonlyconfiguration)
    -   [TabConfiguration](#tabconfiguration)
    -   [ToolbarConfig](#toolbarconfig)
    -   [BuildConfiguration](#buildconfiguration)
    -   [DocType](#doctype)
    -   [PageTabs](#pagetabs)
    -   [PagesConfiguration](#pagesconfiguration)
    -   [PagesOnlyRoutes](#pagesonlyroutes)
    -   [RunConfiguration](#runconfiguration)
    -   [WebpackConfig](#webpackconfig)
    -   [WebpackConfigFn](#webpackconfigfn)
    -   [defaultBuildConfig](#defaultbuildconfig)
    -   [defaultRunConfig](#defaultrunconfig)
    -   [Document](#document-1)
    -   [StoreObserver](#storeobserver-1)
    -   [RunConfiguration](#runconfiguration-1)
    -   [Story](#story-1)
    -   [StoryArguments](#storyarguments-1)
    -   [StoryRenderFn](#storyrenderfn-1)
    -   [DocType](#doctype-1)
    -   [ComponentControl](#componentcontrol-1)
    -   [TypeValue](#typevalue-1)
    -   [PackageDependency](#packagedependency-1)
    -   [PageTabs](#pagetabs-1)
    -   [PagesConfiguration](#pagesconfiguration-1)
    -   [WebpackConfig](#webpackconfig-1)
    -   [PagesOnlyRoutes](#pagesonlyroutes-1)
    -   [BuildConfiguration](#buildconfiguration-1)
    -   [WebpackConfigFn](#webpackconfigfn-1)
    -   [DocType](#doctype-2)
    -   [WebpackConfig](#webpackconfig-2)
    -   [PagesOnlyRoutes](#pagesonlyroutes-2)
    -   [WebpackConfigFn](#webpackconfigfn-2)
    -   [DocType](#doctype-3)

# Overview

Type definitions of the component-controls specification and accompanying utility functions.
Includes definitions for:

-   [Story](https://github.com/ccontrols/component-controls/tree/master/core/core#story)
-   [Stories](https://github.com/ccontrols/component-controls/tree/master/core/core#stories)
-   [ControlTypes](https://github.com/ccontrols/component-controls/tree/master/core/core#controltypes)
-   [ComponentControl](https://github.com/ccontrols/component-controls/tree/master/core/core#componentcontrol)
-   [PropTypes](https://github.com/ccontrols/component-controls/tree/master/core/core#proptypes)
-   and more...

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/core --save-dev
```

# API

<tsdoc-typescript entry="./src/document.ts,./src/controls.ts,./src/components.ts,./src/propsInfo.ts,./src/utility.ts,./src/configuration.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## ArgUsageLocation

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L12)_



### properties

| Name        | Type                                  | Description                                                                                                                                                          |
| ----------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loc*`      | [CodeLocation](#codelocation)         | where in the story source code is the argument used code location is relative to the start of the story                                                              |
| `name`      | [SourceIdentifier](#sourceidentifier) | optional name for the usage of the argument example: export const story = ({ value }) => &lt;Story value={{ age: value }} />; in this example the name will be 'age' |
| `shorthand` | boolean                               | true if the property is a 'shorthand'. { prop: value } - not a shorthand. { prop } - a shorthand.                                                                    |

## Documents

list of story files, or groups

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L289)_

`title`\*: string: [Document](#document)

## SmartControls

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L62)_



### properties

| Name      | Type      | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| `exclude` | string\[] | exclude props only                               |
| `include` | string\[] | include props only                               |
| `smart`   | boolean   | whether to generate "smart" controls for a story |

## SourceIdentifier

an identifier/variable.argument in the source code

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L8)_



### properties

| Name    | Type                          | Description |
| ------- | ----------------------------- | ----------- |
| `loc`   | [CodeLocation](#codelocation) |             |
| `name*` | string                        |             |

## Store

store of stories information in memory after the loader is applied

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L315)_



### properties

| Name              | Type                                                                | Description                                                                                     |
| ----------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `addObserver*`    | **function** (`observer`\*: [StoreObserver](#storeobserver)): void; | storybook integration notifiers                                                                 |
| `components*`     | [Components](#storecomponents)                                 | list of components used in stories                                                              |
| `config`          | [RunConfiguration](#runconfiguration)                               | global configuration for config file                                                            |
| `docs*`           | [Documents](#documents)                                             | list of story files, or groups                                                                  |
| `packages*`       | [Packages](#storepackages)                                     | list of package.json files and their data used by the components and the stories of the project |
| `removeObserver*` | **function** (`observer`\*: [StoreObserver](#storeobserver)): void; |                                                                                                 |
| `stories*`        | [Stories](#storestories)                                       | list of stories                                                                                 |
| `updateStory*`    | **function** (`story`\*: [Story](#story)): void;                    | update store, for example controls or state                                                     |

## Components

list of components used in stories

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L282)_

`fileName`\*: string: [Component](#storycomponent)

## Packages

list of repositories

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L305)_

`id`\*: string: [PackageInfo](#packageinfo)

## Stories

list of stories

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L298)_

`id`\*: string: [Story](#story)

## Stories

map of stories. The id is compatible with storybook's story ids

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L162)_

`id`\*: string: [Story](#story)

## StoryArgument

arguments passed to the 'story' function, extracted by an AST loader

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L36)_



### properties

| Name     | Type                                        | Description                                                                                |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `loc`    | [CodeLocation](#codelocation)               | location of the argument declaration, relative to the story source code                    |
| `name`   | string                                      | the original name of the argument                                                          |
| `usage`  | [ArgUsageLocation](#argusagelocation)\[]    | list of locations where the argument is used in the body of the story                      |
| `value*` | string \| [StoryArguments](#storyarguments) | either the name used (or a variable alias), or an array of sub-arguments ({ name: alias }) |

## StoryProps

story prooperties that can be inherited from the document, or each story can have its properties

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L82)_



### properties

| Name            | Type                                    | Description                                                                                |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------------------------ |
| `component`     | string \| object                        | id for component associated with the story                                                 |
| `controls`      | [ComponentControls](#componentcontrols) | object of key/value pairs specifying the controls for the story                            |
| `decorators`    | [StoryRenderFn](#storyrenderfn)\[]      | array of wrapper functions (decorators) to be called when rendering each individual story. |
| `smartControls` | [SmartControls](#smartcontrols)         | "smart" controls options                                                                   |
| `subcomponents` | \[key: string]: string \| object        | multiple components option                                                                 |

## Document

A documentation file's metadata.
For MDX files, fromtmatter is used to declare the document properties.
For ESM (ES Modules) documentation files, the default export is used.

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L172)_

### properties

| Name                | Type                      | Description                                                                                                                                                                                  |
| ------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MDXPage`           | any                       | for MDX documents, this is an MDXContent function, to be rendered inside a MDXProvider                                                                                                       |
| `author`            | string                    | document author                                                                                                                                                                              |
| `componentsLookup*` | \[name: string]: string   | lookup into the global store.components since multiple components of the same name can be used example: \['Button']: 'c:/myapp/Button.tsx'                                                   |
| `date`              | [Date](#date)             |  optional date the document was created. If not assigned, the instrumentation process will use birthtime                                                                                     |
| `dateModified`      | [Date](#date)             |  optional date the document was last modified. If not assigned, the instrumentation process will use mtime                                                                                   |
| `description`       | string                    |  documentation file description                                                                                                                                                              |
| `draft`             | boolean                   | if set to true, the document will be hidden in production builds.                                                                                                                            |
| `fileName`          | string                    | file name of the file of stories                                                                                                                                                             |
| `isMDXComponent`    | boolean                   | custom prop set by mdxjs                                                                                                                                                                     |
| `layout`            | [PageLayout](#pagelayout) | page layout - sidebars, full width                                                                                                                                                           |
| `order`             | number                    | document order, used to sort documents within the same parent                                                                                                                                |
| `package`           | string                    | lookup into the global store of PackageInfo package.json                                                                                                                                     |
| `route`             | string                    | if provided, will be used as the route for the page. if not provided, the title in lowercase will be used as the route                                                                       |
| `source`            | string                    | source code of the entire file of stories                                                                                                                                                    |
| `stories`           | string\[]                 | list of story ids contained in the document.                                                                                                                                                 |
| `tags`              | string\[]                 |  comma-separated list of document tags, used for search                                                                                                                                      |
| `title*`            | string                    | title of the document. If no 'route' parameter is specifified, the title is used to generate the document url. This is the only required field, to show the document in the menu structures. |
| `type`              | [DocType](#doctype)       | document type - blogs, pages, stories and even custom ones. By default - story                                                                                                               |
| `StoryProps`        | [StoryProps](#storyprops) |                                                                                                                                                                                              |

## Pages

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L293)_

[Document](#document)\[]

## StoreObserver

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L309)_

**function** (`story`: [Story](#story)): void;

### parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| `story`   | [Story](#story) |             |
| `returns` | void            |             |

## Story

Story interface - usually extracted by the AST instrumenting loader

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L113)_

### properties

| Name          | Type                              | Description                                                                                           |
| ------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `arguments`   | [StoryArguments](#storyarguments) | arguments passed to the story function. eg \`export const story = props => &lt;Story {...props} />;\` |
| `description` | string                            | story extended description. can use markdown.                                                         |
| `doc`         | string                            | title of the file/group of stories                                                                    |
| `id`          | string                            | id of the story                                                                                       |
| `loc`         | [CodeLocation](#codelocation)     | location in the source file of the story definition                                                   |
| `name*`       | string                            | name of the Story.                                                                                    |
| `renderFn`    | [StoryRenderFn](#storyrenderfn)   | render function for the story                                                                         |
| `source`      | string                            | the source code of the story, extracted by the AST instrumenting loaders                              |
| `subtitle`    | string                            | optional story subtitle property                                                                      |
| `StoryProps`  | [StoryProps](#storyprops)         |                                                                                                       |

## StoryArguments

list of story arguments. Each argument can be a deconstructed argument of itself
the first argument are the control 'values'

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L60)_

[StoryArgument](#storyargument)\[]

## CURRENT_STORY

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L311)_



## defDocType

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L166)_



## dateToLocalString

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L272)_

**function** dateToLocalString(`date`: [Date](#date)): string;

### parameters

| Name      | Type          | Description |
| --------- | ------------- | ----------- |
| `date`    | [Date](#date) |             |
| `returns` | string        |             |

## defaultStore

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L350)_



### properties

| Name              | Type                                                        | Description |
| ----------------- | ----------------------------------------------------------- | ----------- |
| `components*`     |                                                             |             |
| `docs*`           |                                                             |             |
| `packages*`       |                                                             |             |
| `stories*`        |                                                             |             |
| `addObserver*`    | **function** addObserver(): void;                           |             |
| `removeObserver*` | **function** removeObserver(): void;                        |             |
| `updateStory*`    | **function** updateStory(`story`\*: [Story](#story)): void; |             |

## ControlTypes

Control field types
examples are provided for the different types:

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L6)_



### properties

| Name       | Type                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ARRAY*`   | **function** ARRAY   | arrayItems: {   type: ControlTypes.ARRAY,   label: 'Items',   rowType: {     name: { type: ControlTypes.TEXT },   },   value: \[{ name: 'Laptop' }, { name: 'Book' }, { name: 'Whiskey' }], },                                                                                                                                                                                                                                                                                                                                                                          |
| `BOOLEAN*` | **function** BOOLEAN | nice: {  type: ControlTypes.BOOLEAN,  label: 'Nice',  value: true, },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `BUTTON*`  | **function** BUTTON  | button: {  type: ControlTypes.BUTTON,   onClick: () => {    ... code to modify some variables  } },                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `COLOR*`   | **function** COLOR   | color: {   type: ControlTypes.COLOR,   value: '#000000', },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `DATE*`    | **function** DATE    |  birthday: {   type: ControlTypes.DATE,   label: 'Birthday',   value: new Date(),  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `FILES*`   | **function** FILES   | images: {   type: ControlTypes.FILES,   label: 'Happy Picture',   accept: 'image/\*',   value: \[     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',   ], }, |
| `NUMBER*`  | **function** NUMBER  |  age: {   type: ControlTypes.NUMBER,   label: 'Age',   value: 78,   range: true,   min: 0,   max: 90,   step: 5, },                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `OBJECT*`  | **function** OBJECT  |  style: {    type: ControlTypes.OBJECT,    label: 'Styles',    value: {      // do not randomize the border style      border: { type: ControlTypes.TEXT, value: '2px dashed silver', data: null },      borderRadius: { type: ControlTypes.NUMBER, value: 10 },      padding: { type: ControlTypes.NUMBER, value: 10 },    },  }                                                                                                                                                                                                                                       |
| `OPTIONS*` | **function** OPTIONS | fruit: {   type: ControlTypes.OPTIONS,   label: 'Fruit',   value: 'apple',   options: {     Apple: 'apple',     Banana: 'banana',     Cherry: 'cherry',   }, },                                                                                                                                                                                                                                                                                                                                                                                                         |
| `TEXT*`    | **function** TEXT    | userName: {   type: ControlTypes.TEXT,   label: 'Name',   value: 'Storyteller', },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## ComponentControlArray

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L256)_

** extends ComponentControlBase&lt;\[key: string]: any\[]>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | \[key: string]: any\[]                                         | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `editLabel`    | string                                                         | the label for the editor button                                                                                                                        |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `rowType*`     | [ComponentControls](#componentcontrols)                        | type of the items in each row of the array                                                                                                             |
| `type*`        | [ARRAY](#array)                                                |                                                                                                                                                        |
| `value`        | \[key: string]: any\[]                                         | a default value for the property                                                                                                                       |

## ComponentControlBase

Base inteface for creating control types
All new property typs should extend this interface and support

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L140)_



### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` |                                                                | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `type*`        | [ControlTypes](#controltypes)                                  |                                                                                                                                                        |
| `value`        |                                                                | a default value for the property                                                                                                                       |

## ComponentControlBoolean

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L223)_

** extends ComponentControlBase&lt;boolean>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | boolean                                                        | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `type*`        | [BOOLEAN](#boolean)                                            |                                                                                                                                                        |
| `value`        | boolean                                                        | a default value for the property                                                                                                                       |

## ComponentControlButton

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L278)_

** extends ComponentControlBase&lt;>**

### properties

| Name           | Type                                                                              | Description                                                                                                                                            |
| -------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false                    | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` |                                                                                   | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                                            | full text property description. can use markdown.                                                                                                      |
| `groupId`      | string                                                                            | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                                           | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                                            | label to display next to the field editor by default uses the property name itself                                                                     |
| `onClick`      | **function** (`prop`\*: [ComponentControlButton](#componentcontrolbutton)): void; | for button type fields, an onClick handler                                                                                                             |
| `order`        | number                                                                            | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                                           | visually display the control property as required                                                                                                      |
| `type*`        | [BUTTON](#button)                                                                 |                                                                                                                                                        |
| `value`        |                                                                                   | a default value for the property                                                                                                                       |

## ComponentControlColor

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L227)_

** extends ComponentControlBase&lt;string>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | string                                                         | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `type*`        | [COLOR](#color)                                                |                                                                                                                                                        |
| `value`        | string                                                         | a default value for the property                                                                                                                       |

## ComponentControlData

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L118)_



### properties

| Name      | Type                | Description                                                                                                                    |
| --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `name*`   | string              | 'name' for generating random data from faker.js  usually comprised of two parts, separated by a dot  example 'internet.avatar' |
| `options` | \[key: string]: any | options to be passed to the random data generators example {  min: 10, max: 20 }                                               |

## ComponentControlDate

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L231)_

** extends ComponentControlBase&lt;[Date](#date)>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `datePicker`   | boolean                                                        | whether to display a date picker (calendar). default: true                                                                                             |
| `defaultValue` | [Date](#date)                                                  | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `timePicker`   | boolean                                                        | whether to display a time picker (calendar). default: true                                                                                             |
| `type*`        | [DATE](#date)                                                  |                                                                                                                                                        |
| `value`        | [Date](#date)                                                  | a default value for the property                                                                                                                       |

## ComponentControlFiles

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L247)_

** extends ComponentControlBase&lt;string\[]>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accept`       | string                                                         | type of files to accept user to open ex 'image/\*',                                                                                                    |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | string\[]                                                      | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `type*`        | [FILES](#files)                                                |                                                                                                                                                        |
| `value`        | string\[]                                                      | a default value for the property                                                                                                                       |

## ComponentControlNumber

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L328)_

** extends ComponentControlBase&lt;number>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | number                                                         | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `max`          | number                                                         | maximum allowed value for numeric property                                                                                                             |
| `min`          | number                                                         | minimum allowed value for numeric property                                                                                                             |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `range`        | boolean                                                        | if true, will display a range type slider editor                                                                                                       |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `step`         | number                                                         | stepper for numeric editor /i nc/dec value                                                                                                             |
| `type*`        | [NUMBER](#number)                                              |                                                                                                                                                        |
| `value`        | number                                                         | a default value for the property                                                                                                                       |

## ComponentControlObject

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L269)_

** extends ComponentControlBase&lt;[ComponentControls](#componentcontrols)>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | [ComponentControls](#componentcontrols)                        | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `editLabel`    | string                                                         | the label for the editor button                                                                                                                        |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `type*`        | [OBJECT](#object)                                              |                                                                                                                                                        |
| `value`        | [ComponentControls](#componentcontrols)                        | a default value for the property                                                                                                                       |

## ComponentControlOptions

list of options can be
1\. key-value pair object: in format { label: value }
2\. array of strings
3\. array of key-value pair objects

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L309)_

** extends ComponentControlBase&lt;OptionsValueType&lt;>>**

### properties

| Name           | Type                                                                                 | Description                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false                       | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | OptionsValueType&lt;>                                                                | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                                               | full text property description. can use markdown.                                                                                                      |
| `display`      | 'select' \| 'multi-select' \| 'radio' \| 'inline-radio' \| 'check' \| 'inline-check' | how to render selecting the options: default is 'select'                                                                                               |
| `groupId`      | string                                                                               | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                                              | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                                               | label to display next to the field editor by default uses the property name itself                                                                     |
| `options*`     | OptionsListType&lt;>                                                                 |                                                                                                                                                        |
| `order`        | number                                                                               | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `required`     | boolean                                                                              | visually display the control property as required                                                                                                      |
| `type*`        | [OPTIONS](#options)                                                                  |                                                                                                                                                        |
| `value`        | OptionsValueType&lt;>                                                                | a default value for the property                                                                                                                       |

## ComponentControlText

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L198)_

** extends ComponentControlBase&lt;string>**

### properties

| Name           | Type                                                           | Description                                                                                                                                            |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`         | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js data can be set to false, if the control should not be randomized |
| `defaultValue` | string                                                         | default value is automatically set at run-time, from the value                                                                                         |
| `description`  | string                                                         | full text property description. can use markdown.                                                                                                      |
| `escapeValue`  | boolean                                                        | allows to receive escaped string values to help prevent XSS attacks by default - false                                                                 |
| `groupId`      | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                               |
| `hidden`       | boolean                                                        | hide the property editor for this property will only use the value                                                                                     |
| `label`        | string                                                         | label to display next to the field editor by default uses the property name itself                                                                     |
| `order`        | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)               |
| `placeholder`  | string                                                         | placeholder for empty properties either undefined initial value or user clears the field                                                               |
| `required`     | boolean                                                        | visually display the control property as required                                                                                                      |
| `rows`         | number                                                         | number of rows for a TextArea field for longer text by default, only 1 row = means a Input field \> 1 rows = an area field                             |
| `type*`        | [TEXT](#text)                                                  |                                                                                                                                                        |
| `value`        | string                                                         | a default value for the property                                                                                                                       |

## ComponentControls

ComponentControls are defined in key value pairs
the name of the property is the key
and the value is the ComponentControl

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L381)_

`name`\*: string: [ComponentControl](#componentcontrol)

## ComponentControl

ComponentControl is a either an object of property settings
or a shortcut can be used:
 properties: {
  text: 'Hello',
},

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L364)_

[ComponentControlText](#componentcontroltext) \| [ComponentControlBoolean](#componentcontrolboolean) \| [ComponentControlColor](#componentcontrolcolor) \| [ComponentControlDate](#componentcontroldate) \| [ComponentControlObject](#componentcontrolobject) \| [ComponentControlButton](#componentcontrolbutton) \| [ComponentControlOptions](#componentcontroloptions) \| [ComponentControlNumber](#componentcontrolnumber) \| [ComponentControlArray](#componentcontrolarray) \| [ComponentControlFiles](#componentcontrolfiles)

## OptionsListType

value/label pairs or array of OptionsValueType

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L298)_

\[key: string]:  \| OptionsValueType&lt;>\[]

## OptionsValueType

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L288)_

 | number | string\[] \| number\[] \| **label**: string**value**: any

## ComponentInfo

DocGen type onfo generated for a compoennt

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L76)_



### properties

| Name           | Type                    | Description           |
| -------------- | ----------------------- | --------------------- |
| `description`  | string                  | optional description  |
| `displayName*` | string                  | name of the component |
| `props*`       | [PropTypes](#proptypes) | component props       |

## PropType

docgen generated property types
mapped to common types to be consumed by component-controls
check props-info packages for implementations

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L47)_



### properties

| Name           | Type                                | Description                           |
| -------------- | ----------------------------------- | ------------------------------------- |
| `defaultValue` | any                                 | default value for the property        |
| `description`  | string                              | description of the property           |
| `parentName`   | string                              | name of the parent/inherited property |
| `type*`        | [TypeInformation](#typeinformation) | propertty type                        |

## PropTypes

list of properties of the component

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L69)_

`key`\*: string: [PropType](#proptype)

## Component

component specified for stories or story files

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L96)_



### properties

| Name           | Type                               | Description                                                                                                                                                                                                                                |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `from`         | string                             | imported from                                                                                                                                                                                                                              |
| `importedName` | 'default' \| 'namespace' \| string | imported name ex: \- default import import Button from 'buttons'; \- namespace import import \* as Button from 'buttons'; \- named import import { Button } from 'buttons'; \- named alias import import { Btn as Button } from 'buttons'; |
| `imports`      | [Imports](#imports)                | list of external imports                                                                                                                                                                                                                   |
| `info`         | [ComponentInfo](#componentinfo)    | docgen generated component info                                                                                                                                                                                                            |
| `loc`          | [CodeLocation](#codelocation)      | location of the import statement in the source code file                                                                                                                                                                                   |
| `name*`        | string                             | name of the component as used in the fiel                                                                                                                                                                                                  |
| `package`      | string                             | lookup into the global store of PackageInfo package.json                                                                                                                                                                                   |
| `request`      | string                             | resolved import request                                                                                                                                                                                                                    |
| `source`       | string                             | the source code of the component file, extracted by the AST instrumenting loaders. Can also be overriden manually.                                                                                                                         |

## TypeInformation

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L17)_



### properties

| Name        | Type                                          | Description                                                                   |
| ----------- | --------------------------------------------- | ----------------------------------------------------------------------------- |
| `arguments` | [TypeInformation](#typeinformation)\[] \| any | argument types of function                                                    |
| `name*`     | [TypeValue](#typevalue)                       |                                                                               |
| `raw`       | string                                        | raw type code                                                                 |
| `required`  | boolean                                       | is the property required                                                      |
| `value`     | [TypeInformation](#typeinformation)\[] \| any | type value elements of enum, array, fields of object return value of function |

## TypeValue

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L3)_

'any' | 'boolean' | 'number' | 'string' | 'array' | 'object' | 'enum' | 'union' | 'literal' | 'symbol' | 'function' | string

## getComponentName

given a component, return its name

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L147)_

**function** getComponentName(`component`\*: any): string | undefined;

### parameters

| Name         | Type                | Description                                                                                |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------ |
| `component*` | any                 | a string component name, or a component class, with a name or displayName static property  |
| `returns`    | string \| undefined |                                                                                            |

## PropsInfoExtractorFunction

callback function to extract props info table  - ie docgen type libraries
used to extract displayName, and props tables for a component

_defined in [@component-controls/core/src/propsInfo.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/propsInfo.ts#L13)_

**function** (`fileName`\*: string, `componentName`: string, `source`: string): Promise&lt;[ComponentInfo](#componentinfo) | undefined> | [ComponentInfo](#componentinfo) | undefined;

### parameters

| Name            | Type                                                                                                     | Description |
| --------------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `fileName*`     | string                                                                                                   |             |
| `componentName` | string                                                                                                   |             |
| `source`        | string                                                                                                   |             |
| `returns`       | Promise&lt;[ComponentInfo](#componentinfo) \| undefined> \| [ComponentInfo](#componentinfo) \| undefined |             |

## CodeLocation

location in the source code of a story or part of it
ie. arguments, usage of arguments

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L16)_



### properties

| Name     | Type                          | Description |
| -------- | ----------------------------- | ----------- |
| `end*`   | [CodePosition](#codeposition) |             |
| `start*` | [CodePosition](#codeposition) |             |

## CodePosition

position in the stories source code
usually taken from AST traverse loaders

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L6)_



### properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `column*` | number |             |
| `line*`   | number |             |

## ImportName

an import name

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L106)_



### properties

| Name            | Type   | Description                                                           |
| --------------- | ------ | --------------------------------------------------------------------- |
| `importedName*` | string | alias imported as. If a default import, the string 'default' is here. |
| `name*`         | string | the imported name from the import file                                |

## Imports

imports - library/file as key and the imported names as an array

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L120)_

`key`\*: string: [ImportName](#importname)\[]

## PackageDependencies

list of dependencies - package name as the key and the version as the value

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L49)_

`name`\*: string: [PackageDependency](#packagedependency)

## PackageInfo

package.json
information about the repository of the stories and components

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L57)_



### properties

| Name               | Type                                        | Description                                                                   |
| ------------------ | ------------------------------------------- | ----------------------------------------------------------------------------- |
| `dependencies`     | [PackageDependencies](#packagedependencies) | extracted package.json 'dependencies' section                                 |
| `devDependencies`  | [PackageDependencies](#packagedependencies) | extracted package.json 'devDependencies' section                              |
| `fileHash*`        | string                                      | file name hash of package.json                                                |
| `name`             | string                                      | package name                                                                  |
| `peerDependencies` | [PackageDependencies](#packagedependencies) | extracted package.json 'peerDependencies' section                             |
| `repository*`      | [PackageRepository](#packagerepository)     | repository information extracted from the "repository" field in package.json. |
| `version`          | string                                      | package version                                                               |

## PackageRepository

repository information from package.json

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L24)_



### properties

| Name     | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| `browse` | string | link for browsing the file              |
| `docs`   | string | link for project readme                 |
| `issues` | string | link for filing issues with the project |

## PackageDependency

dependecy string - the package version number

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L44)_

string

## StoryRenderFn

story render function

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L98)_

**function** (`controlValues`\*: \[key: string]: any, `context`: any): any;

### parameters

| Name             | Type                | Description |
| ---------------- | ------------------- | ----------- |
| `controlValues*` | \[key: string]: any |             |
| `context`        | any                 |             |
| `returns`        | any                 |             |

## defaultExport

default export keyword

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L127)_



## PageConfiguration

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L46)_



### properties

| Name         | Type                                    | Description                                                                                                                   |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `basePath`   | string                                  | base url path for the page                                                                                                    |
| `container`  | [ComponentType](#componenttype) \| null | page container react component                                                                                                |
| `indexHome`  | boolean                                 | whether to have an index home page for the doc type. if false, will show the first document of the doc type as the home page. |
| `label`      | string                                  | label - used for menu labels                                                                                                  |
| `layout`     | [PageLayout](#pagelayout)               | page layout - sidebars, full width                                                                                            |
| `storyPaths` | boolean                                 | if true, generate story-based paths. This is for documents with a navSidebar that would allow selection of specific stories.  |
| `tabs`       | [PageTabs](#pagetabs)                   | tabs configuration for story-type pages                                                                                       |
| `topMenu`    | boolean                                 | whether to add to the top navigation menu                                                                                     |

## PageLayout

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L32)_



### properties

| Name             | Type    | Description                                                                    |
| ---------------- | ------- | ------------------------------------------------------------------------------ |
| `contextSidebar` | boolean | whether to add conext sidebar to navigate the sections of the current document |
| `fullPage`       | boolean | whether to take a fullpage theme option                                        |
| `navSidebar`     | boolean | whether to add navigation sidebar to the page                                  |

## RunOnlyConfiguration

global configuration used at build time
stored in a file named main.js/main.ts

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L145)_



### properties

| Name              | Type                                                 | Description                                                                                                                                                                          |
| ----------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `analytics`       | any                                                  | analytics options                                                                                                                                                                    |
| `author`          | string                                               | author: Default is "@component-controls"                                                                                                                                             |
| `components`      | Record&lt;string, any>                               | custom props to components ex: components: { story:{ wrapper: 'iframe' } },                                                                                                          |
| `decorators`      | [StoryRenderFn](#storyrenderfn)\[]                   | story decorator functions - used to wrap stories example: \[story => &lt;ThemeProvider>{story()}&lt;/ThemeProvider>]                                                                 |
| `pages`           | [PagesConfiguration](#pagesconfiguration)            | page types configurations                                                                                                                                                            |
| `siteDescription` | string                                               | site description. siteDescription: Default is "Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site." |
| `siteHeadline`    | string                                               | Site headline. Default is "Component controls gatsby"                                                                                                                                |
| `siteImage`       | string                                               | link to site image                                                                                                                                                                   |
| `siteLanguage`    | string                                               | site language, Deault is "en"                                                                                                                                                        |
| `siteTitle`       | string                                               | standalone site title. Default is "Component controls"                                                                                                                               |
| `siteTitleAlt`    | string                                               | site alt for images. Default is "Component controls - https&#x3A;//github.com/ccontrols/component-controls"                                                                          |
| `siteUrl`         | string                                               | Deployed site url. Default is "https&#x3A;//component-controls-gatsby.netlify.app"                                                                                                   |
| `storySort`       | **function** (`a`\*: string, `b`\*: string): number; | story sorting function                                                                                                                                                               |
| `theme`           | \[key: string]: any                                  | theme-ui theme configuration                                                                                                                                                         |
| `toolbar`         | [ToolbarConfig](#toolbarconfig)                      | custom toolbar items                                                                                                                                                                 |

## TabConfiguration

story type pages can have multiple tabs with separate page configurations.

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L9)_



### properties

| Name     | Type                                                    | Description                                                           |
| -------- | ------------------------------------------------------- | --------------------------------------------------------------------- |
| `render` | **function** (`props`\*: any): [ReactNode](#reactnode); | render function, returns a react component                            |
| `route`  | string                                                  | tab route string                                                      |
| `title*` | string                                                  | title will be used as tab caption                                     |
| `type`   | string                                                  | page container type - a key into the component-controls/pages package |

## ToolbarConfig

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L130)_



### properties

| Name    | Type                        | Description              |
| ------- | --------------------------- | ------------------------ |
| `left`  | [ActionItems](#actionitems) | left side toolbar items  |
| `right` | [ActionItems](#actionitems) | right side toolbar items |

## BuildConfiguration

global configuration used at build time
stored in a file named main.js/main.ts

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L107)_

page types that are considered as categories fields as well

**categories**: [DocType](#doctype)\[]

**finalWebpack**: [WebpackConfig](#webpackconfig)

base url path for API documentation pages. Default is "docs/"

**pages**: [PagesOnlyRoutes](#pagesonlyroutes)

wild card search string for the stories
internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob
example: "./stories/

**stories**: string\[]

custom webpack configuration setup. One or the other will be used

**webpack**: [WebpackConfig](#webpackconfig)

## DocType

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L30)_

'story' | 'blog' | 'page' | 'tags' | 'author' | string

## PageTabs

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L28)_

[TabConfiguration](#tabconfiguration)\[]

## PagesConfiguration

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L88)_

Record&lt;

[DocType](#doctype)

, 

[PageConfiguration](#pageconfiguration)

>

## PagesOnlyRoutes

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L96)_

Record&lt;

[DocType](#doctype)

, 

### properties

| Name   | Type                                                                         | Description |
| ------ | ---------------------------------------------------------------------------- | ----------- |
| `Pick` | Pick&lt;[PageConfiguration](#pageconfiguration), 'basePath' \| 'storyPaths'> |             |
| `tabs` | Pick&lt;[TabConfiguration](#tabconfiguration), 'route'>\[]                   |             |

>

## RunConfiguration

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L224)_

### properties

| Name                   | Type                                                        | Description |
| ---------------------- | ----------------------------------------------------------- | ----------- |
| `RunOnlyConfiguration` | [RunOnlyConfiguration](#runonlyconfiguration)               |             |
| `Omit`                 | Omit&lt;[BuildConfiguration](#buildconfiguration), 'pages'> |             |

## WebpackConfig

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L94)_

[WebpackConfiguration](#webpackconfiguration) \| [WebpackConfigFn](#webpackconfigfn)

## WebpackConfigFn

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L90)_

**function** (`config`\*: [WebpackConfiguration](#webpackconfiguration), `options`: any): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name      | Type                                          | Description |
| --------- | --------------------------------------------- | ----------- |
| `config*` | [WebpackConfiguration](#webpackconfiguration) |             |
| `options` | any                                           |             |
| `returns` | [WebpackConfiguration](#webpackconfiguration) |             |

## defaultBuildConfig

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L271)_



### properties

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `categories*` | string\[] |             |
| `pages*`      | object    |             |

## defaultRunConfig

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L227)_



### properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| `author*`          | string |             |
| `siteDescription*` | string |             |
| `siteHeadline*`    | string |             |
| `siteLanguage*`    | string |             |
| `siteTitle*`       | string |             |
| `siteTitleAlt*`    | string |             |
| `siteUrl*`         | string |             |
| `pages*`           | object |             |

## Document

A documentation file's metadata.
For MDX files, fromtmatter is used to declare the document properties.
For ESM (ES Modules) documentation files, the default export is used.

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L172)_

### properties

| Name                | Type                      | Description                                                                                                                                                                                  |
| ------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MDXPage`           | any                       | for MDX documents, this is an MDXContent function, to be rendered inside a MDXProvider                                                                                                       |
| `author`            | string                    | document author                                                                                                                                                                              |
| `componentsLookup*` | \[name: string]: string   | lookup into the global store.components since multiple components of the same name can be used example: \['Button']: 'c:/myapp/Button.tsx'                                                   |
| `date`              | [Date](#date)             |  optional date the document was created. If not assigned, the instrumentation process will use birthtime                                                                                     |
| `dateModified`      | [Date](#date)             |  optional date the document was last modified. If not assigned, the instrumentation process will use mtime                                                                                   |
| `description`       | string                    |  documentation file description                                                                                                                                                              |
| `draft`             | boolean                   | if set to true, the document will be hidden in production builds.                                                                                                                            |
| `fileName`          | string                    | file name of the file of stories                                                                                                                                                             |
| `isMDXComponent`    | boolean                   | custom prop set by mdxjs                                                                                                                                                                     |
| `layout`            | [PageLayout](#pagelayout) | page layout - sidebars, full width                                                                                                                                                           |
| `order`             | number                    | document order, used to sort documents within the same parent                                                                                                                                |
| `package`           | string                    | lookup into the global store of PackageInfo package.json                                                                                                                                     |
| `route`             | string                    | if provided, will be used as the route for the page. if not provided, the title in lowercase will be used as the route                                                                       |
| `source`            | string                    | source code of the entire file of stories                                                                                                                                                    |
| `stories`           | string\[]                 | list of story ids contained in the document.                                                                                                                                                 |
| `tags`              | string\[]                 |  comma-separated list of document tags, used for search                                                                                                                                      |
| `title*`            | string                    | title of the document. If no 'route' parameter is specifified, the title is used to generate the document url. This is the only required field, to show the document in the menu structures. |
| `type`              | [DocType](#doctype)       | document type - blogs, pages, stories and even custom ones. By default - story                                                                                                               |
| `StoryProps`        | [StoryProps](#storyprops) |                                                                                                                                                                                              |

## StoreObserver

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L309)_

**function** (`story`: [Story](#story)): void;

### parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| `story`   | [Story](#story) |             |
| `returns` | void            |             |

## RunConfiguration

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L224)_

### properties

| Name                   | Type                                                        | Description |
| ---------------------- | ----------------------------------------------------------- | ----------- |
| `RunOnlyConfiguration` | [RunOnlyConfiguration](#runonlyconfiguration)               |             |
| `Omit`                 | Omit&lt;[BuildConfiguration](#buildconfiguration), 'pages'> |             |

## Story

Story interface - usually extracted by the AST instrumenting loader

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L113)_

### properties

| Name          | Type                              | Description                                                                                           |
| ------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `arguments`   | [StoryArguments](#storyarguments) | arguments passed to the story function. eg \`export const story = props => &lt;Story {...props} />;\` |
| `description` | string                            | story extended description. can use markdown.                                                         |
| `doc`         | string                            | title of the file/group of stories                                                                    |
| `id`          | string                            | id of the story                                                                                       |
| `loc`         | [CodeLocation](#codelocation)     | location in the source file of the story definition                                                   |
| `name*`       | string                            | name of the Story.                                                                                    |
| `renderFn`    | [StoryRenderFn](#storyrenderfn)   | render function for the story                                                                         |
| `source`      | string                            | the source code of the story, extracted by the AST instrumenting loaders                              |
| `subtitle`    | string                            | optional story subtitle property                                                                      |
| `StoryProps`  | [StoryProps](#storyprops)         |                                                                                                       |

## StoryArguments

list of story arguments. Each argument can be a deconstructed argument of itself
the first argument are the control 'values'

_defined in [@component-controls/core/src/document.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/document.ts#L60)_

[StoryArgument](#storyargument)\[]

## StoryRenderFn

story render function

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L98)_

**function** (`controlValues`\*: \[key: string]: any, `context`: any): any;

### parameters

| Name             | Type                | Description |
| ---------------- | ------------------- | ----------- |
| `controlValues*` | \[key: string]: any |             |
| `context`        | any                 |             |
| `returns`        | any                 |             |

## DocType

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L30)_

'story' | 'blog' | 'page' | 'tags' | 'author' | string

## ComponentControl

ComponentControl is a either an object of property settings
or a shortcut can be used:
 properties: {
  text: 'Hello',
},

_defined in [@component-controls/core/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/controls.ts#L364)_

[ComponentControlText](#componentcontroltext) \| [ComponentControlBoolean](#componentcontrolboolean) \| [ComponentControlColor](#componentcontrolcolor) \| [ComponentControlDate](#componentcontroldate) \| [ComponentControlObject](#componentcontrolobject) \| [ComponentControlButton](#componentcontrolbutton) \| [ComponentControlOptions](#componentcontroloptions) \| [ComponentControlNumber](#componentcontrolnumber) \| [ComponentControlArray](#componentcontrolarray) \| [ComponentControlFiles](#componentcontrolfiles)

## TypeValue

_defined in [@component-controls/core/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/components.ts#L3)_

'any' | 'boolean' | 'number' | 'string' | 'array' | 'object' | 'enum' | 'union' | 'literal' | 'symbol' | 'function' | string

## PackageDependency

dependecy string - the package version number

_defined in [@component-controls/core/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/utility.ts#L44)_

string

## PageTabs

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L28)_

[TabConfiguration](#tabconfiguration)\[]

## PagesConfiguration

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L88)_

Record&lt;

[DocType](#doctype)

, 

[PageConfiguration](#pageconfiguration)

>

## WebpackConfig

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L94)_

[WebpackConfiguration](#webpackconfiguration) \| [WebpackConfigFn](#webpackconfigfn)

## PagesOnlyRoutes

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L96)_

Record&lt;

[DocType](#doctype)

, 

### properties

| Name   | Type                                                                         | Description |
| ------ | ---------------------------------------------------------------------------- | ----------- |
| `Pick` | Pick&lt;[PageConfiguration](#pageconfiguration), 'basePath' \| 'storyPaths'> |             |
| `tabs` | Pick&lt;[TabConfiguration](#tabconfiguration), 'route'>\[]                   |             |

>

## BuildConfiguration

global configuration used at build time
stored in a file named main.js/main.ts

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L107)_

page types that are considered as categories fields as well

**categories**: [DocType](#doctype)\[]

**finalWebpack**: [WebpackConfig](#webpackconfig)

base url path for API documentation pages. Default is "docs/"

**pages**: [PagesOnlyRoutes](#pagesonlyroutes)

wild card search string for the stories
internally using \`glob\` for the search: https&#x3A;//www.npmjs.com/package/glob
example: "./stories/

**stories**: string\[]

custom webpack configuration setup. One or the other will be used

**webpack**: [WebpackConfig](#webpackconfig)

## WebpackConfigFn

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L90)_

**function** (`config`\*: [WebpackConfiguration](#webpackconfiguration), `options`: any): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name      | Type                                          | Description |
| --------- | --------------------------------------------- | ----------- |
| `config*` | [WebpackConfiguration](#webpackconfiguration) |             |
| `options` | any                                           |             |
| `returns` | [WebpackConfiguration](#webpackconfiguration) |             |

## DocType

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L30)_

'story' | 'blog' | 'page' | 'tags' | 'author' | string

## WebpackConfig

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L94)_

[WebpackConfiguration](#webpackconfiguration) \| [WebpackConfigFn](#webpackconfigfn)

## PagesOnlyRoutes

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L96)_

Record&lt;

[DocType](#doctype)

, 

### properties

| Name   | Type                                                                         | Description |
| ------ | ---------------------------------------------------------------------------- | ----------- |
| `Pick` | Pick&lt;[PageConfiguration](#pageconfiguration), 'basePath' \| 'storyPaths'> |             |
| `tabs` | Pick&lt;[TabConfiguration](#tabconfiguration), 'route'>\[]                   |             |

>

## WebpackConfigFn

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L90)_

**function** (`config`\*: [WebpackConfiguration](#webpackconfiguration), `options`: any): [WebpackConfiguration](#webpackconfiguration);

### parameters

| Name      | Type                                          | Description |
| --------- | --------------------------------------------- | ----------- |
| `config*` | [WebpackConfiguration](#webpackconfiguration) |             |
| `options` | any                                           |             |
| `returns` | [WebpackConfiguration](#webpackconfiguration) |             |

## DocType

_defined in [@component-controls/core/src/configuration.ts](https://github.com/ccontrols/component-controls/tree/master/core/core/src/configuration.ts#L30)_

'story' | 'blog' | 'page' | 'tags' | 'author' | string

<!-- END-TSDOC-TYPESCRIPT -->
