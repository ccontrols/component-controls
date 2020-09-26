import { ArgOptions } from '@component-controls/webpack-compile/cli';
import { renderers } from './renderers';

export const jestCliArgs: ArgOptions = [
  {
    name: 'renderer',
    options: {
      alias: 'r',
      description: 'jest framework renderer',
      choices: Object.keys(renderers),
      default: 'react',
    },
  },
  {
    name: 'test',
    options: {
      alias: 't',
      description: 'tests output folder',
      type: 'string',
      default: 'tests',
    },
  },
];
