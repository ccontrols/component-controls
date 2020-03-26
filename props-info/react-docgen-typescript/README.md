# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [run](#run)
    -   [RectDocgenTypescriptOptions](#rectdocgentypescriptoptions)
    -   [ComponentDoc](#componentdoc)
    -   [ParserOptions](#parseroptions)
    -   [Method](#method)
    -   [Props](#props)
    -   [ComponentNameResolver](#componentnameresolver)
    -   [StaticPropFilter](#staticpropfilter)
    -   [PropFilter](#propfilter)
    -   [MethodParameter](#methodparameter)
    -   [PropItem](#propitem)
    -   [Component](#component)
    -   [MethodParameterType](#methodparametertype)
    -   [ParentType](#parenttype)
    -   [PropItemType](#propitemtype)

# Overview

Extract props info from react typescript components:

-   Uses [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to extract props info from react typescript components

```bash
$ npm install @component-controls/react-docgen-typescript-info --save-dev
```

# API

<tsdoc-typescript files="./src/types.ts,react-docgen-typescript/lib/parser.d.ts" entry="./src/index.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## run

run API to generate react-docgen-typescript props information tables.

_defined in [@component-controls/react-docgen-typescript-info/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen-typescript/src/index.ts#L14)_

**function** run(`options`: [RectDocgenTypescriptOptions](#rectdocgentypescriptoptions)): [PropsInfoExtractorFunction](#propsinfoextractorfunction);

### parameters

| Name      | Type                                                        | Description                                             |
| --------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| `options` | [RectDocgenTypescriptOptions](#rectdocgentypescriptoptions) | configuration options                                   |
| `returns` | [PropsInfoExtractorFunction](#propsinfoextractorfunction)   | a callable function of type PropsInfoExtractorFunction  |

## RectDocgenTypescriptOptions

a callback to transfor them props table and the options to be passd to react-docgen-typescript.

_defined in [@component-controls/react-docgen-typescript-info/src/types.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen-typescript/src/types.ts#L6)_

### properties

| Name             | Type                                                                                       | Description                           |
| ---------------- | ------------------------------------------------------------------------------------------ | ------------------------------------- |
| `transformProps` | **function** (`props`\*: [ComponentDoc](#componentdoc)\[]): [ComponentDoc](#componentdoc); | callback to transform the props table |
| `ParserOptions`  | [ParserOptions](#parseroptions)                                                            |                                       |

## ComponentDoc

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name           | Type                 | Description |
| -------------- | -------------------- | ----------- |
| `description*` | string               |             |
| `displayName*` | string               |             |
| `methods*`     | [Method](#method)\[] |             |
| `props*`       | [Props](#props)      |             |

## ParserOptions

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name                                 | Type                                                               | Description |
| ------------------------------------ | ------------------------------------------------------------------ | ----------- |
| `componentNameResolver`              | [ComponentNameResolver](#componentnameresolver)                    |             |
| `propFilter`                         | [StaticPropFilter](#staticpropfilter) \| [PropFilter](#propfilter) |             |
| `savePropValueAsString`              | boolean                                                            |             |
| `shouldExtractLiteralValuesFromEnum` | boolean                                                            |             |

## Method

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| `description*` | string                                                  |             |
| `docblock*`    | string                                                  |             |
| `modifiers*`   | string\[]                                               |             |
| `name*`        | string                                                  |             |
| `params*`      | [MethodParameter](#methodparameter)\[]                  |             |
| `returns`      | **description**: string \| null**type**: string \| null |             |

## Props

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_

** extends StringIndexedObject&lt;[PropItem](#propitem)>**`key`\*: string: [PropItem](#propitem)

## ComponentNameResolver

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_

**function** (`exp`\*: [Symbol](#symbol), `source`\*: [SourceFile](#sourcefile)): string | undefined | null | false;

### parameters

| Name      | Type                                 | Description |
| --------- | ------------------------------------ | ----------- |
| `exp*`    | [Symbol](#symbol)                    |             |
| `source*` | [SourceFile](#sourcefile)            |             |
| `returns` | string \| undefined \| null \| false |             |

## StaticPropFilter

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name                  | Type                | Description |
| --------------------- | ------------------- | ----------- |
| `skipPropsWithName`   | string\[] \| string |             |
| `skipPropsWithoutDoc` | boolean             |             |

## PropFilter

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_

**function** (`props`\*: [PropItem](#propitem), `component`\*: [Component](#component)): boolean;

### parameters

| Name         | Type                    | Description |
| ------------ | ----------------------- | ----------- |
| `props*`     | [PropItem](#propitem)   |             |
| `component*` | [Component](#component) |             |
| `returns`    | boolean                 |             |

## MethodParameter

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name          | Type                                        | Description |
| ------------- | ------------------------------------------- | ----------- |
| `description` | string \| null                              |             |
| `name*`       | string                                      |             |
| `type*`       | [MethodParameterType](#methodparametertype) |             |

## PropItem

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name            | Type                          | Description |
| --------------- | ----------------------------- | ----------- |
| `defaultValue*` | any                           |             |
| `description*`  | string                        |             |
| `name*`         | string                        |             |
| `parent`        | [ParentType](#parenttype)     |             |
| `required*`     | boolean                       |             |
| `type*`         | [PropItemType](#propitemtype) |             |

## Component

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `name*` | string |             |

## MethodParameterType

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `name*` | string |             |

## ParentType

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `fileName*` | string |             |
| `name*`     | string |             |

## PropItemType

_defined in [react-docgen-typescript/lib/parser.d.ts](https://github.com/styleguidist/react-docgen-typescript)_



### properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `name*` | string |             |
| `raw`   | string |             |
| `value` | any    |             |

<!-- END-TSDOC-TYPESCRIPT -->
