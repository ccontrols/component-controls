# Table of contents

- [Overview](#overview)
- [Credits](#credits)
- [Installation](#installation)
- [API](#api)
  - [<ins>run</ins>](#insrunins)
  - [<ins>extractComments</ins>](#insextractcommentsins)

# Overview

Extract structured documentation from javascript and typescript files using a combination of typescript types and jsdoc comments.

Libraries in the same space:
[react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)
[react-docgen](https://github.com/reactjs/react-docgen)
[jsdoc](https://github.com/jsdoc2md/jsdoc-api)
[typedoc](https://github.com/TypeStrong/typedoc)
[ts-json-schema-generator](https://github.com/vega/ts-json-schema-generator)

# Motivation

The creation of `structured-types` come from the need of a library that can be used to document as well as instrument typescript and javascript code. The currently existing libraries are mostly meant just for documenting code.

- Extract fully structured types, that can be used to fully interact with the analyzed code - this can be used to automatically create tests, examples etc.
- Use typescript types where available and supplement the type information with any jsdoc comments.
- Exctract documentation down to the member-level - for example for an enum extract comments for the enum type, as well as for the individual enum member fields.
- Swiss-army extensible architecture using resolution plugins, where the library can be used to analyze typescript files, as well as extract react, angular and more component types.

# Installation

```bash
$ npm install @component-controls/structured-types --save-dev
```

# API

<react-docgen-typescript path="./src" exclude="ts-type-parse.ts,COMMENT_PARSER_OPTIONS.ts,jsdocCommentToMember.ts,deconstructJsdocNamepath.ts" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>run</ins>

_run [source code](https://github.com/ccontrols/component-controls/tree/master/misc/structured-types/src/index.ts)_

## <ins>extractComments</ins>

_extractComments [source code](https://github.com/ccontrols/component-controls/tree/master/misc/structured-types/src/utils.ts)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
