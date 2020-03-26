# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [run](#run)

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

## run

run API to generate react-docgen-typescript props information tables.

_defined in [@component-controls/specification/src/test.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/test.ts#L6)_

**run**(`options`: undefined | string): number;

### parameters

| Name      | Type                | Description                                             |
| --------- | ------------------- | ------------------------------------------------------- |
| `options` | undefined \| string | configuration options                                   |
| `returns` | number              | a callable function of type PropsInfoExtractorFunction  |

<!-- END-TSDOC-TYPESCRIPT -->
