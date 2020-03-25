# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [PropsInfoExtractorFunction](#propsinfoextractorfunction)

# Overview

Typescript definitions of the component-controls specification.

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/specification --save-dev
```

# API

<tsdoc-typescript entry="./src/propsinfo.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## PropsInfoExtractorFunction

callback function to extract props info table  - ie docgen type libraries
used to extract displayName, and props tables for a component

(`fileName`\*: string, `componentName`: undefined | string, `source`: undefined | string): Promise&lt;[ComponentInfo](#componentinfo) | undefined> | [ComponentInfo](#componentinfo) | undefined;

### parameters

| Name            | Type                | Description |
| --------------- | ------------------- | ----------- |
| `fileName*`     | string              |             |
| `componentName` | undefined \| string |             |
| `source`        | undefined \| string |             |

<!-- END-TSDOC-TYPESCRIPT -->
