# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [run](#run)

# Overview

Extract props info from react typescript components:

-   Uses [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to extract props info from react typescript components

```bash
$ npm install @component-controls/react-docgen-typescript-info --save-dev
```

# API

<api-readme />

<!-- START-API-README -->

## run

**`function`**

run API to generate react-docgen-typescript props information tables.

_defined in [@component-controls/react-docgen-typescript-info/props-info/react-docgen-typescript/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen-typescript/src/index.ts#L14)_

**parameters**

| Name      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| `options` | <details><summary>`type`</summary><blockquote>`transformProps`: **function** (<br />`props`\*: `ComponentDoc`\[]<br />) => <details><summary>`ComponentDoc`</summary><blockquote>`expression`: ts.Symbol<br />`displayName`\*: `string`<br />`filePath`\*: `string`<br />`description`\*: `string`<br /><details><summary>`props`\*</summary><blockquote>\[`string`]: `T`</blockquote></details>`methods`\*: `Method`\[]<br /><details><summary>`tags`</summary><blockquote>\[`string`]: `T`</blockquote></details></blockquote></details><br />`propFilter`: `StaticPropFilter` \| `PropFilter`<br />`componentNameResolver`: **function** (<br />`exp`\*: Symbol<br />`source`\*: SourceFile<br />) => `string` \| `undefined` \| `null` \| `false`<br />`shouldExtractLiteralValuesFromEnum`: `boolean`<br />`shouldRemoveUndefinedFromOptional`: `boolean`<br />`shouldExtractValuesFromUnion`: `boolean`<br />`skipChildrenPropWithoutDoc`: `boolean`<br />`savePropValueAsString`: `boolean`<br />`shouldIncludePropTagMap`: `boolean`<br />`shouldIncludeExpression`: `boolean`<br />`customComponentTypes`: `string`\[]</blockquote></details> | configuration options                                  |
| `returns` | PropsInfoExtractorFunction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | a callable function of type PropsInfoExtractorFunction |

<!-- END-API-README -->
