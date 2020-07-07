import { Configuration } from 'webpack';

export interface RuleOptions {
  name: string;
  config: Configuration;
}
export type RuleType = string | RuleOptions;

export type RuleTypes = RuleType[];

export interface PresetOptions {
  outputFolder?: string;
}

export type PresetCallback = (options?: PresetOptions) => Configuration;
export type PresetType = Configuration | PresetCallback;
