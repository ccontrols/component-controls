# Contributong to component-controls

- [Setup](#setup)

# Setup

## Install

First, install lerna globally (if you don't have it already) with `npm i -g lerna`

Then, run `yarn bootstrap` followed by `yarn build`

`yarn bootstrap` installs the external dependencies of the project and links the publishable packages from the monorepo. `yarn build` will build all the packages from the monorepo.

## Development

To run the monorepo, run `yarn dev` in the home directory. This starts a rollup watch service to monitor for any changes in packages.

To run one of the examples, navigate to the examples folder i.e. `cd examples/storybook-6-no-docs`, and run `yarn start`

## Tests

jest: `yarn test`
lint: `yarn lint`

## Documentation

API documentation in the README.md files is generated automatically: `yarn docs`

## Build all examples

`yarn examples`
