# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [run](#run)

# Overview

Extract props info from react components. Although the latest version of `react-docgen` does support typescript, the typescript support still lags and is not recommended for use

-   Uses [react-docgen](https://github.com/reactjs/react-docgen)

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone to extract props info from react components:

```bash
$ npm install @component-controls/react-docgen-info --save-dev
```

# API

<api-readme />

<!-- START-API-README -->

## run

**`function`**

run API to generate react-docgen props information tables.

_defined in [@component-controls/react-docgen-info/props-info/react-docgen/src/index.ts](https://github.com/ccontrols/component-controls/tree/master/props-info/react-docgen/src/index.ts#L15)_

**parameters**

| Name      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `options` | <details><summary>`RectDocgenOptions`</summary><blockquote>`resolver`: **function** (<br /><details><summary>`ast`\*</summary><blockquote>\[`string`]: `unknown`</blockquote></details><details><summary>`parser`\*</summary><blockquote>`parse`\*: </blockquote></details>) => `NodePath` \| `NodePath`\[]<br />`handlers`: `HandlerType`\[]<br /><details><summary>`options`</summary><blockquote>`filename`: `string`<br />`cwd`: `string`<br />`babelrc`: `boolean`<br />`babelrcRoots`: `boolean`<br />`root`: `boolean`<br />`rootMode`: `boolean`<br />`configFile`: `boolean`<br />`envName`: `boolean`<br />`parserOptions`: ParserOptions</blockquote></details></blockquote></details> | configuration options                                  |
| `returns` | PropsInfoExtractorFunction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | a callable function of type PropsInfoExtractorFunction |

<!-- END-API-README -->
