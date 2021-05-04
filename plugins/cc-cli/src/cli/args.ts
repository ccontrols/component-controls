import {
  ArgOptions,
  defaultCliArgs,
} from '@component-controls/webpack-compile/cli';

import { renderers } from '../types';

export const jestCliArgs: ArgOptions = [
  ...defaultCliArgs.filter(arg => arg.name === 'config'),
  {
    name: 'generate',
    options: {
      alias: 'g',
      description: 'generate tests level type',
      choices: ['store', 'doc', 'story'],
      default: 'store',
    },
  },
  {
    name: 'renderer',
    options: {
      alias: 'r',
      description: 'jest framework renderer',
      choices: Object.keys(renderers),
      default: 'rtl',
    },
  },
  {
    name: 'format',
    options: {
      alias: 'f',
      description: 'test file output format',
      choices: ['cjs', 'esm', 'ts'],
    },
  },
  {
    name: 'overwrite',
    options: {
      alias: 'w',
      description: 'force overwrite test file',
      default: false,
      type: 'boolean',
    },
  },
  {
    name: 'bundle',
    options: {
      alias: 'b',
      description: 'bundle path, if store loaded from bundle',
      type: 'string',
    },
  },
  {
    name: 'output',
    options: {
      alias: 'o',
      description: 'tests output folder',
      type: 'string',
    },
  },
  {
    name: 'test',
    options: {
      alias: 't',
      description: 'tests file name',
      type: 'string',
    },
  },
  {
    name: 'name',
    options: {
      alias: 'n',
      description: 'name of the test group (describe)',
      type: 'string',
    },
  },
  {
    name: 'include',
    options: {
      alias: 'i',
      description: 'component files to include',
      type: 'array',
    },
  },
  {
    name: 'exclude',
    options: {
      alias: 'x',
      description: 'component files to exclude',
      type: 'array',
    },
  },
  {
    name: 'ally',
    options: {
      alias: 'y',
      description: 'include axe accessibility tests',
      default: true,
      type: 'boolean',
    },
  },
  {
    name: 'data',
    options: {
      alias: 'd',
      description: '[n] rows to generate with data-driven testing files',
      default: 0,
      type: 'number',
    },
  },
];
