# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [ArgUsageLocation](#argusagelocation)
    -   [SourceIdentifier](#sourceidentifier)
    -   [Stories](#stories)
    -   [StoriesKind](#storieskind)
    -   [StoriesStore](#storiesstore)
    -   [Story](#story)
    -   [StoryArgument](#storyargument)
    -   [StoryComponents](#storycomponents)
    -   [StoryKinds](#storykinds)
    -   [StoryParameters](#storyparameters)
    -   [StoryStories](#storystories)
    -   [StoryArguments](#storyarguments)
    -   [StoryRenderFn](#storyrenderfn)
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
    -   [StoryComponent](#storycomponent)
    -   [TypeInformation](#typeinformation)
    -   [TypeValue](#typevalue)
    -   [getComponentName](#getcomponentname)
    -   [PropsInfoExtractorFunction](#propsinfoextractorfunction)
    -   [CodeLocation](#codelocation)
    -   [CodePosition](#codeposition)
    -   [Repository](#repository)
    -   [StoryArguments](#storyarguments-1)
    -   [StoryRenderFn](#storyrenderfn-1)
    -   [ComponentControl](#componentcontrol-1)
    -   [TypeValue](#typevalue-1)

# Overview

Typescript definitions of the component-controls specification.
Includes definitions for:

-   [Story](#story)
-   [Stories](#stories)
-   [ControlTypes](#controltypes)
-   [ComponentControl](#componentcontrol-1)
-   [PropTypes](#proptypes)
-   and more...

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/specification --save-dev
```

# API

<tsdoc-typescript entry="./src/stories.ts,./src/controls.ts,./src/components.ts,./src/propsInfo.ts,./src/utility.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## ArgUsageLocation

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L12)_



### properties

| Name   | Type                                  | Description                                                                                                                                                          |
| ------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loc*` | [CodeLocation](#codelocation)         | where in the story source code is the argument used code location is relative to the start of the story                                                              |
| `name` | [SourceIdentifier](#sourceidentifier) | optional name for the usage of the argument example: export const story = ({ value }) => &lt;Story value={{ age: value }} />; in this example the name will be 'age' |

## SourceIdentifier

an identifier/variable.argument in the source code

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L8)_



### properties

| Name    | Type                          | Description |
| ------- | ----------------------------- | ----------- |
| `loc`   | [CodeLocation](#codelocation) |             |
| `name*` | string                        |             |

## Stories

map of stories. The id is compatible with CSF story ids

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L139)_

`id`\*: string: [Story](#story)

## StoriesKind

a group of stories. Usually multiple stories are in one  csf file
and the 'group' is the default export
in the case of MDX stories, the kind is crated using a &lt;Meta /> tag

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L148)_

`name`\*: string: any

### properties

| Name             | Type                                    | Description                                                                                                                                |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `MDXPage`        | any                                     | for MDX pages, this is an MDXContent function, to be rendered inside a MDXProvider                                                         |
| `component`      | string \| object                        | id for component associated with the stories file                                                                                          |
| `components*`    | \[name: string]: string                 | lookup into the global store.components since multiple components of the same name can be used example: \['Button']: 'c:/myapp/Button.tsx' |
| `controls`       | [ComponentControls](#componentcontrols) | object of key/value pairs specifying the controls for the stories file this will apply to all the stories in the file                      |
| `excludeStories` | string\[] \| [RegExp](#regexp)          | list of stories to exclude from the stories file can also use regexp match                                                                 |
| `fileName`       | string                                  | file name of the file of stories                                                                                                           |
| `includeStories` | string\[] \| [RegExp](#regexp)          | list of stories to include in the stories file can also use regexp match                                                                   |
| `parameters`     | [StoryParameters](#storyparameters)     | configuration parameters passed to the story groups configured either as CSF default export or MDX &lt;Meta /> tag                         |
| `repository`     | [Repository](#repository)               | project repository information                                                                                                             |
| `source`         | string                                  | source code of the entire file of stories                                                                                                  |
| `stories`        | string\[]                               | list of stories contained in the file/groups                                                                                               |
| `subcomponents`  | string\[] \| object\[]                  | multiple components option                                                                                                                 |
| `title*`         | string                                  | title of the groups of stories (or kind). used to generate CSF story ids                                                                   |

## StoriesStore

store of stories information in memory after the loader is applied

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L252)_



### properties

| Name          | Type                                | Description                        |
| ------------- | ----------------------------------- | ---------------------------------- |
| `components*` | [StoryComponents](#storycomponents) | list of components used in stories |
| `hash`        | string                              | unique hash for a store            |
| `kinds*`      | [StoryKinds](#storykinds)           | list of story files, or groups     |
| `stories*`    | [StoryStories](#storystories)       | list of stories                    |

## Story

Story interface - usually extracted by the AST instrumenting loader

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L74)_



### properties

| Name            | Type                                    | Description                                                                                 |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------------------------- |
| `arguments`     | [StoryArguments](#storyarguments)       | arguments pass to a CSF story eg \`export const story = props => &lt;Story {...props} />;\` |
| `component`     | string \| object                        | id for component associated with the story                                                  |
| `controls`      | [ComponentControls](#componentcontrols) | object of key/value pairs specifying the controls for the story                             |
| `id`            | string                                  | csf id of the story                                                                         |
| `kind`          | string                                  | title of the file/group of stories                                                          |
| `loc`           | [CodeLocation](#codelocation)           | location in the source file of the story definition                                         |
| `name*`         | string                                  | name of the Story.                                                                          |
| `parameters`    | [StoryParameters](#storyparameters)     | configuration parameters passed to the story - either CSF or MDX                            |
| `renderFn`      | [StoryRenderFn](#storyrenderfn)         | render function for the story                                                               |
| `source`        | string                                  | the source code of the story, extracted byt the AST instrumenting loaders                   |
| `subcomponents` | \[key: string]: string \| object        | multiple components option                                                                  |
| `subtitle`      | string                                  | optional story subtitle property                                                            |

## StoryArgument

arguments passed to the 'story' function, extracted by an AST loader

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L30)_



### properties

| Name     | Type                                        | Description                                                                                |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `loc`    | [CodeLocation](#codelocation)               | location of the argument declaration, relative to the story source code                    |
| `name`   | string                                      | the original name of the argument                                                          |
| `usage`  | [ArgUsageLocation](#argusagelocation)\[]    | list of locations where the argument is used in the body of the story                      |
| `value*` | string \| [StoryArguments](#storyarguments) | either the name used (or a variable alias), or an array of sub-arguments ({ name: alias }) |

## StoryComponents

list of components used in stories

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L231)_

`fileName`\*: string: [StoryComponent](#storycomponent)

## StoryKinds

list of story files, or groups

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L238)_

`title`\*: string: [StoriesKind](#storieskind)

## StoryParameters

list of configuration parameters for stories and 'kinds'
can be specified either through CSF or MDX tags

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L60)_

`name`\*: string: any

## StoryStories

list of stories

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L245)_

`id`\*: string: [Story](#story)

## StoryArguments

list of story arguments. Each argument can be a deconstructed argument of itself
the first argument are the control 'values'

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L54)_

[StoryArgument](#storyargument)\[]

## StoryRenderFn

story render function

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L67)_

**function** (`controlValues`\*: \[key: string]: any, `context`: any): any;

### parameters

| Name             | Type                | Description |
| ---------------- | ------------------- | ----------- |
| `controlValues*` | \[key: string]: any |             |
| `context`        | any                 |             |
| `returns`        | any                 |             |

## ControlTypes

Control field types
examples are provided for the different types:

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L6)_



### properties

| Name       | Type                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ARRAY*`   | **function** ARRAY   | items: {   type: csf.ControlTypes.ARRAY,   label: 'Items',   value: \['Laptop', 'Book', 'Whiskey'], },                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `BOOLEAN*` | **function** BOOLEAN | nice: {  type: csf.ControlTypes.BOOLEAN,  label: 'Nice',  value: true, },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `BUTTON*`  | **function** BUTTON  | button: {  type: csf.ControlTypes.BUTTON,   onClick: () => {    ... code to modify some variables  } },                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `COLOR*`   | **function** COLOR   | color: {   type: 'color',   value: '#000000', },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `DATE*`    | **function** DATE    |  birthday: {   type: csf.ControlTypes.DATE,   label: 'Birthday',   value: new Date(),  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `FILES*`   | **function** FILES   | images: {   type: csf.ControlTypes.FILES,   label: 'Happy Picture',   accept: 'image/\*',   value: \[     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',   ], }, |
| `NUMBER*`  | **function** NUMBER  |  age: {   type: csf.ControlTypes.NUMBER,   label: 'Age',   value: 78,   range: true,   min: 0,   max: 90,   step: 5, },                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `OBJECT*`  | **function** OBJECT  | otherStyles: {   type: csf.ControlTypes.OBJECT,   label: 'Styles',   value: {     border: '2px dashed silver',     borderRadius: 10,     padding: 10,   }, },                                                                                                                                                                                                                                                                                                                                                                                                               |
| `OPTIONS*` | **function** OPTIONS | fruit: {   type: csf.ControlTypes.OPTIONS,   label: 'Fruit',   value: 'apple',   options: {     Apple: 'apple',     Banana: 'banana',     Cherry: 'cherry',   }, },                                                                                                                                                                                                                                                                                                                                                                                                         |
| `TEXT*`    | **function** TEXT    | userName: {   type: csf.ControlTypes.TEXT,   label: 'Name',   value: 'Storyteller', },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## ComponentControlArray

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L241)_

** extends ComponentControlBase&lt;string\[]>**

### properties

| Name        | Type                                                           | Description                                                                                                                                           |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`     | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`     | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `separator` | string                                                         | the array items separator, by default comma                                                                                                           |
| `type*`     | [ARRAY](#array)                                                |                                                                                                                                                       |
| `value`     | string\[]                                                      | a default value for the property                                                                                                                      |

## ComponentControlBase

Base inteface for creating control types
All new property typs should extend this interface and support

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L136)_



### properties

| Name        | Type                                                           | Description                                                                                                                                           |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`     | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`     | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `type*`     | [ControlTypes](#controltypes)                                  |                                                                                                                                                       |
| `value`     |                                                                | a default value for the property                                                                                                                      |

## ComponentControlBoolean

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L208)_

** extends ComponentControlBase&lt;boolean>**

### properties

| Name        | Type                                                           | Description                                                                                                                                           |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`     | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`     | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `type*`     | [BOOLEAN](#boolean)                                            |                                                                                                                                                       |
| `value`     | boolean                                                        | a default value for the property                                                                                                                      |

## ComponentControlButton

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L254)_

** extends ComponentControlBase&lt;>**

### properties

| Name        | Type                                                                              | Description                                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false                    | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                                            | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                                           | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                                           | hide the label from the property editor                                                                                                               |
| `label`     | string                                                                            | label to display next to the field editor by default uses the property name itself                                                                    |
| `onClick`   | **function** (`prop`\*: [ComponentControlButton](#componentcontrolbutton)): void; | for button type fields, an onClick handler                                                                                                            |
| `order`     | number                                                                            | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `type*`     | [BUTTON](#button)                                                                 |                                                                                                                                                       |
| `value`     |                                                                                   | a default value for the property                                                                                                                      |

## ComponentControlColor

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L212)_

** extends ComponentControlBase&lt;string>**

### properties

| Name        | Type                                                           | Description                                                                                                                                           |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`     | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`     | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `type*`     | [COLOR](#color)                                                |                                                                                                                                                       |
| `value`     | string                                                         | a default value for the property                                                                                                                      |

## ComponentControlData

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L114)_



### properties

| Name      | Type                | Description                                                                                                                    |
| --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `name*`   | string              | 'name' for generating random data from faker.js  usually comprised of two parts, separated by a dot  example 'internet.avatar' |
| `options` | \[key: string]: any | options to be passe to the random data generators example {  min: 10, max: 20 }                                                |

## ComponentControlDate

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L216)_

** extends ComponentControlBase&lt;[Date](#date)>**

### properties

| Name         | Type                                                           | Description                                                                                                                                           |
| ------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`       | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `datePicker` | boolean                                                        | whether to display a date picker (calendar). default: true                                                                                            |
| `groupId`    | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`     | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel`  | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`      | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`      | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `timePicker` | boolean                                                        | whether to display a time picker (calendar). default: true                                                                                            |
| `type*`      | [DATE](#date)                                                  |                                                                                                                                                       |
| `value`      | [Date](#date)                                                  | a default value for the property                                                                                                                      |

## ComponentControlFiles

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L232)_

** extends ComponentControlBase&lt;string\[]>**

### properties

| Name        | Type                                                           | Description                                                                                                                                           |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`    | string                                                         | type of files to accept user to open ex 'image/\*',                                                                                                   |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`     | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`     | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `type*`     | [FILES](#files)                                                |                                                                                                                                                       |
| `value`     | string\[]                                                      | a default value for the property                                                                                                                      |

## ComponentControlNumber

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L304)_

** extends ComponentControlBase&lt;number>**

### properties

| Name        | Type                                                           | Description                                                                                                                                           |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`     | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `max`       | number                                                         | maximum allowed value for numeric property                                                                                                            |
| `min`       | number                                                         | minimum allowed value for numeric property                                                                                                            |
| `order`     | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `range`     | boolean                                                        | if true, will display a range type slider editor                                                                                                      |
| `step`      | number                                                         | stepper for numeric editor /i nc/dec value                                                                                                            |
| `type*`     | [NUMBER](#number)                                              |                                                                                                                                                       |
| `value`     | number                                                         | a default value for the property                                                                                                                      |

## ComponentControlObject

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L249)_

** extends ComponentControlBase&lt;[ComponentControls](#componentcontrols)>**

### properties

| Name        | Type                                                           | Description                                                                                                                                           |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `groupId`   | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`     | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`     | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `type*`     | [OBJECT](#object)                                              |                                                                                                                                                       |
| `value`     | [ComponentControls](#componentcontrols)                        | a default value for the property                                                                                                                      |

## ComponentControlOptions

list of options can be
1\. key-value pair object: in format { label: value }
2\. array of strings
3\. array of key-value pair objects

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L285)_

** extends ComponentControlBase&lt;OptionsValueType&lt;>>**

### properties

| Name        | Type                                                                                 | Description                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | [ComponentControlData](#componentcontroldata) \| null \| false                       | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `display`   | 'select' \| 'multi-select' \| 'radio' \| 'inline-radio' \| 'check' \| 'inline-check' | how to render selecting the options: default is 'select'                                                                                              |
| `groupId`   | string                                                                               | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`    | boolean                                                                              | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel` | boolean                                                                              | hide the label from the property editor                                                                                                               |
| `label`     | string                                                                               | label to display next to the field editor by default uses the property name itself                                                                    |
| `options*`  | OptionsListType&lt;>                                                                 |                                                                                                                                                       |
| `order`     | number                                                                               | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `type*`     | [OPTIONS](#options)                                                                  |                                                                                                                                                       |
| `value`     | OptionsValueType&lt;>                                                                | a default value for the property                                                                                                                      |

## ComponentControlText

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L183)_

** extends ComponentControlBase&lt;string>**

### properties

| Name          | Type                                                           | Description                                                                                                                                           |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`        | [ComponentControlData](#componentcontroldata) \| null \| false | helper information to generate random data will be used in conjunction with faker.js datacan be set to false, if the control should not be randomized |
| `escapeValue` | boolean                                                        | allows to receive escaped string values to help prevent XSS attacks by default - false                                                                |
| `groupId`     | string                                                         | allows grouping of the properties in a property editor for example different editor tabs                                                              |
| `hidden`      | boolean                                                        | hide the property editor for this property will only use the value                                                                                    |
| `hideLabel`   | boolean                                                        | hide the label from the property editor                                                                                                               |
| `label`       | string                                                         | label to display next to the field editor by default uses the property name itself                                                                    |
| `order`       | number                                                         | allows custom sorting of the properties if 'order' is not provided, the props will be sorted by the order/key of the object (unreliable)              |
| `placeholder` | string                                                         | placeholder for empty properties either undefined initial value or user clears the field                                                              |
| `rows`        | number                                                         | number of rows for a TextArea field for longer text by default, only 1 row = means a Input field \> 1 rows = an area field                            |
| `type*`       | [TEXT](#text)                                                  |                                                                                                                                                       |
| `value`       | string                                                         | a default value for the property                                                                                                                      |

## ComponentControls

ComponentControls are defined in key value pairs
the name of the property is the key
and the value is the ComponentControl

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L357)_

`name`\*: string: [ComponentControl](#componentcontrol)

## ComponentControl

ComponentControl is a either an object of property settings
or a shortcut can be used:
 properties: {
  text: 'Hello',
},

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L340)_

[ComponentControlText](#componentcontroltext) \| [ComponentControlBoolean](#componentcontrolboolean) \| [ComponentControlColor](#componentcontrolcolor) \| [ComponentControlDate](#componentcontroldate) \| [ComponentControlObject](#componentcontrolobject) \| [ComponentControlButton](#componentcontrolbutton) \| [ComponentControlOptions](#componentcontroloptions) \| [ComponentControlNumber](#componentcontrolnumber) \| [ComponentControlArray](#componentcontrolarray) \| [ComponentControlFiles](#componentcontrolfiles)

## OptionsListType

value/label pairs or array of OptionsValueType

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L274)_

\[key: string]:  \| OptionsValueType&lt;>\[]

## OptionsValueType

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L264)_

 | number | string\[] \| number\[] \| **label**: string**value**: any

## ComponentInfo

DocGen type onfo generated for a compoennt

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L76)_



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

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L47)_



### properties

| Name           | Type                                | Description                           |
| -------------- | ----------------------------------- | ------------------------------------- |
| `defaultValue` | any                                 | default value for the property        |
| `description`  | string                              | description of the property           |
| `parentName`   | string                              | name of the parent/inherited property |
| `type*`        | [TypeInformation](#typeinformation) | propertty type                        |

## PropTypes

list of properties of the component

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L69)_

`key`\*: string: [PropType](#proptype)

## StoryComponent

component specified for stories or story files

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L96)_



### properties

| Name           | Type                               | Description                                                                                                                                                                                                                                |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `from`         | string                             | imported from                                                                                                                                                                                                                              |
| `importedName` | 'default' \| 'namespace' \| string | imported name ex: \- default import import Button from 'buttons'; \- namespace import import \* as Button from 'buttons'; \- named import import { Button } from 'buttons'; \- named alias import import { Btn as Button } from 'buttons'; |
| `info`         | [ComponentInfo](#componentinfo)    | docgen generated component info                                                                                                                                                                                                            |
| `loc`          | [CodeLocation](#codelocation)      | location of the import statement in the source code file                                                                                                                                                                                   |
| `name*`        | string                             | name of the component as used in the fiel                                                                                                                                                                                                  |
| `repository`   | [Repository](#repository)          | component project repository information                                                                                                                                                                                                   |
| `request`      | string                             | resolved import request                                                                                                                                                                                                                    |
| `source`       | string                             | the source code of the component file, extracted byt the AST instrumenting loaders                                                                                                                                                         |

## TypeInformation

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L17)_



### properties

| Name        | Type                                          | Description                                                                   |
| ----------- | --------------------------------------------- | ----------------------------------------------------------------------------- |
| `arguments` | [TypeInformation](#typeinformation)\[] \| any | argument types of function                                                    |
| `name*`     | [TypeValue](#typevalue)                       |                                                                               |
| `raw`       | string                                        | raw type code                                                                 |
| `required`  | boolean                                       | is the property required                                                      |
| `value`     | [TypeInformation](#typeinformation)\[] \| any | type value elements of enum, array, fields of object return value of function |

## TypeValue

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L3)_

'any' | 'boolean' | 'number' | 'string' | 'array' | 'object' | 'enum' | 'union' | 'literal' | 'symbol' | 'function' | string

## getComponentName

given a component, return its name

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L142)_

**function** getComponentName(`component`\*: any): string | undefined;

### parameters

| Name         | Type                | Description                                                                                |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------ |
| `component*` | any                 | a string component name, or a component class, with a name or displayName static property  |
| `returns`    | string \| undefined |                                                                                            |

## PropsInfoExtractorFunction

callback function to extract props info table  - ie docgen type libraries
used to extract displayName, and props tables for a component

_defined in [@component-controls/specification/src/propsInfo.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/propsInfo.ts#L13)_

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

_defined in [@component-controls/specification/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/utility.ts#L16)_



### properties

| Name     | Type                          | Description |
| -------- | ----------------------------- | ----------- |
| `end*`   | [CodePosition](#codeposition) |             |
| `start*` | [CodePosition](#codeposition) |             |

## CodePosition

position in the stories source code
usually taken from AST traverse loaders

_defined in [@component-controls/specification/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/utility.ts#L6)_



### properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `column*` | number |             |
| `line*`   | number |             |

## Repository

information about the repository of the stories and components

_defined in [@component-controls/specification/src/utility.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/utility.ts#L25)_



### properties

| Name     | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| `browse` | string | link for browsing the file              |
| `docs`   | string | link for project readme                 |
| `issues` | string | link for filing issues with the project |
| `name`   | string | package name                            |

## StoryArguments

list of story arguments. Each argument can be a deconstructed argument of itself
the first argument are the control 'values'

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L54)_

[StoryArgument](#storyargument)\[]

## StoryRenderFn

story render function

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L67)_

**function** (`controlValues`\*: \[key: string]: any, `context`: any): any;

### parameters

| Name             | Type                | Description |
| ---------------- | ------------------- | ----------- |
| `controlValues*` | \[key: string]: any |             |
| `context`        | any                 |             |
| `returns`        | any                 |             |

## ComponentControl

ComponentControl is a either an object of property settings
or a shortcut can be used:
 properties: {
  text: 'Hello',
},

_defined in [@component-controls/specification/src/controls.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/controls.ts#L340)_

[ComponentControlText](#componentcontroltext) \| [ComponentControlBoolean](#componentcontrolboolean) \| [ComponentControlColor](#componentcontrolcolor) \| [ComponentControlDate](#componentcontroldate) \| [ComponentControlObject](#componentcontrolobject) \| [ComponentControlButton](#componentcontrolbutton) \| [ComponentControlOptions](#componentcontroloptions) \| [ComponentControlNumber](#componentcontrolnumber) \| [ComponentControlArray](#componentcontrolarray) \| [ComponentControlFiles](#componentcontrolfiles)

## TypeValue

_defined in [@component-controls/specification/src/components.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/components.ts#L3)_

'any' | 'boolean' | 'number' | 'string' | 'array' | 'object' | 'enum' | 'union' | 'literal' | 'symbol' | 'function' | string

<!-- END-TSDOC-TYPESCRIPT -->
