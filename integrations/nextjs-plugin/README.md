# Table of contents

# In action

[Example site](https://components-storybook-6-no-docs.netlify.app/?path=/test/components-actioncontainer--overview)

# Overview

Next.js plugin for documenting your projects with component controls

-   Gatsby theme quick start.
-   Full UI configurability with components shadowing.


# Getting Started

## Install

```sh
yarn add gatsby-theme-stories
```

## Configure

the default options will configure `component-controls` to work with react apps,  with `react-docgen` for prop-types and `react-docgen-typescript` for typescript props information

in `gatsby-config.js`:

```js
  plugins: [
    ...
    {
      resolve: '@component-controls/gatsby-theme-stories',
      options: {
        //path to the configuration files
        configPath: '.config',
      },
    },
    ...
  ],

```

# API

<react-docgen-typescript path="./src" />

