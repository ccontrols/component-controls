import * as path from 'path';
import * as fs from 'fs';

import { sync as globSync } from 'glob';
import globBase from 'glob-base';
import { makeRe } from 'micromatch';

import yargs from 'yargs';
import { BuildConfiguration } from '@component-controls/core';

export const buildConfigFileNames = ['buildtime.js', 'build.js', 'main.js'];

export const optionsFileNames = [
  'runtime.js',
  'options.js',
  'runtime.ts',
  'runtime.tsx',
  'options.ts',
  'options.tsx',
];
export interface ConfigrationResult {
  config: BuildConfiguration;
  configPath: string;
  optionsFilePath?: string;
}
/**
 * return the configration folder from command-line parameters
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
): ConfigrationResult | undefined => {
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
    return {
      config: require(path.resolve(configPath, buildConfigFile)),
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
}: ConfigrationResult): string[] | undefined => {
  const documents =
    config && config.stories
      ? config.stories.reduce((acc: string[], storyRg: string) => {
          const matches = globSync(path.resolve(configPath, fixGlob(storyRg)));
          if (!matches.length) {
            throw new Error(`${storyRg} did not match any files`);
          }
          return [...acc, ...matches];
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
}: ConfigrationResult): RequireContextProps[] | undefined => {
  const contexts =
    config && config.stories
      ? config.stories.reduce((acc: RequireContextProps[], storyRg: string) => {
          const base = globBase(fixGlob(storyRg));
          const useSubdirectories = base.glob.startsWith('**');
          const glob = useSubdirectories ? base.glob.substr(3) : base.glob;
          const regExp = base.isGlob
            ? RegExp(makeRe(glob).source.substr(1))
            : new RegExp(glob);
          console.log(glob, regExp, storyRg);
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
