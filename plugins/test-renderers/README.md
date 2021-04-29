# Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [API](#api)
  - [<ins>reactRunDOM</ins>](#insreactrundomins)
  - [<ins>renderDocument</ins>](#insrenderdocumentins)
  - [<ins>renderExample</ins>](#insrenderexampleins)

# Overview

A collection of test renderers for react

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/test-renderers --save-dev
```

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>reactRunDOM</ins>

run some function in the dom, by using react-dom

_reactRunDOM [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/test-renderers/src/react-run-dom.ts)_

## <ins>renderDocument</ins>

returns an array of the rendered all stories(examples) imports from a document using a test framework.

_renderDocument [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/test-renderers/src/render-document.ts)_

## <ins>renderExample</ins>

render an example using a test framework.

_renderExample [source code](https://github.com/ccontrols/component-controls/tree/master/plugins/test-renderers/src/render-example.ts)_

### properties

| Name       | Type                                                                                                                                                                                                                                                                           | Description |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `example*` | _Example&lt;Props>_                                                                                                                                                                                                                                                            |             |
| `doc*`     | _{ \[key: string]: any; title: string; type?: string; route?: string; date?: Date; dateModified?: Date; draft?: boolean; tags?: string\[]; keywords?: string\[]; description?: string \| Element; ... 12 more ...; parameters?: any; } & StoryProps&lt;...> & PageLayoutProps_ |             |
| `config*`  | _string \| RunConfiguration_                                                                                                                                                                                                                                                   |             |
| `controls` | _ExampleControls_                                                                                                                                                                                                                                                              |             |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
