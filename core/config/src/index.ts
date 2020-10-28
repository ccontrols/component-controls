import * as path from 'path';
import * as fs from 'fs';

import { sync as globSync } from 'glob';
import globBase from 'glob-base';
import { makeRe } from 'micromatch';

import yargs from 'yargs';
import { BuildConfiguration } from '@component-controls/core';

export const buildConfigFileNames = [
  'buildtime.js',
  'build.js',
  'main.js',
  'doczrc.js',
];

export const optionsFileNames = [
  'runtime.js',
  'options.js',
  'runtime.ts',
  'runtime.tsx',
  'options.ts',
  'options.tsx',
];
export interface ConfigurationResult {
  config: BuildConfiguration;
  configPath: string;
  optionsFilePath?: string;
}
/**
 * return the configuration folder from command-line parameters
 * command line accepts -c/ -config parameter for config path
 * the config file is assumed named main.js/main.ts
 * @param baseFolder project folder to start the search with
 */
export const getConfigurationArg = (
  args: string[] = process.argv,
): string | undefined => {
  const argv = yargs(args)
    .option('config', {
      alias: 'c',
      description: 'configuration folder',
      type: 'string',
    })
    .help()
    .alias('help', 'h').argv;
  return argv.config;
};

/**
 *  given a base project folder and a configuration folder, returns the configuration file
 *
 * @param baseFolder project folder to start the search with
 * @param configFolder folder where the configuration file is located
 * @param args optional arguments
 */
export const loadConfiguration = (
  baseFolder: string,
  configFolder?: string,
  args?: string[],
): ConfigurationResult | undefined => {
  const folder = configFolder ?? getConfigurationArg(args);
  const configPath = folder ? path.resolve(baseFolder, folder) : baseFolder;
  const hasConfigFolder = fs.existsSync(configPath);
  if (!hasConfigFolder) {
    console.warn('configuration folder not found', configPath);
  }
  const allFiles = hasConfigFolder ? fs.readdirSync(configPath) : [];
  const buildConfigFile = allFiles.find(file =>
    buildConfigFileNames.includes(file.toLowerCase()),
  );
  const optionsFile = allFiles.find(file =>
    optionsFileNames.includes(file.toLowerCase()),
  );
  if (buildConfigFile) {
    const buildPagth = path.resolve(configPath, buildConfigFile);
    let config = require('esm')(module)(buildPagth);
    if (
      !config ||
      (typeof config === 'object' && Object.keys(config).length === 0)
    ) {
      config = require(buildPagth);
    }
    return {
      config: config.default || config,
      optionsFilePath: optionsFile
        ? path.resolve(configPath, optionsFile)
        : undefined,
      configPath,
    };
  }
  return undefined;
};

//fix for sb5 issue handling glob
const fixGlob = (golbExpr: string): string => golbExpr.replace('.(', '.@(');

/**
 * find the story files out of a configuration file
 * using glob for the regex file search
 */
export const extractDocuments = ({
  config,
  configPath,
}: ConfigurationResult): string[] | undefined => {
  const stories = config ? config.stories || config.files : undefined;
  const files = typeof stories === 'string' ? [stories] : stories;
  const documents = files
    ? files.reduce((acc: string[], storyRg: string) => {
        const matches = globSync(path.resolve(configPath, fixGlob(storyRg)));
        if (!matches.length) {
          throw new Error(`${storyRg} did not match any files`);
        }
        const ignore = config.ignore || [];
        const files = matches.filter(filename => {
          const basename = path.basename(filename).toLowerCase();
          return !ignore.includes(basename);
        });
        return [...acc, ...files];
      }, [])
    : undefined;
  return documents;
};

/**
 * from the glob list of documents, extract require.context array of props
 */
export interface RequireContextProps {
  directory: string;
  useSubdirectories: boolean;
  regExp: RegExp;
}
/**
 * convert glob patters from config file into require.context objects
 */
export const configRequireContext = ({
  config,
  configPath,
}: ConfigurationResult): RequireContextProps[] | undefined => {
  const stories = config ? config.stories || config.files : undefined;
  const files = typeof stories === 'string' ? [stories] : stories;

  const contexts = files
    ? files.reduce((acc: RequireContextProps[], storyRg: string) => {
        const base = globBase(fixGlob(storyRg));
        const useSubdirectories = base.glob.startsWith('**');
        const glob = useSubdirectories ? base.glob.substr(3) : base.glob;
        const regExp = base.isGlob
          ? RegExp(makeRe(glob).source.substr(1))
          : new RegExp(glob);
        return [
          ...acc,
          {
            directory: path.resolve(configPath, base.base),
            useSubdirectories,
            regExp,
          },
        ];
      }, [])
    : undefined;
  return contexts;
};

/**
 * merge a configuration passed through cli or tools, with the build configration from the config path
 */
export const mergeBuildConfiguration = (
  config: BuildConfiguration,
): BuildConfiguration => {
  const { configPath } = config;
  const buildConfig = loadConfiguration(process.cwd(), configPath);
  return { ...buildConfig?.config, ...config };
};
