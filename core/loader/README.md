# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [API](#api)
    -   [injectedStories](#injectedstories)
    -   [getInjectedStore](#getinjectedstore)

# Overview

Webpack loader that injects the data collected by [@component-controls/instrument](https://github.com/ccontrols/component-controls/tree/master/core/instrument).

# Installation

This package is usually installed as part of the @component-controls package, but you can also install it standalone:

```bash
$ npm install @component-controls/loader --save-dev
```

# API

<tsdoc-typescript files="../specification/src/stories.ts" entry="./src/story-store-data.ts,./src/loader.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

## injectedStories

_defined in [@component-controls/loader/src/story-store-data.ts](https://github.com/ccontrols/component-controls/tree/master/core/loader/src/story-store-data.ts#L1)_



## getInjectedStore

_defined in [@component-controls/loader/src/story-store-data.ts](https://github.com/ccontrols/component-controls/tree/master/core/loader/src/story-store-data.ts#L3)_

**function** getInjectedStore(): string | undefined;

<!-- END-TSDOC-TYPESCRIPT -->
