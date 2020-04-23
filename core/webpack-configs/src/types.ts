import { Configuration } from 'webpack';

export interface RuleOptions {
  name: string;
  config: Configuration;
}
export type RuleType = string | RuleOptions;

export type RuleTypes = RuleType[];
