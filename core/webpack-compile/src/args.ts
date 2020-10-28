import yargs, { Options, Argv } from 'yargs';

export interface CliArgTypes {
  config?: string;
  watch?: boolean;
  presets: string[];
  bundle: string;
  dist: string;
  static: string;
  loglevel: string;
  [key: string]: any;
}

export type ArgOptions = { name: string; options: Options }[];

export const defaultCliArgs: ArgOptions = [
  {
    name: 'config',
    options: {
      alias: 'c',
      description: 'configuration folder',
      type: 'string',
      default: '.config',
    },
  },
  {
    name: 'watch',
    options: {
      alias: 'w',
      description: 'watch mode (default compile mode)',
      default: false,
      type: 'boolean',
    },
  },
  {
    name: 'presets',
    options: {
      alias: 'p',
      description: 'presets ',
      type: 'array',
      default: ['react', 'react-docgen-typescript'],
    },
  },
  {
    name: 'bundle',
    options: {
      alias: 'b',
      description: 'bundle name',
      type: 'string',
      default: 'component-controls.js',
    },
  },
  {
    name: 'dist',
    options: {
      alias: 'd',
      description: 'distribution (bundle output) folder',
      type: 'string',
      default: 'public',
    },
  },
  {
    name: 'static',
    options: {
      alias: 's',
      description: 'static assets folder',
      type: 'string',
      default: 'dist/static',
    },
  },
  {
    name: 'loglevel',
    options: {
      alias: 'l',
      description: 'log level',
      choices: ['all', 'errors', 'none'],
      default: 'all',
    },
  },
  {
    name: 'mode',
    options: {
      alias: 'm',
      description: 'NODE_ENV mode ',
      choices: ['production', 'development'],
      default: 'development',
    },
  },
];

export const cliArgs = (options: ArgOptions = []): Argv<CliArgTypes> => {
  return [...defaultCliArgs, ...options].reduce(
    (acc, option) => acc.option(option.name, option.options),
    yargs(process.argv),
  ) as Argv<CliArgTypes>;
};
