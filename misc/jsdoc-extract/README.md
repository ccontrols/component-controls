# Table of contents

-   [Overview](#overview)
-   [Credits](#credits)
-   [Installation](#installation)
-   [API](#api)
    -   [<ins>run</ins>](#insrunins)
    -   [<ins>extractComments</ins>](#insextractcommentsins)

# Overview

jsdoc type comments extract form js and ts files. Using a combination of babel ast parsing of types and jsdoc comments analysis.

# Credits

-   jsdoc comments extraction [comment-parser](https://github.com/syavorsky/comment-parser)
-   jsdoc comments analysis [jsdoc-md](https://github.com/jaydenseric/jsdoc-md)
-   tests re-used from [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript/blob/master/src/__tests__/data/)

# Installation

```bash
$ npm install @component-controls/jsdoc-extract --save-dev
```

# API

<react-docgen-typescript path="./src" exclude="ts-type-parse.ts,COMMENT_PARSER_OPTIONS.ts,jsdocCommentToMember.ts,deconstructJsdocNamepath.ts" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>run</ins>

_run [source code](https://github.com/ccontrols/component-controls/tree/master/misc/jsdoc-extract/src/index.ts)_

## <ins>extractComments</ins>

_extractComments [source code](https://github.com/ccontrols/component-controls/tree/master/misc/jsdoc-extract/src/utils.ts)_

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
