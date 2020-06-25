# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)

# Overview

Utility class to abstract loading the stories store from the webpack loader and provides an interface to access the store. Will also share the store accross bundles using localStorage and broadcastig messages.

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/store --save-dev
```

# API

<tsdoc-typescript files="./src/types.ts" entry="./src/Store/Store.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

<!-- END-TSDOC-TYPESCRIPT -->
