# Table of contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)

# Overview

Standalone webpack compile/watch API for [@component-controls](https://github.com/ccontrols/component-controls).

# Installation

```bash
$ npm install @component-controls/webpack-compile --save-dev
```

# Usage

    import { compile } from '@component-controls/webpack-compile';
    ...
    const { store } = await compile({
      presets: ['react', 'react-docgen-typescript'],
      configPath: path.resolve(__dirname, 'fixtures', 'examples'),
    });

# API

<tsdoc-typescript files="@types/webpack/index.d.ts" entry="./src/index.ts,./src/types.ts"/>

<!-- START-TSDOC-TYPESCRIPT -->

<!-- END-TSDOC-TYPESCRIPT -->
