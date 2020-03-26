# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [injectedStories](#injectedstories)
    -   [storyStore](#storystore)
    -   [loadStoryStore](#loadstorystore)
    -   [StoriesStore](#storiesstore)
    -   [StoriesKind](#storieskind)
    -   [Story](#story)
    -   [StoryParameters](#storyparameters)
    -   [StoryArguments](#storyarguments)
    -   [StoryArgument](#storyargument)
    -   [ArgUsageLocation](#argusagelocation)
    -   [StoryArguments](#storyarguments-1)
    -   [SourceIdentifier](#sourceidentifier)

# Overview

Webpack loader that injects the data collected by [@component-controls/instrument](https://github.com/ccontrols/component-controls/tree/master/core/instrument).

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/loader --save-dev
```

# API

<tsdoc-typescript files="../specification/src/stories.ts" entry="./src/story-store-data.ts,./src/loader.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## injectedStories

_defined in [@component-controls/loader/src/story-store-data.ts](https://github.com/ccontrols/component-controls/tree/master/core/loader/src/story-store-data.ts#L6)_



### properties

| Name | Type | Description |
| ---- | ---- | ----------- |

## storyStore

_defined in [@component-controls/loader/src/story-store-data.ts](https://github.com/ccontrols/component-controls/tree/master/core/loader/src/story-store-data.ts#L8)_



### properties

| Name | Type | Description |
| ---- | ---- | ----------- |

## loadStoryStore

_defined in [@component-controls/loader/src/story-store-data.ts](https://github.com/ccontrols/component-controls/tree/master/core/loader/src/story-store-data.ts#L10)_

**function** loadStoryStore(): [StoriesStore](#storiesstore) | undefined;

## StoriesStore

store of stories information in memory afte the loader is applied

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L218)_



### properties

| Name          | Type                                                   | Description |
| ------------- | ------------------------------------------------------ | ----------- |
| `components*` | \[fileName: string]: [StoryComponent](#storycomponent) |             |
| `kinds*`      | \[title: string]: [StoriesKind](#storieskind)          |             |
| `stories*`    | \[id: string]: [Story](#story)                         |             |

## StoriesKind

a group of stories. Usually multiple stories are in one  csf file
and the 'group' is the default export
in the case of MDX stories, the kind is crated using a &lt;Meta /> tag

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L141)_

`name`\*: string: any

### properties

| Name             | Type                                    | Description                                                                                                                                |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
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

## Story

Story interface - usually extracted by the AST instrumenting loader

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L67)_



### properties

| Name            | Type                                                   | Description                                                                                 |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `arguments`     | [StoryArguments](#storyarguments)                      | arguments pass to a CSF story eg \`export const story = props => &lt;Story {...props} />;\` |
| `component`     | string \| object                                       | id for component associated with the story                                                  |
| `controls`      | [ComponentControls](#componentcontrols)                | object of key/value pairs specifying the controls for the story                             |
| `id`            | string                                                 | csf id of the story                                                                         |
| `kind`          | string                                                 | title of the file/group of stories                                                          |
| `loc`           | [CodeLocation](#codelocation)                          | location in the source file of the story definition                                         |
| `name*`         | string                                                 | name of the Story.                                                                          |
| `parameters`    | [StoryParameters](#storyparameters)                    | configuration parameters passed to the story - either CSF or MDX                            |
| `renderFn`      | **function** (`controls`\*: \[key: string]: any): any; | render function for the story                                                               |
| `source`        | string                                                 | the source code of the story, extracted byt the AST instrumenting loaders                   |
| `subcomponents` | \[key: string]: string \| object                       | multiple components option                                                                  |
| `subtitle`      | string                                                 | optional story subtitle property                                                            |

## StoryParameters

list of configuration parameters for stories and 'kinds'
can be specified either through CSF or MDX tags

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L60)_

`name`\*: string: any

## StoryArguments

list of story arguments. Each argument can be a deconstructed argument of itself
the first argument are the control 'values'

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L54)_

[StoryArgument](#storyargument)\[]

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

## ArgUsageLocation

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L12)_



### properties

| Name   | Type                                  | Description                                                                                                                                                          |
| ------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loc*` | [CodeLocation](#codelocation)         | where in the story source code is the argument used code location is relative to the start of the story                                                              |
| `name` | [SourceIdentifier](#sourceidentifier) | optional name for the usage of the argument example: export const story = ({ value }) => &lt;Story value={{ age: value }} />; in this example the name will be 'age' |

## StoryArguments

list of story arguments. Each argument can be a deconstructed argument of itself
the first argument are the control 'values'

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L54)_

[StoryArgument](#storyargument)\[]

## SourceIdentifier

an identifier/variable.argument in the source code

_defined in [@component-controls/specification/src/stories.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/stories.ts#L8)_



### properties

| Name    | Type                          | Description |
| ------- | ----------------------------- | ----------- |
| `loc`   | [CodeLocation](#codelocation) |             |
| `name*` | string                        |             |

<!-- END-TSDOC-TYPESCRIPT -->
