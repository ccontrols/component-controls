# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [Parser](#parser)
    -   [ComponentNameResolver](#componentnameresolver)
    -   [PropFilter](#propfilter)
    -   [defaultParserOpts](#defaultparseropts)
    -   [ComponentNameResolver](#componentnameresolver-1)
    -   [PropFilter](#propfilter-1)

# Overview

Extract props info from react typescript components:

-   Uses [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to extract props info from react typescript components

```bash
$ npm install @component-controls/react-docgen-typescript-info --save-dev
```

# API

<tsdoc-typescript entry="react-docgen-typescript/lib/parser.d.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## Parser

**Component**

### properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `name*` | string |             |

**ComponentDoc**

### properties

| Name           | Type                 | Description |
| -------------- | -------------------- | ----------- |
| `description*` | string               |             |
| `displayName*` | string               |             |
| `methods*`     | [Method](#method)\[] |             |
| `props*`       | [Props](#props)      |             |

**FileParser**

### properties

| Name                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `parse*`                    | **parse**(`filePathOrPaths`\*: string \| string\[]): [ComponentDoc](#componentdoc)\[];### parameters| Name               | Type                | Description | | ------------------ | ------------------- | ----------- | | `filePathOrPaths*` | string \| string\[] |             |                                                                                                                                                                                                                 |             |
| `parseWithProgramProvider*` | **parseWithProgramProvider**(`filePathOrPaths`\*: string \| string\[], `programProvider`: undefined \| (): [Program](#program);): [ComponentDoc](#componentdoc)\[];### parameters| Name               | Type                                  | Description | | ------------------ | ------------------------------------- | ----------- | | `filePathOrPaths*` | string \| string\[]                   |             | | `programProvider`  | undefined \| (): [Program](#program); |             | |             |

**JSDoc**

### properties

| Name           | Type                           | Description |
| -------------- | ------------------------------ | ----------- |
| `description*` | string                         |             |
| `fullComment*` | string                         |             |
| `tags*`        | StringIndexedObject&lt;string> |             |

**Method**

### properties

| Name           | Type                                                                 | Description |
| -------------- | -------------------------------------------------------------------- | ----------- |
| `description*` | string                                                               |             |
| `docblock*`    | string                                                               |             |
| `modifiers*`   | string\[]                                                            |             |
| `name*`        | string                                                               |             |
| `params*`      | [MethodParameter](#methodparameter)\[]                               |             |
| `returns`      | **description**: string \| null**type**: undefined \| string \| null |             |

**MethodParameter**

### properties

| Name          | Type                                        | Description |
| ------------- | ------------------------------------------- | ----------- |
| `description` | string \| null                              |             |
| `name*`       | string                                      |             |
| `type*`       | [MethodParameterType](#methodparametertype) |             |

**MethodParameterType**

### properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `name*` | string |             |

**ParentType**

### properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `fileName*` | string |             |
| `name*`     | string |             |

**ParserOptions**

### properties

| Name                                 | Type                                                               | Description |
| ------------------------------------ | ------------------------------------------------------------------ | ----------- |
| `componentNameResolver`              | [ComponentNameResolver](#componentnameresolver)                    |             |
| `propFilter`                         | [StaticPropFilter](#staticpropfilter) \| [PropFilter](#propfilter) |             |
| `savePropValueAsString`              | undefined \| false \| true                                         |             |
| `shouldExtractLiteralValuesFromEnum` | undefined \| false \| true                                         |             |

**PropItem**

### properties

| Name            | Type                          | Description |
| --------------- | ----------------------------- | ----------- |
| `defaultValue*` | any                           |             |
| `description*`  | string                        |             |
| `name*`         | string                        |             |
| `parent`        | [ParentType](#parenttype)     |             |
| `required*`     | boolean                       |             |
| `type*`         | [PropItemType](#propitemtype) |             |

**PropItemType**

### properties

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| `name*` | string              |             |
| `raw`   | undefined \| string |             |
| `value` | any                 |             |

**Props extends StringIndexedObject&lt;[PropItem](#propitem)>**`key`\*: string: [PropItem](#propitem)

**StaticPropFilter**

### properties

| Name                  | Type                       | Description |
| --------------------- | -------------------------- | ----------- |
| `skipPropsWithName`   | string\[] \| string        |             |
| `skipPropsWithoutDoc` | undefined \| false \| true |             |

**StringIndexedObject**`key`\*: string: 

## ComponentNameResolver

(`exp`\*: [Symbol](#symbol), `source`\*: [SourceFile](#sourcefile)): string | undefined | null | false;

### parameters

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| `exp*`    | [Symbol](#symbol)         |             |
| `source*` | [SourceFile](#sourcefile) |             |

## PropFilter

(`props`\*: [PropItem](#propitem), `component`\*: [Component](#component)): boolean;

### parameters

| Name         | Type                    | Description |
| ------------ | ----------------------- | ----------- |
| `props*`     | [PropItem](#propitem)   |             |
| `component*` | [Component](#component) |             |

## defaultParserOpts

[ParserOptions](#parseroptions)

**getDefaultExportForFile**(`source`\*: [SourceFile](#sourcefile)): string;

### parameters

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| `source*` | [SourceFile](#sourcefile) |             |

**parse**(`filePathOrPaths`\*: string | string\[], `parserOpts`: [ParserOptions](#parseroptions)): [ComponentDoc](#componentdoc)\[];

### parameters

| Name               | Type                            | Description |
| ------------------ | ------------------------------- | ----------- |
| `filePathOrPaths*` | string \| string\[]             |             |
| `parserOpts`       | [ParserOptions](#parseroptions) |             |

**withCompilerOptions**(`compilerOptions`\*: [CompilerOptions](#compileroptions), `parserOpts`: [ParserOptions](#parseroptions)): [FileParser](#fileparser);

### parameters

| Name               | Type                                | Description |
| ------------------ | ----------------------------------- | ----------- |
| `compilerOptions*` | [CompilerOptions](#compileroptions) |             |
| `parserOpts`       | [ParserOptions](#parseroptions)     |             |

**withCustomConfig**(`tsconfigPath`\*: string, `parserOpts`\*: [ParserOptions](#parseroptions)): [FileParser](#fileparser);

### parameters

| Name            | Type                            | Description |
| --------------- | ------------------------------- | ----------- |
| `tsconfigPath*` | string                          |             |
| `parserOpts*`   | [ParserOptions](#parseroptions) |             |

**withDefaultConfig**(`parserOpts`: [ParserOptions](#parseroptions)): [FileParser](#fileparser);

### parameters

| Name         | Type                            | Description |
| ------------ | ------------------------------- | ----------- |
| `parserOpts` | [ParserOptions](#parseroptions) |             |

**ComponentDoc**

### properties

| Name           | Type                 | Description |
| -------------- | -------------------- | ----------- |
| `description*` | string               |             |
| `displayName*` | string               |             |
| `methods*`     | [Method](#method)\[] |             |
| `props*`       | [Props](#props)      |             |

## ComponentNameResolver

(`exp`\*: [Symbol](#symbol), `source`\*: [SourceFile](#sourcefile)): string | undefined | null | false;

### parameters

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| `exp*`    | [Symbol](#symbol)         |             |
| `source*` | [SourceFile](#sourcefile) |             |

## PropFilter

(`props`\*: [PropItem](#propitem), `component`\*: [Component](#component)): boolean;

### parameters

| Name         | Type                    | Description |
| ------------ | ----------------------- | ----------- |
| `props*`     | [PropItem](#propitem)   |             |
| `component*` | [Component](#component) |             |

**ParentType**

### properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `fileName*` | string |             |
| `name*`     | string |             |

**Component**

### properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `name*` | string |             |

**FileParser**

### properties

| Name                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `parse*`                    | **parse**(`filePathOrPaths`\*: string \| string\[]): [ComponentDoc](#componentdoc)\[];### parameters| Name               | Type                | Description | | ------------------ | ------------------- | ----------- | | `filePathOrPaths*` | string \| string\[] |             |                                                                                                                                                                                                                 |             |
| `parseWithProgramProvider*` | **parseWithProgramProvider**(`filePathOrPaths`\*: string \| string\[], `programProvider`: undefined \| (): [Program](#program);): [ComponentDoc](#componentdoc)\[];### parameters| Name               | Type                                  | Description | | ------------------ | ------------------------------------- | ----------- | | `filePathOrPaths*` | string \| string\[]                   |             | | `programProvider`  | undefined \| (): [Program](#program); |             | |             |

**Props extends StringIndexedObject&lt;[PropItem](#propitem)>**`key`\*: string: [PropItem](#propitem)

**PropItem**

### properties

| Name            | Type                          | Description |
| --------------- | ----------------------------- | ----------- |
| `defaultValue*` | any                           |             |
| `description*`  | string                        |             |
| `name*`         | string                        |             |
| `parent`        | [ParentType](#parenttype)     |             |
| `required*`     | boolean                       |             |
| `type*`         | [PropItemType](#propitemtype) |             |

**PropItemType**

### properties

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| `name*` | string              |             |
| `raw`   | undefined \| string |             |
| `value` | any                 |             |

<!-- END-TSDOC-TYPESCRIPT -->
