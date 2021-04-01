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
      choices: ['store', 'story'],
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
      default: 'cjs',
    },
  },

  {
    name: 'overwrite',
    options: {
      alias: 'w',
      description: 'force overwrite test file',
      default: true,
      type: 'boolean',
    },
  },
  {
    name: 'bundle',
    options: {
      alias: 'b',
      description: 'bundle path, if store loaded ffrom bundle',
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
      default: 'stories.test.js',
    },
  },
  {
    name: 'name',
    options: {
      alias: 'n',
      description: 'name of the test group (describe)',
      type: 'string',
      default: 'component-controls generated',
    },
  },
];
