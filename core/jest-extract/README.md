# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [<ins>getRelatedTests</ins>](#insgetrelatedtestsins)
    -   [<ins>runRelatedTests</ins>](#insrunrelatedtestsins)
    -   [<ins>findJestConfig</ins>](#insfindjestconfigins)
    -   [<ins>runTests</ins>](#insruntestsins)
    -   [<ins>runProjectTests</ins>](#insrunprojecttestsins)
        -   [properties](#properties)

# Overview

Given a file name, retrives the jest tests and associated results.

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/jest-extract --save-dev
```

# API

<react-docgen-typescript path="./src" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>getRelatedTests</ins>

find all test files related to a component file

_getRelatedTests [source code](https://github.com/ccontrols/component-controls/tree/master/core/jest-extract/src/related-tests.ts)_

## <ins>runRelatedTests</ins>

retrieves all the tests related to a componnet file

_runRelatedTests [source code](https://github.com/ccontrols/component-controls/tree/master/core/jest-extract/src/related-tests.ts)_

## <ins>findJestConfig</ins>

_findJestConfig [source code](https://github.com/ccontrols/component-controls/tree/master/core/jest-extract/src/run-tests.ts)_

## <ins>runTests</ins>

single test file execution

_runTests [source code](https://github.com/ccontrols/component-controls/tree/master/core/jest-extract/src/run-tests.ts)_

## <ins>runProjectTests</ins>

run tests within the same project (jest config file)

_runProjectTests [source code](https://github.com/ccontrols/component-controls/tree/master/core/jest-extract/src/run-tests.ts)_

### properties

| Name             | Type                                                                                                                                                                                                                                                                                          | Description                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `testFiles*`     | _string\[]_                                                                                                                                                                                                                                                                                   | related test files to execute                                                                                                                           |
| `projectFolder*` | _string_                                                                                                                                                                                                                                                                                      | the folder with jest configuration or package.json                                                                                                      |
| `relativeFolder` | _string_                                                                                                                                                                                                                                                                                      | if supplied, this is the folder from which to report the file names relative to for example this could be the folder where the tested component resides |
| `options*`       | _Partial&lt;Arguments&lt;Partial&lt;{ all: boolean; automock: boolean; bail: number \| boolean; cache: boolean; cacheDirectory: string; changedFilesWithAncestor: boolean; changedSince: string; ci: boolean; clearCache: boolean; ... 77 more ...; watchPathIgnorePatterns: string\[]; }>>>_ | jest options. Can provide collectCoverageOnlyFrom to limit the files coverage is collected from                                                         |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
