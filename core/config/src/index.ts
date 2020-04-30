import * as path from 'path';
import * as fs from 'fs';
import { sync as globSync } from 'glob';
import yargs from 'yargs';
import { Configuration } from '@component-controls/specification';

export const configFileNames = ['main.js', 'main.json', 'main.ts'];

export interface ConfigrationResult {
  config: Configuration;
  configPath: string;
}
/**
 * return the configration object
 * command line accepts -c/ -config parameter for config path
 * the config file is assumed named main.js/main.ts
 * @param baseFolder project folder to start the searh with
 */
export const getConfiguration = (
  baseFolder: string,
  args: string[] = process.argv,
): ConfigrationResult | undefined => {
  const argv = yargs(args)
    .option('config', {
      alias: 'c',
      description: 'configuration folder',
      type: 'string',
    })
    .help()
    .alias('help', 'h').argv;

  const configPath = argv.config
    ? path.resolve(baseFolder, argv.config)
    : baseFolder;
  const configFiles = fs.readdirSync(configPath);
  const configFile = configFiles.find(file =>
    configFileNames.includes(file.toLowerCase()),
  );

  return configFile
    ? {
        config: require(path.resolve(configPath, configFile)),
        configPath,
      }
    : undefined;
};

/**
 * find the story files out of a configuration file
 * using glob for the regex file search
 * @param param0 configuration info return by getConfiguration
 */
export const extractStories = ({
  config,
  configPath,
}: ConfigrationResult): string[] | undefined => {
  const stories =
    config && config.stories
      ? config.stories.reduce((acc: string[], storyRg: string) => {
          const regex = storyRg.replace(/\((.*?)\)/g, '+($1)');
          return [...acc, ...globSync(path.resolve(configPath, regex))];
        }, [])
      : undefined;
  return stories;
};
