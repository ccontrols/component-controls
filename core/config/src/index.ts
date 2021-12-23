import * as path from 'path';
import * as fs from 'fs';

import { sync as globSync } from 'glob';
import globBase from 'glob-base';
import { makeRe } from 'micromatch';
import yargs from 'yargs';
import {
  BuildConfiguration,
  RunConfiguration,
  defaultBuildConfig,
  mergeConfig,
  defaultRunConfig,
  convertConfig,
} from '@component-controls/core';
import { dynamicRequire } from '@component-controls/core/node-utils';
import { render as reactRender } from '@component-controls/render/react';
import {
  defaultMDXOptions,
  InstrumentOptions,
} from '@component-controls/instrument';

export const buildConfigFileNames = [
  'buildtime.js',
  'buildtime.ts',
  'build.js',
  'build.ts',
  'main.js',
  'main.ts',
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

let warningIssued = false;
export const loadConfig = (
  configPath: string,
): ConfigurationResult | undefined => {
  const hasConfigFolder = fs.existsSync(configPath);
  if (!hasConfigFolder && !warningIssued) {
    console.warn('configuration folder not found', configPath);
    warningIssued = true;
  }
  const allFiles = hasConfigFolder ? fs.readdirSync(configPath) : [];
  const buildConfigFile = allFiles.find(file =>
    buildConfigFileNames.includes(file.toLowerCase()),
  );
  const optionsFile = allFiles.find(file =>
    optionsFileNames.includes(file.toLowerCase()),
  );
  if (buildConfigFile) {
    const buildPath = path.resolve(configPath, buildConfigFile);
    let config = dynamicRequire(buildPath);
    if (
      !config ||
      (typeof config === 'object' && Object.keys(config).length === 0)
    ) {
      config = require(buildPath);
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
  defaultConfigPath?: string,
): ConfigurationResult | undefined => {
  const folder = configFolder ?? getConfigurationArg(args) ?? defaultConfigPath;
  const configPath = folder ? path.resolve(baseFolder, folder) : baseFolder;
  return loadConfig(configPath);
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

export const isMDXDocument = (
  filePath: string,
  options?: InstrumentOptions,
): boolean => {
  const test = options?.mdx?.test || defaultMDXOptions.test;
  if (test) {
    return filePath.match(test) !== null;
  }
  return false;
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
        const glob = useSubdirectories ? base.glob.substring(3) : base.glob;
        const regExp = base.isGlob
          ? RegExp(makeRe(glob).source.substring(1))
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
 * loads bot the build time and run time configurations
 * @param rootPath the roo path of the project
 * @param configFilePath the config folder - relative to the root path
 * @returns merged configuration
 */
export const loadConfigurations = (configPath: string): RunConfiguration => {
  const config = loadConfig(configPath);
  const buildConfig: BuildConfiguration = config
    ? mergeConfig(defaultBuildConfig, config.config)
    : defaultBuildConfig;

  let runtimeConfig = {};
  if (config?.optionsFilePath) {
    const req = require(config?.optionsFilePath);
    runtimeConfig = req.default || req;
  }
  const runConfig = mergeConfig(defaultRunConfig, runtimeConfig);
  const final: ReturnType<typeof loadConfigurations> = mergeConfig(
    defaultRunConfig,
    convertConfig(mergeConfig(buildConfig, runConfig)),
  );
  if (!final.renderFn) {
    final.renderFn = reactRender;
  }

  return final;
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
