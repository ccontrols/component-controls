# Table of contents

- [Overview](#overview)
- [Credits](#credits)
- [Installation](#installation)
- [API](#api)
  - [<ins>run</ins>](#insrunins)
  - [<ins>extractComments</ins>](#insextractcommentsins)

# Overview

Extract structure documentation from javascript and typescript files using a combination of typescript types and jsdoc comments.

# Credits

- jsdoc comments extraction [comment-parser](https://github.com/syavorsky/comment-parser)
- jsdoc comments analysis [jsdoc-md](https://github.com/jaydenseric/jsdoc-md)
- tests re-used from [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript/blob/master/src/__tests__/data/)

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