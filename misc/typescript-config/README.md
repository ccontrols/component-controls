# Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [API](#api)

# Overview

Retrieve the configuration for a typescript file.

# Installation

```bash
$ npm install @component-controls/typescript-config --save-dev
```

# API

```
import { getTypescriptConfig } from '@component-controls/typescript-config';
import * as ts from 'typescript';

const config = getTypescriptConfig('./tsfile.ts', {
  compilerOptions: {
    jsx: ts.JsxEmit.ReactJSX,
  }
});
```
