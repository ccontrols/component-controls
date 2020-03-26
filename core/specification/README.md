# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [RectDocgenTypescriptOptions](#rectdocgentypescriptoptions)

# Overview

Typescript definitions of the component-controls specification.

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/specification --save-dev
```

# API

<tsdoc-typescript entry="./src/test.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## RectDocgenTypescriptOptions

a callback to transfor them props table and the options to be passd to react-docgen-typescript.

_defined in [@component-controls/specification/src/test.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/test.ts#L6)_

### properties

| Name             | Type                                                                                       | Description                           |
| ---------------- | ------------------------------------------------------------------------------------------ | ------------------------------------- |
| `transformProps` | undefined \| (`props`\*: [ComponentDoc](#componentdoc)\[]): [ComponentDoc](#componentdoc); | callback to transform the props table |
| `ParserOptions`  | [ParserOptions](#parseroptions)                                                            |                                       |

<!-- END-TSDOC-TYPESCRIPT -->
